import AppHeading from '@/components/common/app-heading'
import { MdOutlinePermMedia } from 'react-icons/md';
import IconContainer from '@/components/common/icon-container'
import { FaFolderClosed } from 'react-icons/fa6';
import React from 'react'

const Gallery = () => {
  return (
    <section className='container flex justify-between items-center py-4'>
        <AppHeading variants='h2' className='font-semibold dark:text-white'>Gallery</AppHeading>
        <div className='flex md:gap-4 gap-2 items-center'>
            <IconContainer text='Legal' label='Explore product' className_icon_text_button='flex-row-reverse md:py-2 md:px-6 py-2 px-3 bg-global-btn-bg'>{<MdOutlinePermMedia size={18} />}</IconContainer>
            <IconContainer text='Pricing' label='See pricing' className_icon_text_button='flex-row-reverse md:py-2 md:px-6 py-2 px-3 bg-global-btn-bg'><FaFolderClosed size={18} /></IconContainer>
        </div>
    </section>
  )
}

export default Gallery