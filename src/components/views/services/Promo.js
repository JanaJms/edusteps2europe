import { ArrowRight } from 'lucide-react';
import React from 'react'
import Button from '../../buttons/Button';

export default function Promo() {

    const classStyles = {
        // Modified to include the gradient background from the image
        COMPONENT: "relative overflow-hidden z-[2] w-full min-h-[332px] sm:min-h-[55vh] md:min-h-[400px] rounded-[60px] p-8 md:p-16 flex items-center",
        GRADIENT_BG: "absolute inset-0 bg-gradient-to-br from-[#f8c8a0] via-[#f3f0e8] to-[#9db0a3] opacity-80",
        CONTAINER: "relative z-[3] w-full flex flex-col md:flex-row justify-between items-center gap-8",
        TEXT_COMP: "max-w-full md:max-w-[60%] flex flex-col gap-y-8",
        TEXT: "text-[32px] md:text-[42px] lg:text-[52px] leading-tight font-playfair text-[#2d2d2d]",
        HIGHLIGHT: "text-[#d97e5d]",
        BTNS: "flex flex-wrap gap-4 font-poppins font-medium text-xs md:text-base",
        PRIMARY_BTN: "bg-[#ffa66b] text-white px-6 py-3 rounded-xl shadow-sm hover:bg-[#f89552] transition-colors",
        SECONDARY_BTN: "bg-[#c5ced3] text-[#5b7380] px-6 py-3 rounded-xl hover:bg-[#b8c2c8] transition-colors",
        ARROW_CIRCLE: "flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#d97e5d] text-[#d97e5d] hover:bg-[#d97e5d] hover:text-white transition-all cursor-pointer"
    };

    return (
        <section className="p-4 md:p-10">
            <div className={classStyles.COMPONENT}>
                {/* Background Gradient */}
                <div className={classStyles.GRADIENT_BG} />

                <div className={classStyles.CONTAINER}>
                    {/* Left Content */}
                    <div className={classStyles.TEXT_COMP}>
                        <h2 className={classStyles.TEXT}>
                            Explore our flexible packages that combine these services to <br />
                            <span className={classStyles.HIGHLIGHT}>save time and money.</span>
                        </h2>

                        <div className={classStyles.BTNS}>
                            <Button customizeStyle={classStyles.PRIMARY_BTN}
                            buttonText={`Compare Packages`}/>
                            
                            <Button
                            buttonText={`Get a Custom Quote`}
                            customizeStyle={classStyles.SECONDARY_BTN}/>
                            
                        </div>
                    </div>

                    {/* Right Action */}
                    <div className="hidden md:flex">
                        <div className={classStyles.ARROW_CIRCLE}>
                            <ArrowRight size={32} strokeWidth={1.5} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
