"use client"

import { ThemeProvider } from "next-themes";

type Props = {
    children: React.ReactNode
  }

export default function Provider({children}: Props) {
  return (
    <ThemeProvider enableSystem={true} attribute="class" >
        <div className='dark:bg-[#121212] dark:text-white transition-colors duration-700 min-h-screen'>
            {children}
        </div>
    </ThemeProvider>
  )
}
