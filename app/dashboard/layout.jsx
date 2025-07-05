import React from 'react'
import Header from './_components/Header'

function DashboardLayout({children}) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Header />
      {/* Main content */}
      <main className="flex-1 pl-10 pr-10 lg:pl-28 lg:pr-28 min-h-screen bg-black text-white py-20 ml-0 md:ml-20 lg:ml-64 md:pb-0 md:pt-0">

        {children}
      </main>
    </div>
  )
}

export default DashboardLayout