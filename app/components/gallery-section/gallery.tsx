import AppHeading from '@/components/common/app-heading'
import { navbarIcons } from '@/components/common/app-icon-wrapper'
import IconContainer from '@/components/common/icon-container'
import { FaFolderClosed } from 'react-icons/fa6';
import React from 'react'

const Gallery = () => {
  return (
    <section className='container flex justify-between items-center py-4 mb-4'>
        <AppHeading variants='h2' className='font-semibold'>Gallery</AppHeading>
        <div className='flex gap-4 items-center'>
            <IconContainer text='Legal' label='Explore product' className_icon_text_button='flex-row-reverse py-2 px-6 bg-global-btn-bg'>{navbarIcons[1].icon}</IconContainer>
            <IconContainer text='Pricing' label='See pricing' className_icon_text_button='flex-row-reverse py-2 px-6 bg-global-btn-bg'><FaFolderClosed size={18} /></IconContainer>
        </div>
    </section>
  )
}

export default Gallery