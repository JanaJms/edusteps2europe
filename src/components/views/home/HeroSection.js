import React from 'react'
import bgHeroImage from "../../../assets/images/homeBg.png"
import bgHeroImageSm from "../../../assets/images/bgSmall.png"
import Button from '../../buttons/Button';
import { chatOnWhatsapp } from '../../../utils/utils';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
    const navigate = useNavigate();

    return (
        <section id="home" className="relative w-full h-[85dvh] md:h-[90dvh] min-h-[600px] overflow-hidden">
            
            {/* Background Image Logic using standard CSS for better performance */}
            <div className="absolute inset-0 z-0">
                <picture>
                    <source media="(max-width: 1023px)" srcSet={bgHeroImageSm} />
                    <source media="(min-width: 1024px)" srcSet={bgHeroImage} />
                    <img 
                        src={bgHeroImage} 
                        alt="Education in France" 
                        className="w-full h-full object-cover object-center lg:object-right-bottom"
                    />
                </picture>
                {/* Modern Gradient Overlay: Darker at the bottom/left for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 lg:bg-gradient-to-r lg:from-black/70 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col justify-end pb-16 md:pb-24">
                
                <div 
                    data-aos="fade-right" 
                    className="flex flex-col gap-y-6 md:gap-y-8 max-w-[90%] md:max-w-[70%] lg:max-w-[55%]"
                >
                    {/* Main Headline */}
                    <h1 className="text-3xl md:text-5xl font-playfair font-bold text-white leading-[1.1]">
                        Bring Your Child Closer to a <span className="text-green-cyan ">Brighter Future</span> in France
                    </h1>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Button
                            onClick={chatOnWhatsapp}
                            customizeStyle="bg-[#ffa66b] text-white px-8 py-4 rounded-xl font-poppins font-semibold shadow-lg hover:bg-[#f89552] transition-all w-full sm:w-auto text-center"
                            buttonText="Book Free Consultation" 
                        />

                        <Button
                            onClick={() => navigate("faq")}
                            customizeStyle="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-poppins font-semibold hover:bg-white/20 transition-all w-full sm:w-auto text-center"
                            buttonText="See How It Works" 
                        />
                    </div>

                    {/* Lead Magnet Link - Styled as a floating badge */}
                    <div className="mt-4 animate-pulse">
                        <a
                            href="/guide"
                            className="inline-flex items-center gap-2 group"
                        >
                            <span className="w-8 h-[1px] bg-[#5FA78D] group-hover:w-12 transition-all"></span>
                            <span className="text-white text-xs md:text-sm lg:text-base font-poppins font-medium underline underline-offset-4 decoration-[#5FA78D]">
                                The First Step Starts Here – Download Your Free Guide
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Visual Decor: Bottom Edge Fade */}
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-20" />
        </section>
    );
}