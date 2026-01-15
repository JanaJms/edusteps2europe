import React from 'react'
import ContactHero from '../components/views/contact/ContactHero'
import ContactSection from '../components/views/contact/ContactSection'

export default function ContactUs() {
    return (
        <div className='flex flex-col w-full gap-y-8 md:gap-y-20 pb-12 md:pb-28'>
            <ContactHero />
            <ContactSection/>
        </div>
    )
}
