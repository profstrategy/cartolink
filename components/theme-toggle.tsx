'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import IconContainer from './common/icon-container'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = resolvedTheme === 'dark'

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <IconContainer
      label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      onclick={toggleTheme}
      className_icon_button={`p-2 rounded-xl transition-all duration-200 ${
        isDark
          ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      }`}
    >
      {isDark ? <MdLightMode size={18} /> : <MdDarkMode size={18} />}
    </IconContainer>
  )
}