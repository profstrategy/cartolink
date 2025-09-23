import React from 'react'
import Logo from '../common/logo'
import { logo } from '@/public'
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

type MobileNavbarHeaderProps = {
    isOpen: boolean
    handleToggle: () => void
}

const MobileNavbarHeader = ({isOpen, handleToggle}: MobileNavbarHeaderProps) => {
    return (
        <div className='bg-white dark:bg-gray-900 h-16 flex justify-between items-center relative z-50 transition-colors duration-300 sticky'>
            <Logo logo={logo} imageClassName='w-10 h-10' />
            <div className='pr-2'>
                {isOpen ? (
                    <AiOutlineClose 
                        onClick={handleToggle} 
                        className='w-8 h-8 transition-all ease-in-out duration-300 cursor-pointer text-black dark:text-white' 
                    />
                ) : (
                    <HiOutlineMenuAlt2 
                        onClick={handleToggle} 
                        className='w-8 h-8 transition-all ease-in-out duration-300 cursor-pointer text-black dark:text-white' 
                    />
                )}
            </div>
        </div>
    )
}

export default MobileNavbarHeader