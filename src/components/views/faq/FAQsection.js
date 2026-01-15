import React from 'react'
import Accordion from '../../cards/Accordion'

export default function FAQsection({ data }) {
    return (
        <div className='flex flex-col px-10 lg:px-20 gap-10'>
            {data?.map((section, index) => (
                <div className='flex gap-10 justify-between '>
                    <div className='text-[24px] md:text-[32px] font-poppins font-medium text-wrap w-1/3'>
                        {section?.sectionTitle}
                    </div>
                    <div className='w-2/3'>
                        <Accordion list={section?.faqList} />
                    </div>
                </div>
            ))}
        </div>
    )
}
