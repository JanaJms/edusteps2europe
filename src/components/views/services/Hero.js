import React from 'react'
import bg from '../../../assets/images/about-bg.png'

export default function Hero() {
    return (
        <div className='h-dvh'>
            <div className="relative h-[80vh]">
                {/* Background image */}
                <img
                    src={bg}
                    alt="Hero"
                    className="absolute inset-0 w-full h-[full] object-cover"
                />

                {/* Text content */}
                <div className='w-full h-full flex justify-center items-center'>

                    <div className="relative text-center z-10 flex flex-col gap-10 justify-center h-full px-6 md:px-16 max-w-3xl ">
                        <h1 className="text-3xl md:text-5xl font-bold font-playfair">
                            Everything Your Child Needs
                            In One Place
                        </h1>
                        <p className="text-base md:text-lg leading-relaxed">
                            From documents to daily life, our services cover every step of your child’s journey to study in France.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
