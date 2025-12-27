import React from 'react'
import Hero from '../components/views/about/Hero'
import Vision from '../components/views/about/Vision'
import Mission from '../components/views/about/Mission'
import Values from '../components/views/about/Values'

export default function About() {
    return (
        <div className='flex flex-col w-full gap-y-8 md:gap-y-20 pb-12 md:pb-28'>
            <Hero />
            <Vision />
            <Mission />
            <Values />
        </div>
    )
}
