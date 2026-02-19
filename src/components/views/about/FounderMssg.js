import React from 'react'

export default function FoundersMessage() {
    return (
        <section className='w-full px-6 md:px-10 lg:px-20 py-16 md:py-24 bg-stone-50'>
            <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl mx-auto'>
                
                {/* Image Side */}
                <div className='w-full lg:w-5/12'>
                    <div className='relative'>
                        {/* Decorative background element */}
                        <div className='absolute -top-4 -left-4 w-full h-full border-2 border-orange rounded-2xl z-0' />
                        <img 
                            src={'https://edusteps2europe.com/uploads/founders.jpeg'} 
                            alt="EduSteps2Europe Founders"
                            className='relative z-10 w-full h-auto rounded-2xl shadow-2xl object-cover'
                        />
                    </div>
                </div>

                {/* Text Side */}
                <div className='w-full lg:w-7/12 flex flex-col gap-6'>
                    <h2 className='font-playfair font-bold text-[32px] md:text-[44px] leading-tight text-gray-900'>
                        Founders’ Message
                    </h2>
                    
                    <div className='text-[16px] md:text-[18px] leading-relaxed text-gray-700 font-poppins space-y-5'>
                        <p className='italic font-medium text-orange'>
                            "As parents, we understand that sending your child to study abroad is not just an academic decision—it is an emotional one."
                        </p>
                        
                        <p>
                            We have lived this journey ourselves. We have faced the stress of paperwork, visas, residency permits, housing, and medical insurance. We have felt the anxiety of navigating an unfamiliar system while wanting only one thing: to secure the best future for our children.
                        </p>

                        <p className='font-semibold text-black-metal'>
                            This is why we created this company.
                        </p>

                        <p>
                            What once felt overwhelming for our own families became the reason we chose to support yours. Our mission is to stand beside parents and students, simplifying every step of the journey to studying in France, with care, transparency, and responsibility.
                        </p>

                        <p>
                            We do not see students as files or applications. <span className='text-orange font-medium'>We see them as children entrusted to us by their parents—just as ours once were.</span>
                        </p>

                        <div className='pt-4'>
                            <p className='text-[20px] font-playfair font-bold text-gray-900'>You are not alone in this journey.</p>
                            <p>We are here, as professionals, and above all, as parents.</p>
                            <p className='mt-4 font-bold text-orange tracking-widest'>— THE FOUNDERS</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}