'use client'

import {useSession} from 'next-auth/react'
import {signOut} from 'next-auth/react'
import Image from 'next/image'

export default function Profile() {
    const {data: session} = useSession()
  return (
    <div className='flex flex-col items-center justify-center text-center'>
        <Image src={session?.user?.image!} 
        className='rounded-full w-14 h-14 cursor-pointer '
        onClick={() => signOut()}
        width={56}
        height={56}
        alt="profile-pic" />
    </div>
  )
}
