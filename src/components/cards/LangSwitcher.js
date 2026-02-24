import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState('EN');

    const toggleLanguage = () => {
        const newLang = lang === 'EN' ? 'fr' : 'en';
        i18n.changeLanguage(newLang); // This updates the whole app
        setLang(newLang.toUpperCase());
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex items-center">
            {/* Tooltip (Visible on hover) */}
            <div className="group relative flex items-center">
                <span className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-black-metal px-3 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                    {lang === 'EN' ? 'Changer en Français' : 'Switch to English'}
                </span>

                {/* Main Switcher Pill */}
                <button
                    onClick={toggleLanguage}
                    className="flex h-12 w-24 items-center rounded-full border border-white/20 bg-white/70 p-1 shadow-2xl backdrop-blur-md transition-all hover:border-orange/50"
                >
                    {/* Sliding Background Indicator */}
                    <div
                        className={`absolute h-10 w-11 rounded-full bg-orange shadow-lg transition-transform duration-300 ease-in-out ${lang === 'FR' ? 'translate-x-11' : 'translate-x-0'
                            }`}
                    />

                    {/* Labels */}
                    <div className="relative z-10 flex w-full items-center justify-around font-poppins text-xs font-bold tracking-tighter">
                        <span className={`transition-colors duration-300 ${lang === 'EN' ? 'text-white' : 'text-black-metal'}`}>
                            EN
                        </span>
                        <span className={`transition-colors duration-300 ${lang === 'FR' ? 'text-white' : 'text-black-metal'}`}>
                            FR
                        </span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default LanguageSwitcher;