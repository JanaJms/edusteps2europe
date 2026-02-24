import React from 'react'
import { useTranslation } from 'react-i18next';
import bg from '../../../assets/images/about-bg.png'

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section className='relative w-full overflow-hidden'>
            <div className="relative min-h-[60vh] lg:h-[80vh] w-full flex items-center justify-center">
                
                {/* Background image */}
                <img
                    src={bg}
                    alt="Hero Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Text content */}
                <div className="relative z-10 text-center flex flex-col gap-6 md:gap-10 px-6 md:px-16 max-w-4xl">
                    <h1 className="text-3xl md:text-5xl font-bold font-playfair leading-tight drop-shadow-lg">
                        {t('services_hero.title_part1')} <br className="hidden md:block" />
                        {t('services_hero.title_part2')}
                    </h1>
                    
                    <p className="text-base md:text-lg leading-relaxed font-poppins max-w-2xl mx-auto drop-shadow-md">
                        {t('services_hero.description')}
                    </p>
                </div>

            </div>
        </section>
    )
}