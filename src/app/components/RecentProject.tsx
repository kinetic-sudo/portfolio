'use client';

import React from 'react';
import { projects } from '../Data';
import { PinContainer } from './ui/3dPin';
import { IconLocation } from '@tabler/icons-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import PinContainer with no SSR
const DynamicPinContainer = dynamic(() => import('./ui/3dPin').then(mod => mod.PinContainer), {
  ssr: false
});

const RecentProject = () => {
  return (
    <div className='py-20' id='projects'>
        <h1 className='heading text-white'>
            A small selection of {' '}
            <span className='text-purple'>Recent Project</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
            {projects.map(({id, title, des, img, iconLists, link}) => (
                <div key={id} className='sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sw:w-[570px] w-[34vw]'>
                    <DynamicPinContainer 
                    title={link}
                    href={link}
                    >
                    <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] sm:h-[40vh] overflow-hidden h-[30vh] mb-10'>
                        <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]'>
                            <Image 
                                src="/bg.png" 
                                alt="bgImg"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <Image 
                            src={img} 
                            alt="cover" 
                            className='z-10 absolute bottom-0'
                            width={500}
                            height={300}
                        />
                    </div>
                        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                            {title}
                        </h1>
                        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                            {des}
                        </p>
                        <div className='flex items-center justify-between mt-7 mb-3 '>
                            <div className='flex items-center'>
                                {iconLists.map((icon, index) => (
                                    <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' 
                                        style={{
                                            transform: `translateX(-${5 * index + 2}px)`,
                                        }}
                                    >
                                        <Image 
                                            src={icon} 
                                            alt={icon} 
                                            width={24} 
                                            height={24} 
                                            className='p-2'
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center items-center">
                                <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                                    Check Live Site
                                </p>
                                <IconLocation className="ms-3" color="#CBACF9" />
                            </div>
                        </div>
                    </DynamicPinContainer>
                </div>
            ))}
        </div>
    </div>
  );
};

export default RecentProject;