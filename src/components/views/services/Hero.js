import React from 'react'
import bg from '../../../assets/images/about-bg.png'

export default function Hero() {
    return (
        <section className='relative w-full overflow-hidden'>
            {/* 
                - min-h-[60vh]: Ensures it's tall enough on mobile.
                - lg:h-[80vh]: Set to your preferred height on desktop.
            */}
            <div className="relative min-h-[60vh] lg:h-[80vh] w-full flex items-center justify-center">
                
                {/* Background image */}
                <img
                    src={bg}
                    alt="Hero Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Text content */}
                <div className="relative z-10 text-center flex flex-col gap-6 md:gap-10 px-6 md:px-16 max-w-4xl">
                    <h1 className="text-3xl md:text-5xl font-bold font-playfair leading-tight drop-shadow-lg">
                        Everything Your Child Needs <br className="hidden md:block" />
                        In One Place
                    </h1>
                    
                    <p className="text-base md:text-lg leading-relaxed font-poppins max-w-2xl mx-auto drop-shadow-md">
                        From documents to daily life, our services cover every step of your child’s journey to study in France.
                    </p>
                </div>

            </div>
        </section>
    )
}