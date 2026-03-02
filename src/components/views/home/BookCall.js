import React from 'react'
import { PhoneCall, ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'; // 1. Import hook
import freeCall from '../../../assets/images/freeCall.png'
import { chatOnWhatsapp } from '../../../utils/utils'

export default function BookCall() {
    const { t } = useTranslation(); // 2. Initialize hook

    return (
        <section className='w-full px-6 md:px-10 lg:px-20 py-20 lg:py-32 overflow-x-hidden'>

            <div className='relative bg-[#0F3D3E] rounded-[40px] md:rounded-[60px] p-8 md:p-16 lg:p-20 flex flex-col lg:flex-row items-center justify-between shadow-2xl overflow-visible'>

                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-[#5FA78D] opacity-20 blur-[100px] pointer-events-none z-0"></div>

                {/* Left Side: Content */}
                <div className='w-full lg:w-[55%] z-10 text-center lg:text-left'>
                    <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-[#5FA78D] text-sm font-medium mb-6 font-poppins'>
                        <PhoneCall size={16} />
                        <span>{t('book_call.badge')}</span>
                    </div>

                    <h2 className='text-[32px] md:text-[52px] lg:text-[64px] font-playfair font-bold leading-[1.1] text-white mb-8'>
                        {t('book_call.title_p1')} <br className='hidden md:block' />
                        {t('book_call.title_p2')}
                    </h2>

                    <button
                        onClick={() => chatOnWhatsapp(t('book_call.wa_msg'))} // 3. Localized message
                        className='group relative inline-flex items-center gap-4 bg-[#5FA78D] hover:bg-[#4d8b75] text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-xl'
                    >
                        <span className='text-base md:text-lg font-bold font-poppins'>{t('book_call.btn')}</span>
                        <div className='bg-white/20 rounded-lg p-1 group-hover:rotate-45 transition-transform duration-300'>
                            <ArrowUpRight size={24} />
                        </div>
                    </button>
                </div>

                {/* Right Side: Illustration */}
                <div className='relative w-full lg:w-[40%] flex justify-center mt-12 lg:mt-0 z-10'>
                    <div className='lg:-mb-32 lg:mr-[-20px] xl:mr-[-40px] transform lg:scale-125 transition-transform duration-500'>
                        <img
                            src={freeCall}
                            alt={t('book_call.img_alt')}
                            className='w-full max-w-[300px] md:max-w-[400px] lg:max-w-none h-auto drop-shadow-[-20px_20px_50px_rgba(0,0,0,0.4)]'
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}