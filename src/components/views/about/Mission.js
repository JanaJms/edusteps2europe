import React from 'react'
import mission from '../../../assets/images/group.png'

export default function Mission() {
    return (
        <section className='w-full px-6 md:px-10 lg:px-20'>
            <div className='flex flex-col lg:flex-row items-center gap-10 lg:gap-16 max-w-7xl mx-auto'>
                
                {/* Image Side */}
                <div className='w-full lg:w-1/2 flex items-center justify-center'>
                    <img 
                        src={mission} 
                        alt="International students in France"
                        className='w-full h-auto max-w-md lg:max-w-full rounded-2xl shadow-lg object-cover'
                    />
                </div>

                {/* Text Side */}
                <div className='w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8'>
                    <h2 className='font-playfair font-semibold text-[26px] md:text-[36px] lg:text-[44px] leading-tight text-gray-900'>
                        Our mission is to empower international students
                    </h2>
                    
                    <div className='text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed text-gray-700 font-poppins'>
                        <p>
                            By providing the guidance, resources, and local support they need to confidently pursue their education in France.
                        </p>
                        <p className='mt-4'>
                            We aim to simplify every step of the process—from selecting the right university to adjusting to life abroad—ensuring a smooth transition and a successful first year.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}