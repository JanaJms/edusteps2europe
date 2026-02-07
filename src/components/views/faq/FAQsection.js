import Accordion from '../../cards/Accordion'

export default function FAQsection({ data }) {
    return (
        <div className='flex flex-col px-6 md:px-10 lg:px-20 gap-16 py-10'>
            {data?.map((section, index) => (
                <div key={index} className='flex flex-col lg:flex-row gap-6 lg:gap-10 justify-between'>
                    {/* Section Title: Full width on mobile, 1/3 on desktop */}
                    <div className='text-[22px] md:text-[28px] lg:text-[32px] font-poppins font-semibold text-wrap w-full lg:w-1/3 text-gray-900'>
                        {section?.sectionTitle}
                    </div>

                    {/* Accordion: Full width on mobile, 2/3 on desktop */}
                    <div className='w-full lg:w-2/3'>
                        <Accordion list={section?.faqList} />
                    </div>
                </div>
            ))}
        </div>
    )
}