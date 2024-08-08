// "use client";
// import React from 'react'
// import { AuroraBackground } from './ui/auraBackground'
// import { motion } from "framer-motion";
// import { TextGenerateEffect } from './ui/textGenerateEffect';
// import MagicButton from './MagicButton';
// import { FaLocationArrow } from "react-icons/fa6"
// import { Spotlight } from './ui/spotLight';

// const Hero = () => {
//   return (
//        <div className='pb-20 pt-36'>
//         <div>
//             <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill='white'/>
//             <Spotlight className="top-10 left-full h-[80vh] w-[10vw]" fill='grey'/>
//             <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill='grey'/>
//         </div>
//         <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
//         {/* Radial gradient for the container to give a faded look */}
//         <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
//         </div>
//         <div className="flex justify-center relative my-20 z-10">
//           <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
//             {/* <p className="uppercase tracking-widest text-xs text-center max-w-80">
//               Proof
//             </p> */}
            
//             <TextGenerateEffect 
//               className='text-center text-[40px] md:text-5xl lg:text-6xl'
//               words="Quickly and effortlessly collect customer reviews"
//             />
//             <p className="text-center mc:tracking-wider mb-4 text-sm md:text-xl lg:text-2xl">
//               Collecting customer reviews is a tedious task. Specially of you don&apos;t know how to code. with our software you can collect and put it on your website in a matter of minutes.
//             </p>
//             <a href="/sign-in">
//               <MagicButton
//                 tittle="Get started"
//                 icon={<FaLocationArrow/>}
//                 position="right"
//               />
//             </a>
//           </div>
//         </div>
//        </div>
//       )
//     }


// export default Hero
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import heroimg from '../app/feedbackimg.png'
const Hero = () => {
  return (
    <section className='hero-section text-center mt-32 flex flex-col'>
      <h1 className='text-4xl font-extrabold leading-[1.15] text-black sm:text-6l sm:leading'>Proof <br/>
        <span className='bg-gradient-to-r from-pink-500 via-indigo-600 to-pink-500 bg-clip-text text-transparent'>Quickly and effortlessly collect customer reviews</span>
      </h1>
      <h2 className='mt-5 text-gray-600 sm:text-xl'>Your customers' words, Your business's strength.</h2>
      <div className='mx-auto flex max-w-fit space-x-4'>
        <Button className='btn mt-8 rounded-full mx-auto max-w-fit border px-5 py-2 text-sm font-medium shadow-sm border-black bg-black text-white hover:ring-gray-400 hover:ring-2'>
          Get started
        </Button>
        <Button className='btn mt-8 rounded-full  mx-auto max-w-fit border px-5 py-2 bg-white text-sm font-medium shadow-sm border-gray-200 hover:ring-gray-400 hover:ring-2'>
          Learn more
        </Button>
      </div>
      <div className='mt-5 items-center justify-center'>
        <Image 
          src={heroimg}
          alt='hero'
          className='mx-auto w-[500px] h-[400px] sm:h[600px]'
        />
      </div>
    </section>
  )
}

export default Hero