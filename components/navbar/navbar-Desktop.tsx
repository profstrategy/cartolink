import React from 'react'
import Logo from '../common/logo'
import { logo } from '@/public'
import { FaChevronDown } from 'react-icons/fa';
import { navbarIcons } from '../common/app-icon-wrapper';
import IconContainer from '../common/icon-container';
import { BiSupport } from 'react-icons/bi';
import { FaBell } from 'react-icons/fa';
import { MdLightMode } from 'react-icons/md';
export const DesktopNavbar = () => {
    return (
        <div>
            <div className='flex justify-between items-center h-16'>
                <div className='flex items-center justify-between gap-4'>
                    <Logo logo={logo} className='self-start' />
                    <div className='flex gap-2 items-center'>
                        <div className='h-8 w-8 custom-gradient rounded-full'></div>
                        <p className='lowercase text-app-text/50'>Abdulrahman</p>
                        <FaChevronDown className='text-app-text w-4 h-4' />
                    </div>
                </div>

                <div className='flex gap-4 justify-center items-center bg-global-btn-bg p-2 rounded-2xl'>
                    {navbarIcons.map((icon, _) => (
                        <IconContainer key={_} className_icon_button='p-3 hover:bg-white rounded-2xl transition-all duration-200 ease-in-out' label={icon.label}>{icon.icon}</IconContainer>
                    ))}
                </div>
                <div className='flex gap-2 items-center justify-center'>
                    <IconContainer text='Gallery' className_icon_text_button='p-2 rounded-xl bg-global-btn-bg bg-global-btn-bg' label='gallery' >{navbarIcons[1].icon}</IconContainer>
                    <IconContainer text='Support' label='Contact support' className_icon_text_button='p-2 rounded-xl bg-global-btn-bg' ><BiSupport size={18} className='text-black' /></IconContainer>
                    <IconContainer label='notify me' className_icon_button='p-2 rounded-xl bg-global-btn-bg'><FaBell size={18} className='text-black' /></IconContainer>
                    <IconContainer label='light mode' className_icon_button='p-2 rounded-xl bg-global-btn-bg'><MdLightMode size={18} className='text-black' /></IconContainer>
                    <div className='h-8 w-8 custom-gradient rounded-full'></div>
                </div>
            </div>
        </div>
    )
}