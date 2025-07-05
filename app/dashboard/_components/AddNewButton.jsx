
import React from 'react'
import { Button } from '@/components/ui/button'
import AskAi from './AskAi'

function AddNewButton({ onClick }) {
  return (
    <div className=''>
    
    <Button
      onClick={onClick}
      className="h-14 w-14 text-black bg-white rounded-lg text-4xl shadow-lg p-5 hover:bg-primary/90 font-semibold  font-weight-900"
      aria-label="Add New Interview"
    >
      + 
    </Button>
    
    
    </div>

  )
}

export default AddNewButton