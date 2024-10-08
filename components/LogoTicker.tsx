"use client"
import React from 'react'
import echoLogo from '../public/logo-echo.png'
import apexLogo from '../public/logo-apex.png'
import celestialLogo from '../public/logo-celestial.png'
import quantumLogo from '../public/logo-quantum.png'
import acmeLogo from '../public/logo-acme.png'
import Image from 'next/image'
import { motion } from 'framer-motion'


const LogoTicker = () => {
    return (
        <div className="py-8 mt-8 md:py-12 bg-transparent ">
            <div className="container">
                <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                    <motion.div className="flex gap-14 flex-none" animate={{
                        translateX: "-50%"
                    }}
                        transition={{
                            repeat: Infinity,
                            duration: 20,
                            ease: 'linear',
                            repeatType: "loop"
                        }}
                    >
                        <Image
                            src={acmeLogo}
                            alt="Acme Logo"
                            className='h-8 w-auto'
                        />
                        <Image
                            src={quantumLogo}
                            alt="Quantum Logo"
                            className='h-8 w-auto'
                        />
                        <Image
                            src={echoLogo}
                            alt="echo Logo"
                            className='h-8 w-auto'
                        />
                        <Image
                            src={apexLogo}
                            alt="apex Logo"
                            className='h-8 w-auto'
                        />
                        <Image
                            src={celestialLogo}
                            alt="celestial Logo"
                            className='h-8 w-auto'
                        />
                        <Image
                            src={acmeLogo}
                            alt="Acme Logo"
                            className='h-8 w-auto'
                        />
                        <Image
                            src={acmeLogo}
                            alt="Acme Logo"
                            className='h-8 w-auto'
                        />
                        {/*Another set of images for animation*/}
                        <Image
                            src={acmeLogo}
                            alt="Acme Logo"
                            className='h-8 w-auto'
                        />
                        <Image
                            src={quantumLogo}
                            alt="Quantum Logo"
                            className='h-8 w-auto'
                        />
                        <Image
                            src={echoLogo}
                            alt="echo Logo"
                            className='h-8 w-auto'
                        />
                        <Image
                            src={apexLogo}
                            alt="apex Logo"
                            className='h-8 w-auto'
                        />
                        <Image
                            src={celestialLogo}
                            alt="celestial Logo"
                            className='h-8 w-auto'
                        />
                        <Image
                            src={acmeLogo}
                            alt="Acme Logo"
                            className='h-8 w-auto'
                        />
                        <Image
                            src={acmeLogo}
                            alt="Acme Logo"
                            className='h-8 w-auto'
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default LogoTicker