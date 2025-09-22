import React from 'react'
import Image from 'next/image'
import { HeroCardProps } from '@/types'
import AppHeading from '@/components/common/app-heading'
import AppButton from '@/components/common/button/app-button'
const UseHeroCard = (heroCardProps: HeroCardProps) => {
    const { isActive, id, image, label, heading, text, subText, className } = heroCardProps
    return {
        heroCardContent: (
            <div className={`w-full h-80 transition-all ease-in duration-500 ${isActive ? 'scale-100 shadow-lg' : 'hover:scale-95 hover:shadow-md'} rounded-xl relative`} key={id}>
                <Image src={image} alt={label} fill quality={100} priority={false} className='object-cover rounded-2xl w-fit h-fit' />
                <div className='absolute inset-0 text-white flex flex-col justify-between p-4 sm:p-2'>
                    <p className='text-start text-base capitalize'>{label}</p>
                    <div className=''>
                        <AppHeading variants='h1' color='white' align='center'>{heading}</AppHeading>
                        <AppHeading variants='h3' color='white'>{text}</AppHeading>
                        <div className='grid grid-cols-1 md:grid-cols-[1fr_8rem] justify-between items-center gap-4'>
                            <p className='text-[.8rem] max-w-[23rem]'>{subText}</p>
                            <div className='block sm:flex sm:justify-start w-full'>
                                <AppButton
                                    label='Click to assess our models'
                                    className='bg-white transition-all ease-in-out duration-200 hover:bg-gray-600 hover:text-white active:bg-app-text/65 text-black md:text-balance text-[.6rem] font-bold w-full p-2 flex justify-center'
                                >
                                    {id}
                                </AppButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        className: className
    }
}

export default UseHeroCard