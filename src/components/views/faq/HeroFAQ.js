import React from 'react'
import faq from '../../../assets/images/faq.png'

export default function HeroFAQ() {
    return (
        <section
            className="relative min-h-[60vh] lg:h-[90vh] w-full overflow-hidden flex items-center bg-[#7BAFCB]/40"
            style={{
                clipPath: 'ellipse(100% 100% at 50% 0%)',
                WebkitClipPath: 'ellipse(150% 100% at 50% 0%)',
            }}
        >
            {/* Background Image */}
            <div className="absolute -bottom-10 w-full h-full">
                <img
                    src={faq}
                    alt="Hero"
                    className="absolute h-full w-full lg:w-1/2 lg:right-0 object-cover object-center opacity-40 lg:opacity-100"
                />
                {/* Mobile Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#7BAFCB]/20 lg:hidden" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto h-full flex items-center px-6 md:px-12 lg:px-20 py-20 lg:py-0">
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                    <h1 className="text-black-metal text-[38px] md:text-[54px] lg:text-[72px] font-bold font-playfair leading-tight text-center lg:text-left max-w-2xl">
                        Frequently Asked <br className='hidden md:block' />
                        <span className="text-orange-600 lg:text-inherit">Questions</span>
                    </h1>
                </div>
            </div>
        </section>
    )
}