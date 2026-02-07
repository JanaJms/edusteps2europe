import React from 'react'
import { PhoneCall, ArrowUpRight } from 'lucide-react'
import freeCall from '../../../assets/images/freeCall.png'
import { chatOnWhatsapp } from '../../../utils/utils'

export default function BookCall() {
    return (
        <section className='w-full px-6 md:px-10 lg:px-20 py-20 lg:py-32'>
            {/* Main Container with Gradient */}
            <div className='relative bg-[#0F3D3E] rounded-[40px] md:rounded-[60px] p-8 md:p-16 lg:p-20 overflow-visible flex flex-col lg:flex-row items-center justify-between shadow-2xl'>
                
                {/* Background Decoration (Subtle Glow) */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-[#5FA78D] opacity-20 blur-[100px] pointer-events-none"></div>

                {/* Left Side: Content */}
                <div className='w-full lg:w-[55%] z-10 text-center lg:text-left'>
                    <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-[#5FA78D] text-sm font-medium mb-6'>
                        <PhoneCall size={16} />
                        <span>Available for a 15-min chat</span>
                    </div>

                    <h2 className='text-[36px] md:text-[52px] lg:text-[64px] font-playfair font-bold leading-[1.1] text-white mb-8'>
                        Book a Free Call with <br className='hidden md:block'/> 
                        Our Experts
                    </h2>
                    
                    <button
                        onClick={chatOnWhatsapp}
                        className='group relative inline-flex items-center gap-4 bg-[#5FA78D] hover:bg-[#4d8b75] text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-xl'
                    >
                        <span className='text-base md:text-lg font-bold'>Get Started Now</span>
                        <div className='bg-white/20 rounded-lg p-1 group-hover:rotate-45 transition-transform duration-300'>
                            <ArrowUpRight size={24} />
                        </div>
                    </button>
                </div>

                {/* Right Side: Illustration (Popping Out) */}
                <div className='relative w-full lg:w-[40%] flex justify-center mt-12 lg:mt-0'>
                    {/* This div allows the image to overflow the container on desktop */}
                    <div className='lg:absolute lg:bottom-[-80px] lg:right-0 lg:w-[130%]'>
                        <img 
                            src={freeCall} 
                            alt="Expert Consultation" 
                            className='w-full max-w-[320px] md:max-w-[450px] lg:max-w-none h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] transform lg:scale-110'
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}