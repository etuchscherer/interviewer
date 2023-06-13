import Head from 'next/head'
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'YAWSA',
  description: 'Yet Another Weather Service App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const backgroundImage = 'https://cdn.discordapp.com/attachments/1054074145224265741/1118249932038606918/eric-t_a_picture_of_a_sailboat_in_french_polynesia_taken_on_a_c_41b29b0d-b1df-4f43-a1e1-195984dca365.png'

  return (
    <html lang="en">
      <body className={`${roboto.className} container`}>
        <header className="bg-primary text-white py-6 px-4 sm:px-6 lg:px-8 w-full text-center">
          <h1 className="text-2xl md:text-5xl font-heading font-bold">Y.A.W.S.A.</h1>
          <p className='text-gray-300'>Yet another weather service app</p>
        </header>
        <main className='flex-grow self-center md:pt-8 background'>
          {children}
        </main>
        <footer className="bg-gray-200 text-center py-4 w-full">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Weather App. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  )
}
