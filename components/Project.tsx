'use client'

import React from 'react'
import { BentoGridDemo } from './BentoGrid'

const Project = () => {
    let title: string = 'Let take a brief look to my recent projects'

    return (
        <div>
            <p className={`font-bold text-5xl pt-[176px] dark:text-dm pb-[31px]`}>
                {title}
            </p>
            <BentoGridDemo />
        </div>
    )
}

export default Project