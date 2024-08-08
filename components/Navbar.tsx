import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import logo from '../public/proof-logo.png'
const Navbar = () => {
  return (
    <div className='sticky inser-x-0 top-0 w-full z-30'>
        <div className='mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 relative '>
        <div className='flex items-center justify-between'>
            <div>
                <Image 
                    src={logo}
                    alt='logo'
                    width={100}
                    height={100}
                    className=''
                />
            </div>
            <nav>
                <ul className='flex flex-row space-x-4 p-4'>
                    <li>
                        <Link href='/' className='text-gray-600'>About us</Link>
                    </li>
                    <li>
                        <Link href='/' className='text-gray-600'>Features</Link>
                    </li>
                    <li>
                        <Link href='/'>Pricing</Link>
                    </li>
                </ul>
            </nav>
            <div className='space-x-2'>
                <Button className=' bg-black text-white'>Login</Button>
                <Button className=' bg-black text-white'>Sign up</Button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar