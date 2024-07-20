import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='flex justify-between items-center w-full px-[100px] pt-[100px] py-8'>
            <div className='flex flex-col items-start space-y-2'>
                <span className='font-semibold dark:text-dm'>Contact me</span>
                <div className='flex items-center space-x-2'>
                    <Image
                        src='/assets/icons/facebook.png'
                        alt='Facebook'
                        width={20}
                        height={20}
                        className='w-auto h-auto dark:border-1 dark:border-dm rounded dark:bg-dm'
                    />
                    <a href="https://www.facebook.com/vinh.baophuc"
                        className='text-gray-600 hover:text-gray-800 dark:text-dm dark:hover:text-dm-highlight'
                        target='parent'
                    >
                        Facebook
                    </a>
                </div>
                <div className='flex items-center space-x-2'>
                    <Image
                        src='/assets/icons/linkedin.png'
                        alt='LinkedIn'
                        width={20}
                        height={20}
                        className='w-auto h-auto dark:border-1 dark:border-dm rounded dark:bg-dm'
                    />
                    <a
                        href="https://www.linkedin.com/in/kevinphuc/"
                        className='text-gray-600 hover:text-gray-800 dark:text-dm dark:hover:text-dm-highlight'
                        target='parent'
                    >
                        LinkedIn
                    </a>
                </div>
                <div className='flex items-center space-x-2'>
                    <Image
                        src='/assets/icons/github.png'
                        alt='GitHub'
                        width={20}
                        height={20}
                        className='w-auto h-auto dark:border-1 dark:border-dm rounded dark:bg-dm'
                    />
                    <a
                        href="https://github.com/kevinphuc"
                        className='text-gray-600 hover:text-gray-800 dark:text-dm dark:hover:text-dm-highlight'
                        target='parent'
                    >
                        GitHub
                    </a>
                </div>
                <div className='flex items-center space-x-2'>
                    <Image
                        src='/assets/icons/gmail.png'
                        alt='Gmail'
                        width={20}
                        height={20}
                        className='w-auto h-auto dark:border-1 dark:border-dm rounded dark:bg-dm'
                    />
                    <span className='text-gray-600 dark:text-dm'>kevinphuc.work@gmail.com</span>
                </div>
                <div className='flex items-center space-x-2'>
                    <Image
                        src='/assets/icons/phone.png'
                        alt='Phone'
                        width={20}
                        height={20}
                        className='w-auto h-auto dark:border-1 dark:border-dm rounded dark:bg-dm'
                    />
                    <span className='text-gray-600 dark:text-dm'>+84707182711</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
