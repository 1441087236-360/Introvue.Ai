'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useUser } from '@clerk/nextjs'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { chatSession } from '@/utils/GeminiAIModal'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { LoaderCircle } from 'lucide-react'
import { eq } from 'drizzle-orm'

export default function AskAi() {
  const { user, isLoaded } = useUser()
  const [open, setOpen] = useState(false)

  // Chat messages
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Hi! Create an interview, then click 🤖 to start chatting.' },
  ])

  // Current input text
  const [input, setInput] = useState('')

  // Loading states
  const [loading, setLoading] = useState(false)
  const [loadingContext, setLoadingContext] = useState(false)

  // Latest interview context from DB
  const [contextData, setContextData] = useState({
    jobPosition: '',
    jobDesc: '',
    interviewRound: '',
    jobExperience: '',
  })

  // Reference for autofocus
  const inputRef = useRef(null)

  // 1) When dialog opens, fetch latest interview row
  useEffect(() => {
    if (!open || !isLoaded) return

    setLoadingContext(true)
    db.select()
      .from(MockInterview)
      .where(eq(MockInterview.createdBy, user.primaryEmailAddress.emailAddress))
      .orderBy(MockInterview.createdAt, 'desc')
      .limit(1)
      .execute()
      .then((rows) => {
        if (rows.length) {
          const rec = rows[0]
          setContextData({
            jobPosition: rec.jobPosition,
            jobDesc:       rec.jobDesc,
            interviewRound:rec.interviewRound,
            jobExperience: rec.jobExperience,
          })
          setMessages([
            { role: 'ai', text: 'Hello! Ask me anything about interview.' },
          ])
        } else {
          setMessages([
            { role: 'ai', text: 'No interview found—please create one first!' },
          ])
        }
      })
      .catch((err) => {
        console.error(err)
        setMessages([{ role: 'ai', text: 'Error loading interview context.' }])
      })
      .finally(() => {
        setLoadingContext(false)
        // autofocus input after context is ready
        
          inputRef.current?.focus()
        
      })
  }, [open, isLoaded, user])

  // 2) Send message handler
  const sendMessage = async () => {
    const trimmed = input.trim()
    if (!trimmed || !contextData.jobPosition) return

    // add user message
    setMessages((m) => [...m, { role: 'user', text: trimmed }])
    setInput('')
    setLoading(true)

    // build prompt
    const candidateName  = user.fullName || user.firstName || user.id
    const candidateEmail = user.primaryEmailAddress.emailAddress
    const { jobPosition, jobDesc, interviewRound, jobExperience } = contextData

    const prompt = `
      You are an AI interviewer for:

      Candidate:
      - Name:  ${candidateName}
      - Email: ${candidateEmail}

      Interview details:
      - Position: ${jobPosition}
      - Round:    ${interviewRound}
      - Desc:     ${jobDesc}
      - Experience: ${jobExperience} years

      Now answer the candidate’s question: "${trimmed}"
          `

    try {
      const res    = await chatSession.sendMessage(prompt)
      const aiText = await res.response.text()
      setMessages((m) => [...m, { role: 'ai', text: aiText }])
    } catch (err) {
      console.error(err)
      setMessages((m) => [
        ...m,
        { role: 'ai', text: "Sorry, I couldn't respond right now." },
      ])
    } finally {
      setLoading(false)
      // refocus after response
      inputRef.current?.focus()
    }
  }

  // 3) Prevent rendering until user is loaded
  if (!isLoaded) return null

  return (
    <div>
      {/* Floating open-chat button */}
      <Button
        onClick={() => setOpen(true)}
        className=" h-14 w-14 flex items-center justify-center
                   border border-borderPrimary bg-black rounded-lg text-2xl
                   shadow-lg p-5 hover:bg-primary/90 z-50"
        aria-label="Open InterviewBot"
      >
        🤖
      </Button>

      {/* Chat dialog */}
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="fixed  md:bottom-16 md:right-8 max-w-md w-full h-[550px]
                                  flex flex-col bg-secondary border-none
                                  rounded-xl shadow-xl overflow-hidden z-50">
          <DialogHeader className="border-b  border-gray-500">
            <DialogTitle className="text-lg pt-0 text-white">InterviewBot</DialogTitle>
            <DialogDescription className="text-sm pb-1 mb-0 text-gray-500">
              {loadingContext ? 'Loading context…' : 'Ask anything about your interview.'}
            </DialogDescription>
          </DialogHeader>

          <ScrollArea className="flex-1 px-4 py-2 space-y-1">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`px-3 py-2 gap-5 my-5 max-w-[80%] break-words rounded-lg ${
                    msg.role === 'user'
                      ? 'bg-blue-400 text-white'
                      : 'bg-gray-400 text-white'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </ScrollArea>

          <div className="flex items-center border-t border-gray-500 p-3 gap-2">
            <Input
              ref={inputRef}
              placeholder="Type your question…"
              value={input}
              disabled={loadingContext}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  sendMessage()
                }
              }}
              className="flex-1 bg-secondary border-gray-500/75 rounded-full text-white placeholder-gray-500/75"
        
            />
            <Button
              className="h-10 w-10 flex items-center justify-center
                         bg-transparent hover:bg-transparent hover: text-white rounded-full"
              onClick={sendMessage}
              disabled={loading || !contextData.jobPosition}
            >
              {loading
                ? <LoaderCircle className="animate-spin" />
                : 'Send'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    
    </div>
  )
}
