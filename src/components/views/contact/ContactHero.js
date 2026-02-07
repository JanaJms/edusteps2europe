import React from 'react'
import img from '../../../assets/images/contactHero.png'

export default function ContactHero() {
    return (
        <section className="relative min-h-[70vh] lg:h-[80vh] w-full overflow-hidden bg-[#D9966E]/20 flex flex-col lg:flex-row items-center justify-between">
            
            {/* Text Content */}
            <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-16 lg:pl-20 pt-20 lg:pt-0 gap-6 md:gap-8 text-center lg:text-left">
                <h1 className="text-black-metal text-3xl md:text-5xl font-bold font-playfair leading-tight">
                    Contact Us
                </h1>
                <p className="text-base md:text-lg text-gray-800 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    We’re here to help you take the next step with confidence.
                </p>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 h-full flex items-end justify-center lg:justify-end mt-10 lg:mt-0">
                <img
                    src={img}
                    alt="Contact Hero"
                    className="w-4/5 md:w-3/5 lg:w-auto lg:h-[90%] object-contain object-bottom"
                />
            </div>

        </section>
    )
}