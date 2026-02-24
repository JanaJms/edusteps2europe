import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Vision() {
    const { t } = useTranslation();

    return (
        <section className='w-full px-6 md:px-10 lg:px-20'>
            <div className='max-w-7xl mx-auto flex flex-col gap-6 md:gap-8 lg:gap-12'>

                {/* Title Section */}
                <h2 className='font-playfair font-semibold text-[28px] md:text-[40px] lg:text-[56px] leading-tight text-gray-900 max-w-full md:max-w-[80vw] lg:max-w-[65vw]'>
                    {t('about_vision.title_part1')} <br className="hidden md:block" />
                    {t('about_vision.title_part2')}
                </h2>

                {/* Description Section */}
                <div className='max-w-full md:max-w-3xl lg:max-w-4xl'>
                    <p className='text-[14px] md:text-[18px] lg:text-[20px] leading-relaxed text-gray-700 font-poppins'>
                        {t('about_vision.description')}
                    </p>
                </div>

            </div>
        </section>
    )
}