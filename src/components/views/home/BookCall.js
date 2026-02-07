import React from 'react'
import ArrowRightCircle from '../../../assets/images/Arrow right-circle.png'
import freeCall from '../../../assets/images/freeCall.png'
import { chatOnWhatsapp } from '../../../utils/utils'

export default function BookCall() {
    return (
        <div className='w-full px-4 md:px-10 lg:px-20 py-10'>
            <div className='bg-green-cyan rounded-[40px] md:rounded-[60px] lg:rounded-[100px] py-10 px-8 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0'>
                
                {/* Text and Icon Section */}
                <div className='w-full lg:w-[60%] flex flex-col md:flex-row gap-6 items-center lg:items-end text-center md:text-left'>
                    <h2 className='text-[32px] md:text-[48px] lg:text-[64px] font-playfair font-semibold leading-tight '>
                        Book a Free Call with Our Experts
                    </h2>
                    
                    <img
                        onClick={chatOnWhatsapp}
                        src={ArrowRightCircle}
                        alt="Arrow"
                        className='cursor-pointer w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 shrink-0 hover:scale-110 transition-transform duration-300' 
                    />
                </div>

                {/* Illustration Section */}
                <div className='w-full lg:w-auto justify-center hidden sm:flex'>
                    <img 
                        src={freeCall} 
                        alt="Free Call Illustration" 
                        className='w-full max-w-[300px] md:max-w-[400px] lg:max-w-none h-auto object-contain'
                    />
                </div>
            </div>
        </div>
    )
}