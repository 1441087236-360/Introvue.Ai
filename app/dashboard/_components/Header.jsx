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
       
        <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={28}
    height={28}
    preserveAspectRatio="xMidYMid meet"
    style={{
      width: "100%",
      height: "100%",
      transform: "translate3d(0px, 0px, 0px)",
      contentVisibility: "visible",
     
    }}
    
    
  >
    <g transform="scale(0.046875)">
      <defs>
        <clipPath id="__lottie_element_291">
          <rect width={512} height={512} x={0} y={0} />
        </clipPath>
      </defs>
      <g clipPath="url(#__lottie_element_291)">
        <g
          transform="matrix(1,0,0,1,-17,-41.4639892578125)"
          opacity={1}
          style={{
            display: "block",
          }}
        >
          <g opacity={1} transform="matrix(1,0,0,1,273,295.73199462890625)">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              fillOpacity={0}
              stroke="rgb(255,255,255)"
              strokeOpacity={1}
              strokeWidth={42}
              d=" M153.65699768066406,-66.62799835205078 C153.65699768066406,-66.62799835205078 27.656999588012695,-176.8780059814453 27.656999588012695,-176.8780059814453 C11.822999954223633,-190.73199462890625 -11.822999954223633,-190.73199462890625 -27.656999588012695,-176.8780059814453 C-27.656999588012695,-176.8780059814453 -153.65699768066406,-66.62799835205078 -153.65699768066406,-66.62799835205078 C-162.77099609375,-58.652000427246094 -168,-47.12799835205078 -168,-35.018001556396484 C-168,-35.018001556396484 -168,148.73199462890625 -168,148.73199462890625 C-168,171.9290008544922 -149.19700622558594,190.73199462890625 -126,190.73199462890625 C-126,190.73199462890625 126,190.73199462890625 126,190.73199462890625 C149.1959991455078,190.73199462890625 168,171.9290008544922 168,148.73199462890625 C168,148.73199462890625 168,-35.018001556396484 168,-35.018001556396484 C168,-47.12799835205078 162.77099609375,-58.652000427246094 153.65699768066406,-66.62799835205078z"
            />
          </g>
        </g>
        <g
          transform="matrix(1,0,0,1,88,172)"
          opacity={1}
          style={{
            display: "block",
          }}
        >
          <g opacity={1} transform="matrix(1,0,0,1,168,189)">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              fillOpacity={0}
              stroke="rgb(255,255,255)"
              strokeOpacity={1}
              strokeWidth={42}
              d=" M63,84 C63,84 -63,84 -63,84 C-63,84 -63,-42 -63,-42 C-63,-65.1969985961914 -44.196998596191406,-84 -21,-84 C-21,-84 21,-84 21,-84 C44.19599914550781,-84 63,-65.1969985961914 63,-42 C63,-42 63,84 63,84z"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
      ),
    },
    {
      name: "Questions",
      href: "/dashboard/questions",
      icon: (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 24 24"
    width={28}
    height={28}
    preserveAspectRatio="xMidYMid meet"
    style={{
      width: "100%",
      height: "100%",
      transform: "translate3d(0px, 0px, 0px)",
      contentVisibility: "visible",
    }}
    
  >
    <g transform="scale(0.046875)">
      <defs>
        <clipPath id="__lottie_element_1059">
          <rect width={512} height={512} x={0} y={0} />
        </clipPath>
      </defs>
      <g clipPath="url(#__lottie_element_1059)">
        <g
          transform="matrix(1,0,0,1,232.72000122070312,327.5069885253906)"
          opacity={1}
          style={{
            display: "block",
          }}
        >
          <g
            opacity={1}
            transform="matrix(1,0,0,1,23.2549991607666,22.090999603271484)"
          >
            <path
              fill="rgb(255,255,255)"
              fillOpacity={1}
              d=" M-14.715999603271484,-14.069000244140625 C-22.951000213623047,-5.9019999504089355 -23.0049991607666,7.394999980926514 -14.838000297546387,15.628999710083008 C-10.918000221252441,19.582000732421875 -5.589000225067139,21.81599998474121 -0.02199999988079071,21.840999603271484 C5.546999931335449,21.795000076293945 10.88700008392334,19.615999221801758 14.897000312805176,15.75100040435791 C23.0049991607666,7.465000152587891 23.0049991607666,-5.781000137329102 14.897000312805176,-14.067000389099121 C6.557000160217285,-21.84000015258789 -6.374000072479248,-21.840999603271484 -14.715999603271484,-14.069000244140625z"
            />
          </g>
        </g>
        <g
          transform="matrix(1,-0.0000047171056394290645,0.0000047171056394290645,1,102.2681884765625,29.971038818359375)"
          opacity={1}
          style={{
            display: "block",
          }}
        >
          <g
            opacity={1}
            transform="matrix(1,0,0,1,153.7310028076172,172.89199829101562)"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              fillOpacity={0}
              stroke="rgb(255,255,255)"
              strokeOpacity={1}
              strokeWidth={42}
              d=" M-48.73099899291992,-42.827999114990234 C-39.46799850463867,-57.86600112915039 -22.85099983215332,-67.89199829101562 -3.8929998874664307,-67.89199829101562 C25.170000076293945,-67.89199829101562 48.73099899291992,-44.33100128173828 48.73099899291992,-15.267999649047852 C48.73099899291992,13.795000076293945 25.170000076293945,37.35499954223633 -3.8929998874664307,37.35499954223633 C-3.8929998874664307,37.35499954223633 -3.8929998874664307,67.89199829101562 -3.8929998874664307,67.89199829101562"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
      ),
    },
    {
      name: "Upgrade",
      href: "/dashboard/upgrade",
      icon: (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 24 24"
    width={28}
    height={28}
    preserveAspectRatio="xMidYMid meet"
    style={{
      width: "100%",
      height: "100%",
      transform: "translate3d(0px, 0px, 0px)",
      contentVisibility: "visible",
    }}
    
  >
    <g transform="scale(0.046875)">
      <defs>
        <clipPath id="__lottie_element_218">
          <rect width={512} height={512} x={0} y={0} />
        </clipPath>
      </defs>
      <g clipPath="url(#__lottie_element_218)">
        <g
          transform="matrix(0.9999961256980896,0,0,0.9999961256980896,46.00080871582031,25.000900268554688)"
          opacity={1}
          style={{
            display: "block",
          }}
        >
          <g opacity={1} transform="matrix(1,0,0,1,210,231)">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              fillOpacity={0}
              stroke="rgb(255,255,255)"
              strokeOpacity={1}
              strokeWidth={42.00016342226673}
              d="M0 0"
            />
          </g>
        </g>
        <g
          transform="matrix(0.9999961256980896,0,0,0.9999961256980896,46.00080871582031,25.000900268554688)"
          opacity={1}
          style={{
            display: "block",
          }}
        >
          <g opacity={1} transform="matrix(1,0,0,1,210,231)">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              fillOpacity={0}
              stroke="rgb(255,255,255)"
              strokeOpacity={1}
              strokeWidth={42.00016342226673}
              d=" M105,-84 C105,-107.1969985961914 86.1969985961914,-126 63,-126 C63,-126 0,-126 0,-126 C0,-126 -21,-126 -21,-126 C-21,-126 -42,-126 -42,-126 C-76.79499816894531,-126 -105,-97.79499816894531 -105,-63 C-105,-28.207000732421875 -76.79499816894531,0 -42,0 C-42,0 -21,0 -21,0 C-21,0 0,0 0,0 C0,0 42,0 42,0 C76.79499816894531,0 105,28.204999923706055 105,63 C105,97.79299926757812 76.79499816894531,126 42,126 C42,126 21,126 21,126 C21,126 0,126 0,126 C0,126 -63,126 -63,126 C-86.1969985961914,126 -105,107.19400024414062 -105,84"
            />
          </g>
        </g>
        <g
          transform="matrix(0.9999961256980896,0,0,0.9999961256980896,235.0000762939453,46.00082015991211)"
          opacity={1}
          style={{
            display: "block",
          }}
        >
          <g opacity={1} transform="matrix(1,0,0,1,0,0)">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              fillOpacity={0}
              stroke="rgb(255,255,255)"
              strokeOpacity={1}
              strokeWidth={42}
              d=" M21,21 C21,21 21,84 21,84"
            />
          </g>
          <g opacity={1} transform="matrix(1,0,0,1,0,0)">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              fillOpacity={0}
              stroke="rgb(255,255,255)"
              strokeOpacity={1}
              strokeWidth={42}
              d=" M21,336 C21,336 21,399 21,399"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
      ),
    },
    {
      name: "How it Works?",
      href: "/dashboard/how",
      icon: (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 24 24"
    width={28}
    height={28}
    preserveAspectRatio="xMidYMid meet"
    style={{
      width: "100%",
      height: "100%",
      transform: "translate3d(0px, 0px, 0px)",
      contentVisibility: "visible",
    }}
  >
    <g transform="scale(0.046875)">
      <defs>
        <clipPath id="__lottie_element_66">
          <rect width={512} height={512} x={0} y={0} />
        </clipPath>
      </defs>
      <g clipPath="url(#__lottie_element_66)">
        <g
          transform="matrix(1,0,0,1,235.05801391601562,214.02401733398438)"
          opacity={1}
          style={{
            display: "block",
          }}
        >
          <g opacity={1} transform="matrix(1,0,0,1,0,0)">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              fillOpacity={0}
              stroke="rgb(255,255,255)"
              strokeOpacity={1}
              strokeWidth={42}
              d=" M21,21 C21,21 21,147.3699951171875 21,147.3699951171875"
            />
          </g>
        </g>
        <g
          transform="matrix(1,0,0,1,229.55801391601562,129.75)"
          opacity={1}
          style={{
            display: "block",
          }}
        >
          <g opacity={1} transform="matrix(1,0,0,1,26.5,26.5)">
            <path
              fill="rgb(255,255,255)"
              fillOpacity={1}
              d=" M-26.25,0 C-26.25,14.496999740600586 -14.496999740600586,26.25 0,26.25 C14.496999740600586,26.25 26.25,14.496999740600586 26.25,0 C26.25,-14.496999740600586 14.496999740600586,-26.25 0,-26.25 C-14.496999740600586,-26.25 -26.25,-14.496999740600586 -26.25,0z"
            />
          </g>
        </g>
      </g>
    </g>
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
