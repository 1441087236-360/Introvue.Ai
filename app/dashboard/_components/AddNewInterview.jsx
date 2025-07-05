"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { chatSession } from '@/utils/GeminiAIModal'
import { LoaderCircle } from 'lucide-react'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

function AddNewInterview({ open, setOpen }) {
    const [jobPosition,setJobPosition]=useState();
    const [interviewRound, setInterviewRound] = useState();
    const [jobDesc,setJobDesc]=useState();
    const [jobExperience,setJobExperience]=useState();
    const [loading,setLoading]=useState(false);
    const [jsonResponse,setJsonResponse]=useState([]);
    const [error,setError]=useState("");
    const router=useRouter();
    const {user}=useUser();
    const onSubmit=async(e)=>{
        setLoading(true)
        setError("");
        e.preventDefault()
        console.log(jobPosition,jobDesc,jobExperience, interviewRound);

        const InputPrompt="Job position: "+jobPosition+ ", Interview Round: "+interviewRound+", Job Description: "+jobDesc+", Years of Experience : "+jobExperience+" , Depends on Job Position, Job Description & Years of Experience give us "+process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT+" Interview question along with Answer in JSON format, Give us question and answer field on JSON"

        let MockJsonResp = null;
        try {
            const result=await chatSession.sendMessage(InputPrompt);
            MockJsonResp=(result.response.text()).replace('```json','').replace('```','')
            console.log(JSON.parse(MockJsonResp));
            setJsonResponse(MockJsonResp);

        } catch (error) {
            console.error("Error generating interview questions:", error);
            setError("Oops, our AI service is currently down, please try again later.");
        } finally {
            setLoading(false);
        }

        if(MockJsonResp)
        {
            const resp=await db.insert(MockInterview)
            .values({
                mockId:uuidv4(),
                jsonMockResp:MockJsonResp,
                interviewRound: interviewRound,
                jobPosition:jobPosition,
                jobDesc:jobDesc,
                jobExperience:jobExperience,
                createdBy:user?.primaryEmailAddress?.emailAddress,
                createdAt:moment().format('DD-MM-yyyy')
            }).returning({mockId:MockInterview.mockId});

            console.log("Inserted ID:",resp)
            if(resp)
            {
                setOpen(false);
                router.push('/dashboard/interview/'+resp[0]?.mockId)
            }
        }
        else{
            console.log("ERROR");
        }
        setLoading(false);
    }
  return (
    <div className='p-10'>
        <div className='lg:p-10 p-10 border rounded-lg
        hover:scale-105 hover:shadow-md cursor-pointer
         transition-all'
         onClick={() => setOpen(true)}
         style={{ backgroundColor: '#1b1f23' }}
         >
         
            <h2 className='text-lg text-white font-bold text-center'>+ Add New</h2>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
       
        <DialogContent className="max-w-2xl" style={{backgroundColor: '#1b1f23' }}>
            <DialogHeader >
            <DialogTitle className="text-2xl font-semibold text-white" >Tell us more about your job interviwing</DialogTitle>
            <DialogDescription>
                <form onSubmit={onSubmit}>
                <div>

                    <h2 className='text-white/75'>Add Details about yout job position/role, Job description and years of experience</h2>

                    <div className="mt-7 text-white/75 my-3">
                    <label>Interview Round</label>
                        <Select
                            value={interviewRound}
                            required
                            onValueChange={(value) => setInterviewRound(value)}
                        >
                            <SelectTrigger style={{ backgroundColor: '#1b1f23', borderColor: '#333' }}>
                                <SelectValue
                                    placeholder="Ex. HR Round"
                                    style={{ color: interviewRound ? '#fff' : '#888' }}
                                />
                            </SelectTrigger>
                            <SelectContent style={{ backgroundColor: '#1b1f23', color: '#fff' }} className='text-white/75'>
                                <SelectItem value="hr round">HR Round</SelectItem>
                                <SelectItem value="technical round">Technical Round</SelectItem>
                                <SelectItem value="telephonic round">Telephonic Round</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className='mt-7 text-white/75 my-3'>
                        <label className="mb-1">Job Role/Job Position</label>
                        <Input style={{backgroundColor: '#1b1f23'}} placeholder="Ex. Full Stack Developer" required
                        onChange={(event)=>setJobPosition(event.target.value)}
                        />
                    </div>
                    <div className='text-white/75 my-3'>
                        <label>Job Description/ Tech Stack (In Short)</label>
                        <Textarea style={{backgroundColor: '#1b1f23'}} placeholder="Ex. React, Angular, NodeJs, MySql etc" 
                        required
                        onChange={(event)=>setJobDesc(event.target.value)} />
                    </div>
                    <div className='text-white/75 my-3'>
                        <label>Years of experience</label>
                        <Input style={{backgroundColor: '#1b1f23'}} placeholder="Ex.5"  type="number"  max="100" 
                        required
                        onChange={(event)=>setJobExperience(event.target.value)}
                        />
                    </div>
                </div>
                <div className='flex gap-5 text-white/75 justify-end'>
                    <Button type="button" className="hover:font-semibold font-semibold" variant="ghost" onClick={()=>setOpen(false)}>Cancel</Button>
                    <Button type="submit" className="bg-black font-semibold hover:font-semibold hover:bg-white hover:text-black" disabled={loading} >
                        {loading? 
                        <>
                        <LoaderCircle className='animate-spin' />Generating from AI
                        </>:'Start Interview'    
                    }
                        </Button>
                </div>
                {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                </form>
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
        </Dialog>

    </div>
  )
}

export default AddNewInterview