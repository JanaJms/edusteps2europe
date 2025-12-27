import React from 'react'
import img from "../../../assets/images/qst.png"
import Button from '../../buttons/Button'

export default function Question() {
    return (
        <div className='h-screen bg-reddish-orange flex justify-between items-center gap-10'>
            <div className='pl-16 py-10 h-full flex flex-col gap-y-8 justify-center'>
                <div className='font-playfair font-semibold text-[22px] md:text-[30px] lg:text-[44px] '>
                    Still have questions?<br />
                    Ask someone who’s <span className='text-orange'>lived</span> it.
                </div>
                <div className='w-3/4 pb-10'>
                    Our alumni ambassadors are students just like your child — from your region, studying in France now.<br/>
                    They’ve gone through the same application steps, moved abroad, and are building their future.<br/>
                    Ask them what it's really like — housing, classes, choosing a city, making friends, anything.
                </div>
                <Button
                    customizeStyle={`bg-light-orange text-white-smoke !w-fit`}
                    buttonText={`Book a call with an EDUSTESP2EUROPE alumni`} />
            </div>
            <img src={img} />
        </div>
    )
}
