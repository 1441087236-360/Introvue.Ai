"use client"
import { UserButton } from '@clerk/nextjs'
import React from 'react'
import AddNewInterview from './_components/AddNewInterview'
import InterviewList from './_components/InterviewList'
import AddNewButton from './_components/AddNewButton'
import { useState } from 'react'
import AskAi from './_components/AskAi'

function DashboardHome() {
  const [open, setOpen] = React.useState(false); // State to control the modal visibility
  
  return (
    
    <div className='lg:p-5 '>
      <h2 className='font-bold text-3xl text-primary'>Dashboard</h2>
      <h2 className='text-gray-500'>Create and Start your AI Mockup Interview</h2>

      <div className='grid grid-cols-1 md:grid-cols-3 my-5 gap-5'>
        <AddNewInterview open={open} setOpen={setOpen} />
      </div>

      {/* Previous Interview List  */}
      <InterviewList />
      <div className= "bottom-[88px] right-8 z-50 fixed flex flex-1 transition flex-col my-5 gap-5">
        <AskAi />
        <AddNewButton onClick={() => setOpen(true)} />
        
      </div>
    </div>
  )
}

export default DashboardHome