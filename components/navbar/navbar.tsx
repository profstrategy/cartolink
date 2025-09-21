'use client'
import { useWindowResize } from '@/hooks/use-window-resize'
import React from 'react'
import { DesktopNavbar } from './navbar-Desktop'
import { MobileNavbar } from './navbar-mobile'
import MobileNavbarHeader from './navbar-mobile-header'

const Navbar = () => {
    const { windowResize } = useWindowResize()
    const [isOpen, setIsOpen] = React.useState(false);
    
    const handleToggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className='mb-16'>
            {windowResize.width > 900 ? <DesktopNavbar /> : (
                <div>
                    <MobileNavbarHeader isOpen={isOpen} handleToggle={handleToggleNavbar} />
                    <MobileNavbar isOpen={isOpen} />
                </div>
            )}
        </nav>
    )
}

export default Navbar