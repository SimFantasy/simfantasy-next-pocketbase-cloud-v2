import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { RiMoonLine, RiSunLine } from 'react-icons/ri'

const ThemeSwitch = () => {
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    setIsMounted(true)
  }, [])
  if (!isMounted) return null
  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <div
      className='w-auto h-full flex justify-center items-center cursor-pointer hover:text-gray-800 dark:hover:text-gray-400'
      onClick={handleClick}
    >
      {theme === 'light' ? <RiMoonLine size={18} /> : <RiSunLine size={18} />}
    </div>
  )
}

export default ThemeSwitch
