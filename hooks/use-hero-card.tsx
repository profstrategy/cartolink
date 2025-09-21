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
                <Image src={image} alt={label} fill quality={100} priority className='object-cover rounded-2xl w-fit h-fit' />
                <div className='absolute inset-0 text-white flex flex-col justify-between p-4'>
                    <p className='text-start text-base capitalize'>{label}</p>
                    <div className='flex items-center justify-center'>
                        <AppHeading variants='h1' color='white'>{heading}</AppHeading>
                    </div>

                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col gap-2'>
                            <AppHeading variants='h3' color='white'>{text}</AppHeading>
                            <p className='text-[.8rem] max-w-[23rem]'>{subText}</p>
                        </div>
                        <div>
                            <AppButton 
                                label='Click to assess our models' 
                                className='bg-white transition-all ease-in-out duration-200 hover:bg-gray-600 hover:text-white active:bg-app-text/65 w-40 text-black text-balance font-bold'
                            >
                                {id}
                            </AppButton>
                        </div>
                    </div>
                </div>
            </div>
        ),
        className: className 
    }
}

export default UseHeroCard