import React from 'react'
import { FaBell, FaChevronDown } from 'react-icons/fa'
import { navbarIcons } from '../common/app-icon-wrapper'
import IconContainer from '../common/icon-container'
import { BiSupport } from 'react-icons/bi'
import { ThemeToggle } from '../theme-toggle'

type MobileNavbarProps = {
    isOpen: boolean
}

export const MobileNavbar = ({ isOpen }: MobileNavbarProps) => {
    return (
        <div className={`
            fixed top-16 left-0 right-0 z-40 
            bg-global-btn-bg px-4 py-2
            transform transition-transform duration-500 ease-in-out
            ${isOpen ? 'translate-y-0' : '-translate-y-[999rem]'}
        `}>
            <div className='flex flex-col w-full py-2 gap-4 max-h-80'>
                <div className='flex justify-between'>
                    <div className='h-8 w-8 custom-gradient rounded-full'></div>
                    <div className='flex gap-2'>
                        <p className='lowercase text-app-text dark:text-gray-400'>Abdulrahman</p>
                        <FaChevronDown className='text-app-text dark:text-gray-400 w-6 h-6 flex items-center' />
                    </div>
                </div>

                <div className='flex justify-between items-center'>
                    <div className='grid grid-cols-3 gap-4 justify-center items-center bg-white dark:bg-gray-800 p-2 rounded-2xl'>
                        {navbarIcons.map((icon, index) => (
                            <IconContainer 
                                key={index} 
                                className_icon_button='p-3 hover:bg-global-btn-bg rounded-2xl transition-all duration-200 ease-in-out bg-global-btn-bg' 
                                label={icon.label}
                            >
                                <div className="text-black dark:text-white">
                                    {React.cloneElement(icon.icon, { className: 'text-current' })}
                                </div>
                            </IconContainer>
                        ))}
                    </div>

                    <div className='flex flex-col gap-2'>
                        <div className='flex justify-end gap-2 items-center'>
                            <div className='flex gap-2'>
                                <IconContainer 
                                    label='notify me' 
                                    className_icon_button='p-2 rounded-xl bg-white dark:bg-gray-800'
                                >
                                    <FaBell size={18} className='text-black dark:text-white' />
                                </IconContainer>
                                <ThemeToggle />
                            </div>
                            <div className='h-8 w-8 custom-gradient rounded-full'></div>
                        </div>

                        <div className='flex-col gap-2'>
                            <IconContainer 
                                text='Gallery' 
                                className_icon_text_button='rounded-xl p-1 bg-white dark:bg-gray-800 mb-1 text-black dark:text-white' 
                                label='gallery'
                            >
                                <div className="text-black dark:text-white">
                                    {React.cloneElement(navbarIcons[1].icon, { className: 'text-current' })}
                                </div>
                            </IconContainer>
                            <IconContainer 
                                text='Support' 
                                label='Contact support' 
                                className_icon_text_button='rounded-xl p-1 bg-white dark:bg-gray-800 text-black dark:text-white'
                            >
                                <BiSupport size={18} className='text-black dark:text-white' />
                            </IconContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}