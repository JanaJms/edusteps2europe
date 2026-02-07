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
        { id: "01", title: "Free Consultation & Profile Evaluation", subtitle: "We start by understanding your academic goals, background, and preferences. Based on this, we advise you on suitable universities, programs, and locations in France.", img: img1 },
        { id: "02", title: "University & Program Selection", subtitle: "We guide you through choosing the best-fit universities and help with preparing and submitting your applications (including CV, motivation letter, and required documents).", img: img2 },
        { id: "03", title: "Visa & Documentation Support", subtitle: "Once accepted, we help you with the student visa process, Campus France procedures, and all necessary paperwork – no stress, just clarity.", img: img3 },
        { id: "04", title: "Accommodation Search", subtitle: "We assist you in finding a safe, affordable student apartment or residence – even before you arrive. We also guide you through housing contracts and CAF applications.", img: img4 },
        { id: "05", title: "Pre-Departure Preparation", subtitle: "We provide a checklist of what to pack, cultural tips, and key information about life in France. Optional services: airport pickup, SIM card setup, and transport cards.", img: img5 },
        { id: "06", title: "Arrival & First Week Support", subtitle: "Upon arrival, we can welcome you at the airport and help you get settled in your accommodation. We also assist with opening a bank account, phone setup, and initial orientation.", img: img6 },
        { id: "07", title: "Administrative Support in France", subtitle: "We continue helping you with critical tasks like OFII appointments, health insurance registration, residence permit validation/renewal, and university registration.", img: img7 },
        { id: "08", title: "Ongoing First-Year Support", subtitle: "Need help with French documents, local appointments, or simply adjusting to life in France? We're just a message away throughout your first year.", img: img8 },
    ];

    return (
        <section className='w-full overflow-hidden bg-white'>
            {/* Header Section */}
            <div className='bg-reddish-orange px-6 py-16 md:py-24 flex flex-col items-center justify-center text-center gap-6'>
                <h2 className='font-playfair text-[28px] md:text-[42px] lg:text-[56px] font-bold leading-tight max-w-4xl'>
                    Your Journey to Studying in France – Made Simple
                </h2>
                <p className='text-[14px] md:text-[18px] max-w-2xl opacity-90'>
                    We’ve designed a step-by-step process to make your transition to studying in France smooth and stress-free.
                </p>
            </div>

            <div className='max-w-7xl mx-auto px-6 lg:px-20 py-16 md:py-24'>
                <h3 className='font-poppins text-[24px] md:text-[40px] font-semibold text-center mb-16 md:mb-24 uppercase tracking-widest text-gray-400'>
                    How it works
                </h3>

                <div className='relative'>
                    {/* Vertical line decoration (Desktop Only) */}
                    <div className='hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 -translate-x-1/2 z-0' />

                    {steps.map((step, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={step?.id}
                                className={`relative z-10 flex flex-col lg:flex-row items-center gap-10 md:gap-16 mb-20 md:mb-32 lg:mb-40 ${
                                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                }`}
                            >
                                {/* Image/TextMask Side */}
                                <div className="w-full lg:w-1/2 flex justify-center group">
                                    <div className="w-full max-w-[350px] md:max-w-[450px] text-center transition-transform duration-500 group-hover:scale-105">
                                        <TextMask
                                            text={step.id}
                                            image={step?.img}
                                            classStyle="w-full"
                                        />
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className={`w-full lg:w-1/2 flex flex-col gap-4 md:gap-6 ${
                                    isEven ? 'lg:items-start lg:text-left' : 'lg:items-end lg:text-right'
                                } text-center`}>
                                    <span className="text-[#5FA78D] font-bold tracking-widest text-sm md:text-base uppercase">
                                        Step {step.id}
                                    </span>
                                    <h4 className="text-[22px] md:text-[32px] lg:text-[40px] font-bold font-playfair leading-tight text-gray-900">
                                        {step?.title}
                                    </h4>
                                    <p className="text-[14px] md:text-[16px] lg:text-[18px] text-gray-600 leading-relaxed max-w-lg">
                                        {step?.subtitle}
                                    </p>
                                </div>

                                {/* Desktop Center Indicator Dot */}
                                <div className='hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#5FA78D] z-20' />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}