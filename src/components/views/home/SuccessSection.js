import React from 'react'
import GlassCard from '../../cards/GlassCard'
import circle from '../../../assets/images/gradient-circle.png'
import Button from '../../buttons/Button'
import { chatOnWhatsapp } from '../../../utils/utils'

export default function SuccessSection() {
    return (
        <section className="relative w-full px-4 md:px-10 lg:px-20 py-12 h-screen min-h-max ">
            <div className="flex flex-wrap items-center h-full">

                {/* Left Content */}
                <div className='w-1/2 max-w-7xl h-full flex flex-col items-start justify-center gap-6 lg:gap-10'>
                    <div className='font-poppins font-medium *:leading-tight'>
                        <h1 className=" text-[36px] md:text-[42px] lg:text-[65px]">
                            Your Child’s <span className="text-[#5FA78D]">Success</span>
                        </h1>

                        <p className="text-[22px] md:text-[30px] lg:text-[44px]">
                            Starts with the Right Support
                        </p>
                    </div>


                    <p className=" max-w-md text-[13px] md:text-[14px] lg:text-[16px]">
                        From the moment they land at the airport to opening a bank account, getting their visa validated, and feeling settled in a new city — we handle the details so you can focus on their future, not the paperwork.
                    </p>
                    <div className='flex flex-row gap-5 items-center'>

                        <Button
                            onClick={chatOnWhatsapp}
                            customizeStyle={`bg-light-orange text-white-smoke`}
                            buttonText={`Book Free Consultation`} />
                        <a
                            href='/packages'
                            className={`text-start text-orange underline font-bold cursor-pointer !px-0 text-[8px] md:text-sm`}>
                            Or Request a Custom Package
                        </a>
                    </div>


                </div>

                {/* Right Cards */}
                <div className="w-1/2">
                    <img src={circle} className="      absolute
      right-0
      top-1/2
      -translate-y-1/2
      w-[70%]
      max-w-[520px]
      h-auto
      pointer-events-none" />

                    <div className="gap-y-10 w-full flex flex-col items-end ">
                        {['Free Consultation & Profile Evaluation',
                            'Downloadable student checklist',
                            'French life budgeting templates'].map((el, i) => (
                                <GlassCard customStyle={`p-0! px-5 py-10  ${i == 1 ? "mr-20" : ""}`}>
                                    {el}
                                </GlassCard>
                            ))}
                    </div>
                </div>
            </div>
        </section>

    )
}
