'use client'

import React, { ComponentType } from 'react'
import Hero from './components/Hero'
import  Grid from './components/Grid'
import RecentProject from './components/RecentProject'
import { navItems } from './Data'
import Clients from './components/Clients'
import Experience from './components/Experience'
import Approch from './components/Approch'
import Footer from './components/Footer'
import dynamic from 'next/dynamic';

const FloatingNav = dynamic(() => import('./components/ui/FloatingNavbar'), { ssr: false });

const page = () => {
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

export default page
