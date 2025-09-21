import { heroCardData } from '@/contents/data';
import React from 'react'
import IconContainer from '../common/icon-container';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type CarouselInnerProps = {
    currentIndex: number;
    gotoNext?: () => void;
    gotoPrev?: () => void;
}
const CarouselInner = ({ currentIndex, gotoNext, gotoPrev }: CarouselInnerProps) => {
    return (
        <div className='flex items-center'>
            <div className='self-center flex mx-auto'>
            {heroCardData.map((_, index) => (
                <div key={index} className={`w-2 h-2 mx-1 rounded-full self-center ${currentIndex === index ? 'bg-black transition-all ease-in-out duration-200' : 'bg-gray-300 transition-all ease-in-out duration-200'}`}>
                </div>
            ))}
            </div>

            <div className='flex gap-2 justify-end self-end '>
                <IconContainer label='Go to previous slide' className_icon_button='flex p-1 bg-global-btn-bg' onclick={gotoPrev}><FaChevronLeft className='text-app-text w-3 h-3' /></IconContainer>
                <IconContainer label='Go to next slide' className_icon_button='flex p-1 bg-global-btn-bg' onclick={gotoNext}><FaChevronRight className='text-app-text w-3 h-3' /></IconContainer>
            </div>
        </div>
    )
}

export default CarouselInner