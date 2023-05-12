"use client"

import { MdLightMode } from 'react-icons/md'
import { BsFillMoonFill } from 'react-icons/bs'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function DarkModeSwitch() {
    const { systemTheme,theme,setTheme } = useTheme()
    const [mounted,setMounted] = useState(false)
    const currentTheme = theme === 'system'? systemTheme : theme
    useEffect(()=> setMounted(true),[])
  return (
    <>
    { mounted && (currentTheme==='dark'? (
    <MdLightMode className='text-3xl cursor-pointer' onClick={() => setTheme('light')} />
    ): (
    <BsFillMoonFill className='text-3xl cursor-pointer text-black' onClick={() => setTheme('dark')} />
    ))}
    </>
  )
}
