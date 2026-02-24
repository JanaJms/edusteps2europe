import React from 'react'
import { useTranslation } from 'react-i18next';
import img from "../../../assets/images/qst.png"
import Button from '../../buttons/Button'
import { chatOnWhatsapp } from '../../../utils/utils'

export default function Question() {
    const { t } = useTranslation();

    return (
        <section className='lg:min-h-screen bg-reddish-orange flex flex-col lg:flex-row justify-between items-center gap-10 pl-6 md:pl-16 pr-6 md:pr-16 lg:pr-0 py-12 lg:py-10 overflow-hidden'>

            {/* Left Content */}
            <div className='w-full lg:w-3/5 flex flex-col gap-y-6 md:gap-y-8 justify-center items-center lg:items-start text-center lg:text-left order-2 lg:order-1'>
                <h2 className='font-playfair font-semibold text-[28px] md:text-[40px] lg:text-[56px] leading-tight'>
                    {t('about_question.title_top')}<br className='hidden md:block' />
                    {t('about_question.title_bottom')} <span className='text-orange'>{t('about_question.title_highlight')}</span> {t('about_question.title_end')}
                </h2>

                <div className='w-full md:w-4/5 lg:w-11/12 text-[14px] md:text-[18px] leading-relaxed opacity-90 font-poppins'>
                    {t('about_question.description_1')}
                    <p className='mt-4'>
                        {t('about_question.description_2')}
                    </p>
                </div>

                <div className='pt-4 w-full flex justify-center lg:justify-start'>
                    <Button
                        onClick={() => chatOnWhatsapp(t('about_question.whatsapp_message'))} // 3. Translated WhatsApp message
                        customizeStyle="bg-light-orange text-white-smoke px-6 py-4 rounded-full font-medium transition-transform hover:scale-105"
                        buttonText={t('about_question.button_text')}
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