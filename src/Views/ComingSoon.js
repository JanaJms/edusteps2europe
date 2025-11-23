import React from 'react'
import bgImage from "../assets/images/bg.png"
import GlassCard from '../components/cards/GlassCard'
import Loader from '../components/loaders/Loader'

export default function ComingSoon() {
    return (
        <div
            className="w-screen h-screen overflow-hidden"
            style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            {/* Optional overlay */}
            <div className="w-full h-full flex items-center justify-center">
                <GlassCard customStyle={`lg:w-[50%] md:w-[65%] justify-between py-20 px-10`}>
                    <p className='font-poppins font-semibold text-2xl text-orange'>EDUSTEPS2EUROPE</p>
                    <div className='font-playfair text-5xl flex flex-col justify-center items-center gap-y-4'>
                        <div>We're almost ready to launch</div>
                        <div className='font-playfair text-sm w-[70%]'>Good things take time, and we’re making sure every detail is just right. Get ready for an experience designed to delight you from the very first moment</div>
                    </div>
                    <Loader progressValue={83} />
                </GlassCard>
            </div>
        </div>
    )
}
