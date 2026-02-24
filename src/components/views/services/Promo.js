import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // 1. Import hook
import Button from '../../buttons/Button';
import { chatOnWhatsapp } from '../../../utils/utils';
import { useNavigate } from 'react-router-dom';

export default function Promo() {
    const { t } = useTranslation(); // 2. Initialize hook
    const navigate = useNavigate();

    return (
        <section className="px-4 py-10 md:px-10 lg:px-20">
            <div className="relative overflow-hidden z-[2] w-full min-h-max rounded-[30px] md:rounded-[60px] p-8 md:p-16 flex items-center shadow-lg">

                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f8c8a0] via-[#f3f0e8] to-[#9db0a3] opacity-90" />

                <div className="relative z-[3] w-full flex flex-col md:flex-row justify-between items-center gap-10">

                    {/* Left Content */}
                    <div className="w-full md:max-w-[70%] flex flex-col gap-y-6 md:gap-y-10 items-center md:items-start text-center md:text-left">
                        <h2 className="text-[26px] md:text-[42px] lg:text-[52px] leading-tight font-playfair text-[#2d2d2d] font-semibold">
                            {t('promo.title_part1')} <br className="hidden lg:block" />
                            <span className="text-[#d97e5d]">{t('promo.title_highlight')}</span>
                        </h2>

                        <div className="flex flex-col sm:flex-row flex-wrap gap-4 font-poppins font-medium w-full sm:w-auto">
                            <Button
                                onClick={() => { navigate("/packages") }}
                                customizeStyle="bg-[#ffa66b] text-white px-8 py-4 rounded-xl shadow-md hover:bg-[#f89552] transition-all w-full sm:w-auto text-center"
                                buttonText={t('promo.btn_compare')}
                            />

                            <Button
                                onClick={() => chatOnWhatsapp(t('promo.whatsapp_message'))} // 3. Localized WA message
                                customizeStyle="bg-white/30  backdrop-blur-md border border-white/20 text-green-cyan px-8 py-4 rounded-xl font-poppins font-semibold hover:bg-white/20 transition-all w-full sm:w-auto text-center"
                                buttonText={t('promo.btn_quote')}
                            />
                        </div>
                    </div>

                    {/* Right Action Icon */}
                    <div
                        onClick={() => { navigate("/packages") }}
                        className=" items-center justify-center hidden lg:flex">
                        <div className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#d97e5d] text-[#d97e5d] hover:bg-[#d97e5d] hover:text-white transition-all cursor-pointer group bg-white/20 backdrop-blur-sm">
                            <ArrowRight size={36} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}