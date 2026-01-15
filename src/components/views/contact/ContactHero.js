import React from 'react'
import img from '../../../assets/images/contactHero.png'

export default function ContactHero() {
    return (
        <section
            className="relative h-[90vh] w-full overflow-hidden flex justify-between bg-[#D9966E]/20"
        >
            <img
                src={img}
                alt="Hero"
                className="absolute w-1/2 right-0 bottom-0 object-contain"
            />

            <div className="relative z-10 flex flex-col h-full items-start justify-center ml-20 gap-10">
                <h1 className=" text-black-metal text-5xl font-bold font-playfair w-[60%]">
                    Contact Us
                </h1>
                <p className="text-base md:text-lg leading-relaxed">
                    We’re here to help you take the next step with confidence.
                </p>
            </div>
        </section>
    )
}
