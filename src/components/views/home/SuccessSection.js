import React from 'react'
// Keep your existing imports
import GlassCard from '../../cards/GlassCard'
import circle from '../../../assets/images/gradient-circle.png'
import Button from '../../buttons/Button'
import { chatOnWhatsapp } from '../../../utils/utils'

export default function SuccessSection() {
    return (
        <section className="relative w-full px-6 md:px-10 lg:px-20 py-12 lg:py-0 lg:h-screen min-h-screen flex items-center overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center w-full max-w-7xl mx-auto gap-12 lg:gap-0">

                {/* Left Content */}
                <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left justify-center gap-6 lg:gap-10 z-10'>
                    <div className='font-poppins font-medium leading-tight'>
                        <h1 className="text-[32px] md:text-[48px] lg:text-[65px] leading-tight">
                            Your Child’s <span className="text-[#5FA78D]">Success</span>
                        </h1>

                        <p className="text-[20px] md:text-[32px] lg:text-[44px] leading-tight">
                            Starts with the Right Support
                        </p>
                    </div>

                    <p className="max-w-md text-[14px] md:text-[16px] text-gray-700">
                        From the moment they land at the airport to opening a bank account, getting their visa validated, and feeling settled in a new city — we handle the details so you can focus on their future, not the paperwork.
                    </p>

                    <div className='flex flex-col sm:flex-row gap-5 items-center w-full sm:w-auto'>
                        <Button
                            onClick={chatOnWhatsapp}
                            customizeStyle="bg-[#FF8A50] text-white px-8 py-3 rounded-full w-full sm:w-auto"
                            buttonText="Book Free Consultation" 
                        />
                        <a
                            href='/packages'
                            className="text-orange-500 underline font-bold cursor-pointer text-sm md:text-base">
                            Or Request a Custom Package
                        </a>
                    </div>
                </div>

                {/* Right Cards */}
                <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end items-center min-h-[400px]">
                    {/* Background Circle - Adjusted for responsiveness */}
                    <img 
                        src={circle} 
                        alt="bg-decoration"
                        className="absolute right-[-10%] lg:right-[-20%] top-1/2 -translate-y-1/2 w-[120%] md:w-[80%] lg:w-[520px] max-w-none pointer-events-none opacity-60 lg:opacity-100" 
                    />

                    {/* Staggered Cards Container */}
                    <div className="flex flex-col gap-y-6 md:gap-y-10 w-full max-w-sm md:max-w-md lg:max-w-none items-center lg:items-end z-10">
                        {[
                            'Free Consultation & Profile Evaluation',
                            'Downloadable student checklist',
                            'French life budgeting templates'
                        ].map((el, i) => (
                            <div 
                                key={i}
                                // i == 1 adds the right margin only on desktop (lg)
                                className={`w-full lg:w-auto transition-all duration-300 ${i === 1 ? "lg:mr-20" : ""}`}
                            >
                                <GlassCard customStyle="px-6 py-8 md:px-8 md:py-10 text-center lg:text-right shadow-xl backdrop-blur-md !w-full">
                                    <span className="text-sm md:text-lg font-medium">{el}</span>
                                </GlassCard>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}