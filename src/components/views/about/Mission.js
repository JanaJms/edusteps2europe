import React from 'react'
import mission from '../../../assets/images/france students 1.png'

export default function Mission() {
    return (
        <div className='flex gap-6 lg:gap-10'>
            <div className='w-1/2 flex items-center justify-center'>
                <img src={mission} /></div>
            <div className='w-1/2 flex flex-col px-4 md:px-10 lg:px-20 gap-6 lg:gap-10'>
                <div className='font-playfair font-semibold text-[22px] md:text-[30px] lg:text-[44px] max-w-[50vw]'>
                    Our mission is to empower international students
                </div>
                <div className='text-[12px] md:text-[16px]'>
                    by providing the guidance, resources, and local support they need to confidently pursue their education in France.
                    We aim to simplify every step of the process—from selecting the right university to adjusting to life abroad—ensuring a smooth transition and a successful first year.                </div>
            </div>
        </div>
    )
}
