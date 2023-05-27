"use client"

import Image from 'next/image'
import Logo from '../../public/logo-dark.png'
import {signIn} from 'next-auth/react'

export default function Login() {
  return (
    <div className='bg-black w-full h-screen flex flex-col justify-center items-center px-2 text-center'>
      <Image 
      src={Logo}
      alt='logo'
      className='object-contain'
      width={200}
      />
      <button className='text-white font-bold text-2xl animate-pulse' onClick={() => signIn('google')}>
        Sign in to use AI image generator
      </button>
    </div>
  )
}
