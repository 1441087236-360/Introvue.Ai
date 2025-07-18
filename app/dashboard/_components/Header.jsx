"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { UserButton, UserProfile } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Header() {
  const path = usePathname();

  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: (
       
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" viewBox="0 0 24 24" width="28" height="28" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;">
        <defs>
          <clipPath id="__lottie_element_291">
            <rect width="512" height="512" x="0" y="0"></rect>
          </clipPath>
        </defs>
        <g clip-path="url(#__lottie_element_291)">
        <g transform="matrix(1,0,0,1,-17,-41.4639892578125)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,273,295.73199462890625)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(0,0,0)" stroke-opacity="1" stroke-width="42" d=" M153.65699768066406,-66.62799835205078 C153.65699768066406,-66.62799835205078 27.656999588012695,-176.8780059814453 27.656999588012695,-176.8780059814453 C11.822999954223633,-190.73199462890625 -11.822999954223633,-190.73199462890625 -27.656999588012695,-176.8780059814453 C-27.656999588012695,-176.8780059814453 -153.65699768066406,-66.62799835205078 -153.65699768066406,-66.62799835205078 C-162.77099609375,-58.652000427246094 -168,-47.12799835205078 -168,-35.018001556396484 C-168,-35.018001556396484 -168,148.73199462890625 -168,148.73199462890625 C-168,171.9290008544922 -149.19700622558594,190.73199462890625 -126,190.73199462890625 C-126,190.73199462890625 126,190.73199462890625 126,190.73199462890625 C149.1959991455078,190.73199462890625 168,171.9290008544922 168,148.73199462890625 C168,148.73199462890625 168,-35.018001556396484 168,-35.018001556396484 C168,-47.12799835205078 162.77099609375,-58.652000427246094 153.65699768066406,-66.62799835205078z"></path></g></g><g transform="matrix(1,0,0,1,88,172)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,168,189)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(0,0,0)" stroke-opacity="1" stroke-width="42" d=" M63,84 C63,84 -63,84 -63,84 C-63,84 -63,-42 -63,-42 C-63,-65.1969985961914 -44.196998596191406,-84 -21,-84 C-21,-84 21,-84 21,-84 C44.19599914550781,-84 63,-65.1969985961914 63,-42 C63,-42 63,84 63,84z"></path></g></g></g>
        </svg>
      ),
    },
    {
      name: "Questions",
      href: "/dashboard/questions",
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 16V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2z" />
        </svg>
      ),
    },
    {
      name: "Upgrade",
      href: "/dashboard/upgrade",
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      name: "How it Works?",
      href: "/dashboard/how",
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 16V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2z" />
        </svg>
      ),
    },
  ];

  // Desktop & Tablet Sidebar
  return (
    <>
      {/* Sidebar for desktop and tablet */}
      <style>{`
        @media (min-width: 768px) {
          .sidebar { width: 4.5rem; }
        }
        @media (min-width: 1024px) {
          .sidebar { width: 16rem; max-width: 100vw; }
        }
      `}</style>
      <aside
        className={`
          sidebar
          hidden
          md:flex
          flex-col
          fixed
          top-0
          left-0
          h-full
          bg-black
          border-r border-[#fff4af]
          shadow-lg
          z-50
          w-64
        `}

      
      >
        {/* Logo */}
        <div className="hidden lg:flex items-center justify-left cursor-pointer pl-5 py-6 ">
          <Image src={'/logo.svg'} width={160} height={100} alt='logo' className="" />
          
        </div>
        {/* Nav Items */}
        <nav className="flex-1 flex flex-col p-5 gap-3 mt-6">
          {navItems.map((item) => (
            <Link href={item.href} key={item.name}>
              <div
                className={`
                  flex items-center gap-5
                  pl-2 py-3
                  rounded-lg
                  cursor-pointer
                  transition-all
                  hover:bg-[#1b1f23]
                  ${path === item.href ? " font-bold text-white" : "text-white/95"}
                  lg:justify-start
                  md:justify-center
                `}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="hidden lg:inline">{item.name}</span>
              </div>
            </Link>
          ))}
        </nav>

        {/* User profile at bottom */}

        {/* <div className="flex justify-center items-center py-6 ">
          <UserButton />
        </div> */}
        <div className='p-5 mt-auto mb-4 gap-3 '>
          <Link href="/dashboard/profile">
          <div
            className={`
              flex items-center gap-5
              pl-2 py-3
              rounded-lg
              cursor-pointer
              transition-all
              hover:bg-[#1b1f23]
            text-white/95
              lg:justify-start
              md:justify-center
              
            `}
          >
            <span className="text-xl"><UserButton /></span>
            <span className="hidden lg:inline">Profile</span>
          </div>
          </Link>
        </div>
      </aside>

      {/* Top navbar for mobile */}
      
      <div
        className={`
          box-border
          fixed
          top-0 left-0 right-0
          md:hidden
          flex
          justify-evenly
        
          flex-row
          bg-black
          items-center
          px-4
          h-14
          w-full
          z-50
          border-b border-borderprimary
          shadow-lg
        `}
      >
     
        <div className='ml-0 mr-auto'></div>
        <div className='cursor-pointer '>
        <Link href='#'>
        <Image src={'/logo.svg'} className='' width={100} height={40} alt='logo' />
        </Link>
        </div>
        <div className="justify-end ml-auto mr-0">
        <UserButton className="" />
      </div>
       
      
      </div>

      {/* Bottom nav for mobile */}
      <nav
        className={`
          box-border
          fixed
          bottom-0 left-0 right-0
          md:hidden
          flex
          justify-evenly
          unicode-bidi-isolate
          flex-row
          bg-black
          items-center
          
          px-4
          h-14
          w-full
          z-50
          border-t border-borderprimary
          shadow-lg
        `}
      >
        {navItems.map((item) => (
          <Link href={item.href} key={item.name}>
            <Button
              className={`
                flex flex-col items-center justify-center
                px-2 py-1
                rounded bg-black hover:bg-black
                transition
                ${path === item.href ? "font-bold fill-white border-b-2 border-borderPrimary text-white" : "text-white/95"}
                
              `}
            >
              <span >{item.icon}</span>
              {/* <span className="text-xs">{item.name.split(" ")[0]}</span> */}
            </Button>
          </Link>
        ))}
      </nav>

      {/* Padding for main content */}
      <div className="md:hidden" /> {/* mobile topbar height */}
      <div className="md:hidden" /> {/* mobile bottombar height */}
      
    </>
  );
}

export default Header
