import React from 'react'
import { useTranslation } from 'react-i18next'; // 1. Import hook
import bg from '../../../assets/images/about-bg.png'
import about1 from '../../../assets/images/about-1.png'
import about2 from '../../../assets/images/french.png'
import about3 from '../../../assets/images/about-3.png'

export default function Hero() {
    const { t } = useTranslation(); // 2. Initialize hook

    return (
        /* Increased bottom margin (mb-32) to make room for the overlapping images */
        <div className='relative w-full mb-32 md:mb-48 lg:mb-64'>

            <div className="relative min-h-[60vh] md:h-[70vh] lg:h-[80vh] w-full flex flex-col items-center justify-center overflow-visible">

                {/* Background image - Absolute fills the parent */}
                <img
                    src={bg}
                    alt="Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Text content */}
                <div className="relative z-10 text-center flex flex-col gap-6 md:gap-10 px-6 md:px-16 max-w-4xl pt-10 pb-20">
                    <h1 className="text-[15px] md:text-5xl font-bold font-playfair drop-shadow-md">
                        {t('about_hero.title')}
                    </h1>
                    <div className="text-[12px] md:text-xl leading-relaxed drop-shadow-sm font-poppins max-w-2xl mx-auto">
                        <p>
                            {t('about_hero.description')}
                        </p>
                        <span className="block mt-4 md:mt-6 text-orange font-semibold">
                            {t('about_hero.highlight')}
                        </span>
                    </div>
                </div>

                {/* Floating Images Container */}
                <div className='absolute bottom-0 lg:-bottom-1/2 translate-y-1/2 lg:translate-y-0 w-full px-4 z-20'>
                    <div className='flex justify-center items-center gap-2 md:gap-6 lg:gap-10 max-w-6xl mx-auto'>
                        <img
                            src={about1}
                            alt="About 1"
                            className="w-1/3 max-w-[120px] md:max-w-[200px] lg:max-w-[300px] h-auto shadow-lg rounded-xl object-cover transition-transform hover:scale-105"
                        />
                        <img
                            src={about2}
                            alt="About 2"
                            className="w-1/3 max-w-[140px] md:max-w-[240px] lg:max-w-[350px] h-auto shadow-2xl rounded-xl object-cover -translate-y-4 md:-translate-y-8 transition-transform hover:scale-105"
                        />
                        <img
                            src={about3}
                            alt="About 3"
                            className="w-1/3 max-w-[120px] md:max-w-[200px] lg:max-w-[300px] h-auto shadow-lg rounded-xl object-cover transition-transform hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}