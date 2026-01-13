import React from 'react'
import faq from '../../../assets/images/faq.png'

export default function HeroFAQ() {
    return (
        <section
            className="relative h-[90vh] w-full overflow-hidden flex justify-between bg-[#7BAFCB]/30"
            style={{
                clipPath: 'ellipse(120% 85% at 50% 0%)',
                WebkitClipPath: 'ellipse(120% 85% at 50% 0%)',
            }}
        >
            <img
                src={faq}
                alt="Hero"
                className="absolute h-full w-1/2 right-0 object-cover"
            />

            <div className="relative z-10 flex h-full items-center justify-center">
                <h1 className=" text-black-metal text-5xl font-bold font-playfair w-[60%]">
                    Frequently Asked Questions
                </h1>
            </div>
        </section>

    )
}
