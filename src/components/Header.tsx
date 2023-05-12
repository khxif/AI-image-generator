import Image from "next/image";
import Logo from '../../public/logo-dark.png'
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
import Profile from "./Profile";

export default function Header() {
  return (
    <header className="px-3 md:px-8 py-6 dark:bg-black shadow-md ">
      <div className="flex justify-between items-center">
      <div className="flex items-center space-x-3 md:space-x-6">
      <Link href='/'>
      <div className="flex space-x-2 items-center">
        <Image
        src={Logo}
        width={60}
        height={60}
        alt="logo"
        className="rounded-full"
        />
        <p className="text-2xl font-bold hidden md:inline-flex">Dall-E</p>
      </div>
      </Link>
      <Link href={'/gallery'}>Gallery</Link>
      </div>
      <div className="flex items-center space-x-3 md:space-x-8">
        <DarkModeSwitch />
        <Profile />
      </div>
      </div>
    </header>
  )
}
