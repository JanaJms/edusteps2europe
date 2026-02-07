import React from 'react'
import TextMask from '../../masks/TextMask';
import img1 from '../../../assets/images/step1.png'
import img2 from '../../../assets/images/step2.png'
import img3 from '../../../assets/images/step3.png'
import img4 from '../../../assets/images/step4.png'
import img5 from '../../../assets/images/step5.png'
import img6 from '../../../assets/images/step6.png'
import img7 from '../../../assets/images/step7.png'
import img8 from '../../../assets/images/step8.png'

export default function JourneySection() {

    const steps = [
        {
            id: "01",
            title: "Free Consultation & Profile Evaluation",
            subtitle:
                "We start by understanding your academic goals, background, and preferences. Based on this, we advise you on suitable universities, programs, and locations in France.",
            img: img1,
        },
        {
            id: "02",
            title: "University & Program Selection",
            subtitle:
                "We guide you through choosing the best-fit universities and help with preparing and submitting your applications (including CV, motivation letter, and required documents).",
            img: img2,
        },
        {
            id: "03",
            title: "Visa & Documentation Support",
            subtitle:
                "Once accepted, we help you with the student visa process, Campus France procedures, and all necessary paperwork – no stress, just clarity.",
            img: img3,
        },
        {
            id: "04",
            title: "Accommodation Search",
            subtitle:
                "We assist you in finding a safe, affordable student apartment or residence – even before you arrive. We also guide you through housing contracts and CAF applications.",
            img: img4,
        },
        {
            id: "05",
            title: "Pre-Departure Preparation",
            subtitle:
                "We provide a checklist of what to pack, cultural tips, and key information about life in France. Optional services: airport pickup, SIM card setup, and transport cards.",
            img: img5,
        },
        {
            id: "06",
            title: "Arrival & First Week Support",
            subtitle:
                "Upon arrival, we can welcome you at the airport and help you get settled in your accommodation. We also assist with opening a bank account, phone setup, and initial orientation.",
            img: img6,
        },
        {
            id: "07",
            title: "Administrative Support in France",
            subtitle:
                "We continue helping you with critical tasks like OFII appointments, health insurance registration, residence permit validation/renewal, and university registration.",
            img: img7,
        },
        {
            id: "08",
            title: "Ongoing First-Year Support",
            subtitle:
                "Need help with French documents, local appointments, or simply adjusting to life in France? We're just a message away throughout your first year.",
            img: img8,
        },
    ];

    return (
        <div className='flex flex-col gap-y-5 md:gap-y-14 '>
            <div className='text-center flex-col bg-reddish-orange flex items-center justify-center gap-y-4 md:gap-y-10 py-4 md:py-10'>
                <div className='font-playfair text-[22px] md:text-[30px] lg:text-[44px] font-semibold'>
                    Your Journey to Studying in France – Made Simple
                </div>
                <div className='w-[65vw] text-[12px] md:text-[16px]'>
                    We’ve designed a step-by-step process to make your transition to studying in France smooth and stress-free.
                </div>

            </div>
            <div className='font-poppins text-[24px] md:text-[32px] text-center'>
                How it works
            </div>
            <div className='px-5 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-5'>
                {steps.map((step, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <div
                            key={step?.id}
                            className={`flex items-center gap-2 lg:gap-5 font-poppins  ${isEven ? 'flex-row' : 'flex-row-reverse sm:flex-row'
                                }`}
                        >
                            {/* Image/Mask Side */}
                            <div className="w-1/2 flex justify-center">
                                <TextMask
                                    text={`0${index + 1}`}
                                    image={step?.img}
                                    classStyle="w-full"
                                />
                            </div>

                            {/* Text Content Side */}
                            <div className={`w-1/2 flex flex-col justify-center gap-2 lg:gap-4 ${isEven ? 'items-start text-left' : 'items-end text-right sm:items-start sm:text-left'
                                }`}>
                                <h3 className="text-[16px] md:text-[24px] lg:text-[36px] font-semibold leading-tight">
                                    {step?.title}
                                </h3>
                                <p className="text-[12px] md:text-[16px] lg:text-[18px] text-gray-600 max-w-sm">
                                    {step?.subtitle}
                                </p>
                            </div>
                        </div>
                    );
                })
                }
            </div>

        </div>
    )
}
