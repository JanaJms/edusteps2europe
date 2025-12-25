import React from 'react'
import bg from '../../../assets/images/about-bg.png'
import about1 from '../../../assets/images/about-1.png'
import about2 from '../../../assets/images/about-2.png'
import about3 from '../../../assets/images/about-3.png'

export default function Hero() {
    return (
        <div className="relative h-[80vh]">
            {/* Background image */}
            <img
                src={bg}
                alt="Hero"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Text content */}
            <div className='w-full h-full flex justify-center items-center'>

                <div className="relative text-center z-10 flex flex-col gap-5 justify-center h-full px-6 md:px-16 max-w-3xl ">
                    <h1 className="text-3xl md:text-5xl font-bold font-playfair">
                        About us
                    </h1>
                    <p className="text-base md:text-lg leading-relaxed">
                        We know that sending your child to study in another country is a big decision,
                        full of excitement, but also uncertainty.
                        <span className="block mt-2">
                            At <span className='font-bold'>EduSteps2Europe</span>, we give families peace of mind and students the support they
                            need to succeed in France, from day one to year one.
                        </span>
                    </p>
                </div>
            </div>

            <div className=' absolute -bottom-1/2 w-full h-full flex gap-10 justify-center items-center'>
                <img src={about1} />
                <img src={about2} />
                <img src={about3} />
            </div>
        </div>
    )
}
