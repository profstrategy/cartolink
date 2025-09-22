'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import IconContainer from './common/icon-container'
import { MdLightMode, MdDarkMode } from 'react-icons/md';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex items-center space-x-2">
      <IconContainer
        label='toggle light mode'
        onclick={() => setTheme('light')}
        className_icon_button={`p-2 rounded-xl transition-colors ${
          theme === 'light'
            ? 'bg-blue-500 text-white shadow-md'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
      >
        <MdLightMode size={18} />
      </IconContainer>
      
      <IconContainer
        label='toggle dark mode'
        onclick={() => setTheme('dark')}
        className_icon_button={`p-2 rounded-xl transition-colors ${
          theme === 'dark'
            ? 'bg-blue-500 text-white shadow-md'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
      >
        <MdDarkMode size={18} />
      </IconContainer>
    </div>
  )
}