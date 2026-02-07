import React from 'react'
import values1 from "../../../assets/images/icons8-world-markets-100.png"
import values2 from "../../../assets/images/icons8-trust-100.png"
import values3 from "../../../assets/images/icons8-star-100.png"
import values4 from "../../../assets/images/icons8-environment-care-100.png"
import values5 from "../../../assets/images/icons8-trophy-100.png"
import values6 from "../../../assets/images/icons8-growth-100.png"

export default function Values() {
    const valuesData = [
        {
            title: "Student-Centric",
            description: "We place students at the heart of everything we do—listening, understanding, and responding to their unique needs and dreams.",
            imgSrc: values1,
        },
        {
            title: "Trust & Transparency",
            description: "We believe in honest advice, clear processes, and open communication every step of the way.",
            imgSrc: values2,
        },
        {
            title: "Expertise with Empathy",
            description: "Our team combines professional knowledge with personal experience, providing guidance that is both accurate and heartfelt.",
            imgSrc: values3,
        },
        {
            title: "Local Support, Global Reach",
            description: "We bridge the gap between your home country and France with on-the-ground assistance and international understanding.",
            imgSrc: values4,
        },
        {
            title: "Commitment to Success",
            description: "We don’t just help you get to France—we stay by your side to make sure your first year is stable, secure, and full of potential.",
            imgSrc: values5,
        },
        {
            title: "Adaptability & Growth",
            description: "We continuously improve our services based on feedback, changing needs, and the evolving student experience.",
            imgSrc: values6,
        },
    ];

    return (
        <section className='px-6 md:px-10 lg:px-20'>
            <div className='max-w-7xl mx-auto'>
                <h2 className='font-playfair font-semibold text-[28px] md:text-[36px] lg:text-[44px] mb-10 md:mb-16 text-center lg:text-left'>
                    Our core values
                </h2>
                
                {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16'>
                    {valuesData.map((el, index) => (
                        <ValueCard key={index} data={el} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function ValueCard({ data }) {
    return (
        <div className='flex flex-col items-center text-center group'>
            {/* Icon Container */}
            <div className='mb-5 p-4 rounded-2xl transition-colors duration-300'>
                <img 
                    className='size-14 md:size-16 lg:size-20 object-contain' 
                    src={data?.imgSrc} 
                    alt={data?.title} 
                />
            </div>

            {/* Content */}
            <h3 className='text-[18px] md:text-[22px] font-bold font-poppins mb-3 text-gray-900'>
                {data?.title}
            </h3>
            <p className='text-[14px] md:text-[16px] text-gray-600 leading-relaxed max-w-sm'>
                {data?.description}
            </p>
        </div>
    )
}