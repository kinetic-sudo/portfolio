'use client'

import React from 'react'
import { navItems } from './Data'
import dynamic from 'next/dynamic';

const FloatingNav = dynamic(() => import('./components/ui/FloatingNavbar'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
})

const Hero = dynamic(() => import('./components/Hero'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
})

const Grid = dynamic(() => import('./components/Grid'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
})

const RecentProject = dynamic(() => import('./components/RecentProject'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
})

const Clients = dynamic(() => import('./components/Clients'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
})

const Approch = dynamic(() => import('./components/Approch'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
})

const Footer = dynamic(() => import('./components/Footer'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
})

const Experience = dynamic(() => import('./components/Experience'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
})

const Page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className='max-w-7xl w-full'> 
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProject />
        <Clients />
        <Experience />
        <Approch />
        <Footer />
      </div>
    </main>
  )
}

export default Page
