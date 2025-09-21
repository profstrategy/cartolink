import React from 'react'
import Image from 'next/image'
import { altLogo, mobbin } from '@/public'
import AppHeading from './common/app-heading'

const Footer = () => {
    return (
        <footer className='bg-black/80'>
            <section className='container flex justify-between items-center h-28 py-4' >
                <div className='flex gap-2 items-center'>
                    <Image src={altLogo} priority quality={100} width={50} height={50} className='rounded-2xl' alt='krea ai logo' />
                    <AppHeading variants='h3' className='text-white'>Krea AI</AppHeading>
                </div>
                <div className='flex gap-2 items-center'>
                    <AppHeading variants='h3' className='text-white'>curated by</AppHeading>
                    <Image src={mobbin} priority quality={100} width={100} height={100} className='w-56' alt='mobbin-logo' />
                </div>
            </section>
        </footer>
    )
}

export default Footer