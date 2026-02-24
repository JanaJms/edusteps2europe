import React from 'react'
import { useTranslation } from 'react-i18next';

export default function FoundersMessage() {
    const { t } = useTranslation();

    return (
        <section className='w-full px-6 md:px-10 lg:px-20 py-16 md:py-24 bg-stone-50'>
            <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl mx-auto'>

                {/* Image Side */}
                <div className='w-full lg:w-5/12'>
                    <div className='relative'>
                        {/* Decorative background element */}
                        <div className='absolute -top-4 -left-4 w-full h-full border-2 border-orange rounded-2xl z-0' />
                        <img
                            src={'https://edusteps2europe.com/uploads/founders.jpeg'}
                            alt="EduSteps2Europe Founders"
                            className='relative z-10 w-full h-auto rounded-2xl shadow-2xl object-cover'
                        />
                    </div>
                </div>

                {/* Text Side */}
                <div className='w-full lg:w-7/12 flex flex-col gap-6'>
                    <h2 className='font-playfair font-bold text-[32px] md:text-[44px] leading-tight text-gray-900'>
                        {t('founders.title')}
                    </h2>

                    <div className='text-[16px] md:text-[18px] leading-relaxed text-gray-700 font-poppins space-y-5'>
                        <p className='italic font-medium text-orange'>
                            {t('founders.quote')}
                        </p>

                        <p>
                            {t('founders.para1')}
                        </p>

                        <p className='font-semibold text-black-metal'>
                            {t('founders.para2_bold')}
                        </p>

                        <p>
                            {t('founders.para3')}
                        </p>

                        <p>
                            {t('founders.para4_start')} <span className='text-orange font-medium'>{t('founders.para4_orange')}</span>
                        </p>

                        <div className='pt-4'>
                            <p className='text-[20px] font-playfair font-bold text-gray-900'>{t('founders.footer_title')}</p>
                            <p>{t('founders.footer_text')}</p>
                            <p className='mt-4 font-bold text-orange tracking-widest'>{t('founders.signature')}</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}