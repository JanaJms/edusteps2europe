import React from 'react'

export default function Vision() {
    return (
        <section className='w-full px-6 md:px-10 lg:px-20'>
            <div className='max-w-7xl mx-auto flex flex-col gap-6 md:gap-8 lg:gap-12'>
                
                {/* Title Section */}
                <h2 className='font-playfair font-semibold text-[28px] md:text-[40px] lg:text-[56px] leading-tight text-gray-900 max-w-full md:max-w-[80vw] lg:max-w-[65vw]'>
                    Our vision is to transform <br className="hidden md:block" />
                    your study abroad experience
                </h2>

                {/* Description Section */}
                <div className='max-w-full md:max-w-3xl lg:max-w-4xl'>
                    <p className='text-[14px] md:text-[18px] lg:text-[20px] leading-relaxed text-gray-700 font-poppins'>
                        And become the most trusted, student-focused support platform for international students in France. 
                        We aim to make studying abroad a well-guided, stress-free, and rewarding journey. 
                        By offering personalized resources, expert guidance, and a supportive community, 
                        we empower students to thrive academically and personally in their new environment.
                    </p>
                </div>

            </div>
        </section>
    )
}