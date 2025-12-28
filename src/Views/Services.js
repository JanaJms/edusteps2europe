import React from 'react'
import Hero from '../components/views/services/Hero'
import ServicesSection from '../components/views/services/ServicesSection'
import Promo from '../components/views/services/Promo'

export default function Services() {
    return (
        <div className='flex flex-col w-full gap-y-8 md:gap-y-20 pb-12 md:pb-28'>
            <Hero />
            <ServicesSection />
            <Promo/>
        </div>
    )
}