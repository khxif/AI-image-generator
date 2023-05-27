import Header from '@/components/Header '
import './globals.css'
import { Inter } from 'next/font/google'
import Provider from '@/components/Provider '
import {getServerSession} from 'next-auth'
import AuthProvider from '../components/AuthProvider'
import Login from '@/components/Login '
import { authOptions } from './api/auth/[...nextauth]/route'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dall-E',
  description: 'AI image generator',
}

type Props = {
  children: React.ReactNode
}

export default async function RootLayout({children}: Props) {

  const session = await getServerSession(authOptions)
  
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo-dark.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <AuthProvider session={session}>
          {
            !session? (
              <Login />
            ):(
            <Provider>
              <Header />
              {children}
            </Provider>
            )
          }
        </AuthProvider>
        </body>
    </html>
  )
}
