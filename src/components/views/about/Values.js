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
            description:
                "We place students at the heart of everything we do—listening, understanding, and responding to their unique needs and dreams.",
            imgSrc: values1,
        },
        {
            title: "Trust & Transparency",
            description:
                "We believe in honest advice, clear processes, and open communication every step of the way.",
            imgSrc: values2,
        },
        {
            title: "Expertise with Empathy",
            description:
                "Our team combines professional knowledge with personal experience, providing guidance that is both accurate and heartfelt.",
            imgSrc: values3,
        },
        {
            title: "Local Support, Global Reach",
            description:
                "We bridge the gap between your home country and France with on-the-ground assistance and international understanding.",
            imgSrc: values4,
        },
        {
            title: "Commitment to Success",
            description:
                "We don’t just help you get to France—we stay by your side to make sure your first year is stable, secure, and full of potential.",
            imgSrc: values5,
        },
        {
            title: "Adaptability & Growth",
            description:
                "We continuously improve our services based on feedback, changing needs, and the evolving student experience.",
            imgSrc: values6,
        },
    ];


    return (
        <div className='px-4 md:px-10 lg:px-20'>
            <div className='font-playfair font-semibold text-[22px] md:text-[30px] lg:text-[44px] max-w-[50vw]'>
                Our core values
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 py-5'>
                {
                    valuesData?.map((el) => (
                        <ValueCard data={el} />
                    ))
                }
            </div>
        </div>
    )
}

function ValueCard({ data }) {
    return (
        <div className="h-[200px] w-[280px] md:w-[380px] md:h-[250px]">
            <div className=' p-4 text-center flex flex-col items-center justify-center gap-3'>
                <img className='size-10 md:size-16 lg:size-20' src={data?.imgSrc} />
                <div className='text-[14px] md:text-[20px] font-medium'>{data?.title}</div>
                <div className='text-[12px] md:text-[16px]'>{data?.description}</div>
            </div>
        </div>
    )
}
