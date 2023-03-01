import { useState, useEffect } from 'react'
import Link from 'next/link'
import { RiMenuLine, RiSearch2Line } from 'react-icons/ri'
import cx from 'clsx'
import { siteName } from '@/constants/config'
import { Navbar, ThemeSwitch } from '@/components'

const Header = () => {
  const [isMounded, setIsMounded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    setIsMounded(true)
  }, [])

  if (!isMounded) return null

  const handleClick = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div className='w-screen h-14 border-b border-gray-200 dark:border-gray-700'>
      <div className='container flex justify-between items-center h-full'>
        <Link
          href='/'
          className='text-2xl text-gray-800 font-homemade dark:text-white'
        >
          {siteName}
        </Link>
        <nav className='flex-1 flex justify-end items-center gap-4 h-full text-gray-500'>
          <nav className='flex-1 hidden md:flex justify-end items-center gap-4 h-full text-gray-500'>
            <Navbar />
          </nav>

          <Link href='/search'>
            <RiSearch2Line />
          </Link>
          <ThemeSwitch />

          <span
            className='flex justify-center items-center w-auto h-full md:hidden text-gray-800 dark:text-gray-500'
            onClick={handleClick}
          >
            <RiMenuLine size={24} />
          </span>
        </nav>
      </div>
      {/* Mobile Nav */}
      <div
        className={cx(
          'fixed top-14 left-0 z-40 md:hidden items-center justify-center w-screen h-screen bg-gray-100 dark:bg-gray-800 ',
          {
            'flex opacity-100': isVisible === true,
            'hidden opacity-0': isVisible === false,
          }
        )}
      >
        <span className='flex flex-col gap-6 -mt-40 items-center text-gray-500'>
          <Navbar click={handleClick} />
        </span>
      </div>
    </div>
  )
}

export default Header
