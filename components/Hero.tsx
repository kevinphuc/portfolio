import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='items-center justify-around flex flex-col pt-[60px]'>
      {/* Avatar and header */}
      <div className='text-center relative w-[200px] h-[200px]'>
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
      <p className='md:tracking-wider mb-4 text-[30px] md:text-lg lg:text-2xl dark:text-dm pb-[82px]'>
        I&apos;m currently a computer science at International University looking for internship
      </p>

      {/* Build tools and frameworks */}
      <p className=' text-[48px] dark:text-dm font-bold'>
        This website is designed and powered by
      </p>
      <div className='text-[22px] font-medium flex flex-row justify-around py-[20px] gap-[59px]'>
        <div className='flex flex-row items-center gap-[10px]'>
          <Image
            src='/assets/icons/next.png'
            alt='nextjs'
            className='dark:border-1 dark:border-dm rounded dark:bg-dm'
            width={50}
            height={50}
          />
          <p className='dark:text-dm'>Next.js</p>
        </div>
        <div className='flex flex-row items-center gap-[10px]'>
          <Image
            src='/assets/icons/aceternity.png'
            alt='aceternity UI'
            className='dark:border-1 dark:border-dm rounded dark:bg-dm'
            width={50}
            height={50}
          />
          <p className='dark:text-dm'>Aceternity UI</p>
        </div>
        <div className='flex flex-row items-center gap-[10px]'>
          <Image
            src='/assets/icons/vercel.png'
            alt='vercel'
            className='dark:border-1 dark:border-dm rounded dark:bg-dm'
            width={50}
            height={50}
          />
          <p className='dark:text-dm'>Vercel</p>
        </div>
        <div className='flex flex-row items-center gap-[10px]'>
          <Image
            src='/assets/icons/github.png'
            alt='github'
            className='dark:border-1 dark:border-dm rounded dark:bg-dm'
            width={50}
            height={50}
          />
          <p className='dark:text-dm'>Github</p>
        </div>
        <div className='flex flex-row items-center gap-[10px]'>
          <Image
            src='/assets/icons/tailwindcss.png'
            alt='tailwindcss'
            className='dark:border-1 dark:border-dm rounded dark:bg-dm'
            width={50}
            height={50}
          />
          <p className='dark:text-dm'>Tailwindcss</p>
        </div>
        <div className='flex flex-row items-center gap-[10px]'>
          <Image
            src='/assets/icons/figma.png'
            alt='figma'
            className='dark:border-1 dark:border-dm rounded dark:bg-dm'
            width={50}
            height={50}
          />
          <p className='dark:text-dm'>Figma</p>
        </div>
      </div>
    </div>
  )
}

export default Hero;
