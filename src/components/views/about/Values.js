import React from 'react'
import { useTranslation } from 'react-i18next';
import values1 from "../../../assets/images/icons8-world-markets-100.png"
import values2 from "../../../assets/images/icons8-trust-100.png"
import values3 from "../../../assets/images/icons8-star-100.png"
import values4 from "../../../assets/images/icons8-environment-care-100.png"
import values5 from "../../../assets/images/icons8-trophy-100.png"
import values6 from "../../../assets/images/icons8-growth-100.png"

export default function Values() {
    const { t } = useTranslation();

    const valuesData = [
        { key: "v1", imgSrc: values1 },
        { key: "v2", imgSrc: values2 },
        { key: "v3", imgSrc: values3 },
        { key: "v4", imgSrc: values4 },
        { key: "v5", imgSrc: values5 },
        { key: "v6", imgSrc: values6 },
    ];

    return (
        <section className='px-6 md:px-10 lg:px-20'>
            <div className='max-w-7xl mx-auto'>
                <h2 className='font-playfair font-semibold text-[28px] md:text-[36px] lg:text-[44px] mb-10 md:mb-16 text-center lg:text-left'>
                    {t('about_values.main_title')}
                </h2>
                
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16'>
                    {valuesData.map((el, index) => (
                        <ValueCard 
                            key={index} 
                            imgSrc={el.imgSrc}
                            title={t(`about_values.${el.key}.title`)}
                            description={t(`about_values.${el.key}.description`)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

function ValueCard({ imgSrc, title, description }) {
    return (
        <div className='flex flex-col items-center text-center group'>
            <div className='mb-5 p-4 rounded-2xl transition-colors duration-300'>
                <img 
                    className='size-14 md:size-16 lg:size-20 object-contain' 
                    src={imgSrc} 
                    alt={title} 
                />
            </div>

            <h3 className='text-[18px] md:text-[22px] font-bold font-poppins mb-3 text-gray-900'>
                {title}
            </h3>
            <p className='text-[14px] md:text-[16px] text-gray-600 leading-relaxed max-w-sm'>
                {description}
            </p>
        </div>
    )
}