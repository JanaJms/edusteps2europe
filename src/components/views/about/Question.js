import React from 'react'
import img from "../../../assets/images/qst.png"
import Button from '../../buttons/Button'
import { chatOnWhatsapp } from '../../../utils/utils'

export default function Question() {
    return (
        <section className='lg:min-h-screen bg-reddish-orange flex flex-col lg:flex-row justify-between items-center gap-10 pl-6 md:pl-16 pr-6 md:pr-16 lg:pr-0 py-12 lg:py-0 overflow-hidden'>
            
            {/* Left Content */}
            <div className='w-full lg:w-3/5 flex flex-col gap-y-6 md:gap-y-8 justify-center items-center lg:items-start text-center lg:text-left order-2 lg:order-1'>
                <h2 className='font-playfair font-semibold text-[28px] md:text-[40px] lg:text-[56px] leading-tight'>
                    Still have questions?<br className='hidden md:block' />
                    Ask someone who’s <span className='text-orange'>lived</span> it.
                </h2>

                <div className='w-full md:w-4/5 lg:w-11/12 text-[14px] md:text-[18px] leading-relaxed opacity-90'>
                    Our alumni ambassadors are students just like your child — from your region, studying in France now. 
                    They’ve gone through the same application steps, moved abroad, and are building their future.
                    <p className='mt-4'>
                        Ask them what it's really like — housing, classes, choosing a city, making friends, anything.
                    </p>
                </div>

                <div className='pt-4 w-full flex justify-center lg:justify-start'>
                    <Button
                        onClick={chatOnWhatsapp}
                        customizeStyle="bg-light-orange text-white-smoke px-6 py-4 rounded-full font-medium transition-transform hover:scale-105"
                        buttonText="Book a call with an EDUSTEPS2EUROPE alumni" 
                    />
                </div>
            </div>

            {/* Right Image */}
            <div className='w-full lg:w-2/5 justify-center order-1 lg:order-2 hidden lg:flex'>
                <img 
                    src={img} 
                    alt="Question Illustration" 
                    className='w-2/3 md:w-1/2 lg:w-full h-auto object-contain max-w-[400px] lg:max-w-none'
                />
            </div>
            
        </section>
    )
}