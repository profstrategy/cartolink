import React from 'react'
import Logo from '../common/logo'
import { logo } from '@/public'
import { FaChevronDown } from 'react-icons/fa';
import { navbarIcons } from '../common/app-icon-wrapper';
import IconContainer from '../common/icon-container';
import { BiSupport } from 'react-icons/bi';
import { FaBell } from 'react-icons/fa';
import { ThemeToggle } from '../theme-toggle';

export const DesktopNavbar = () => {
    return (
        <div className="bg-white transition-colors duration-300">
            <div className='flex justify-between items-center h-16'>
                <div className='flex items-center justify-between md:gap-0 gap-4'>
                    <Logo logo={logo} className='self-start' />
                    <div className='flex gap-2 items-center'>
                        <div className='h-8 w-8 custom-gradient rounded-full'></div>
                        <p className='lowercase text-app-text dark:text-gray-400'>Abdulrahman</p>
                        <FaChevronDown className='text-app-text dark:text-gray-400 w-4 h-4' />
                    </div>
                </div>

                <div className='flex gap-4 justify-center items-center bg-global-btn-bg p-2 rounded-2xl'>
                    {navbarIcons.map((icon, _) => (
                        <IconContainer 
                            key={_} 
                            className_icon_button='p-3 hover:bg-white dark:hover:bg-gray-700 rounded-2xl transition-all duration-200 ease-in-out' 
                            label={icon.label}
                        >
                            <div className="">
                                {React.cloneElement(icon.icon, { className: 'text-current text-black dark:text-white' })}
                            </div>
                        </IconContainer>
                    ))}
                </div>
                
                <div className='flex gap-2 items-center justify-center pr-4'>
                    <IconContainer 
                        text='Gallery' 
                        className_icon_text_button='p-2 rounded-xl bg-global-btn-bg' 
                        label='gallery' 
                    >
                        <div className="">
                            {React.cloneElement(navbarIcons[1].icon, { className: 'text-current text-black dark:text-white' })}
                        </div>
                    </IconContainer>
                    
                    <IconContainer 
                        text='Support' 
                        label='Contact support' 
                        className_icon_text_button='p-2 rounded-xl bg-global-btn-bg' 
                    >
                        <BiSupport size={18} className='text-black dark:text-white' />
                    </IconContainer>
                    
                    <IconContainer 
                        label='notify me' 
                        className_icon_text_button='p-2 rounded-xl bg-global-btn-bg'
                    >
                        <FaBell size={18} className='text-black dark:text-white' />
                    </IconContainer>
                    
                    <ThemeToggle />
                    <div className='h-8 w-8 custom-gradient rounded-full'></div>
                </div>
            </div>
        </div>
    )
}