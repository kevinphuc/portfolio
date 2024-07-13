import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='text-center items-center flex flex-col pt-[60px]'>
      <div className='relative w-[200px] h-[200px]'>
        <Image
          src='/assets/images/avatar.jpg'
          alt='avatar'
          layout='fill'
          objectFit='cover'
          className='rounded-full border-2 border-lm dark:border-dm'
        />
      </div>
      <TextGenerateEffect
        className='md:text-5xl lg:text-6xl'
        words="Hello, I'm Phuc. Welcome to my personal portfolio"
      />
      <p className='md:tracking-wider mb-4 text-[30px] md:text-lg lg:text-2xl dark:text-dm'>
        I&apos;m currently a computer science at International University
      </p>
      {/* <p className=' text-[48px] dark:text-dm'>
        This website is designed and powered by
      </p>
      <div className='w-[50px] h-[50px] relative flex flex-row'>
        <Image
          src='/assets/icons/logo.png'
          alt='nextjs'
          className='dark:border-1 dark:border-dm rounded'
          layout='fill'
          objectFit='cover'
        />
        <p>Next.js</p>
      </div> */}
    </div>
  )
}

export default Hero;