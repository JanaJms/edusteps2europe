import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'; // 1. Import hook
import mail from "../../../assets/images/icons8-email-48.png"
import location from "../../../assets/images/icons8-location-40.png"
import phone from "../../../assets/images/icons8-whatsapp-30.png"
import { InfoCard } from '../../cards/Contact'
import { chatOnWhatsapp, openLocation, openMail } from '../../../utils/utils'
import { Building2, User, Globe, Hash, Copy, CheckCircle2, ShieldCheck } from 'lucide-react'


export default function ContactSection() {
    const { t } = useTranslation(); // 2. Initialize hook

    return (
        <div className='w-full flex flex-col items-center py-10'>

            {/* Header Text */}
            <div className='font-poppins font-medium text-center px-6 w-full max-w-4xl text-[20px] md:text-[28px] lg:text-[32px] leading-snug'>
                {t('contact_section.header')}
            </div>

            {/* Info Cards Section */}
            <section className="w-full py-10 lg:py-16">
                <div className="container mx-auto px-6 md:px-10 lg:px-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                        <InfoCard
                            className='cursor-pointer'
                            onClick={() => chatOnWhatsapp()}
                            icon={phone}
                            title={t('contact_section.card_call')}
                            value="+33 07 80 74 27 58"
                        />
                        <InfoCard
                            onClick={openMail}
                            className='cursor-pointer'
                            icon={mail}
                            title={t('contact_section.card_email')}
                            value="contact@edusteps2europe.com"
                        />
                        <div className="sm:col-span-2 md:col-span-1">
                            <InfoCard
                                onClick={openLocation}
                                className='cursor-pointer'
                                icon={location}
                                title={t('contact_section.card_visit')}
                                value="60 Rue François 1er, 75008 Paris, France"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* PAYMENT INFORMATION SECTION */}
            <section className="w-full px-4 md:px-6">
                <div className="max-w-4xl mx-auto bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[32px] overflow-hidden">
                    <div className="flex flex-col md:flex-row">

                        {/* Left Side: Branding/Title */}
                        <div className="bg-[#FAF9F6] p-8 md:p-12 lg:w-1/3 flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-100">
                            <div>
                                <div className="inline-flex items-center justify-center p-3 bg-orange/10 rounded-2xl mb-6">
                                    <ShieldCheck size={28} className="text-orange" />
                                </div>
                                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                                    {t('contact_section.payment.title_main')} <br />
                                    {t('contact_section.payment.title_sub')}
                                </h2>
                            </div>
                            <p className="text-xs text-gray-500 mt-8 flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                {t('contact_section.payment.verified')}
                            </p>
                        </div>

                        {/* Right Side: Bank Details Grid */}
                        <div className="p-8 md:p-12 lg:w-2/3">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                                <BankDetail
                                    icon={<Building2 size={18} />}
                                    label={t('contact_section.payment.label_bank')}
                                    value="Qonto"
                                />
                                <BankDetail
                                    icon={<User size={18} />}
                                    label={t('contact_section.payment.label_account')}
                                    value="EDUSTEPS2EUROPE"
                                />
                                <BankDetail
                                    icon={<Globe size={18} />}
                                    label={t('contact_section.payment.label_swift')}
                                    value="QNTOFRP1XXX"
                                    copyable
                                />
                                <BankDetail
                                    icon={<Hash size={18} />}
                                    label={t('contact_section.payment.label_iban')}
                                    value="FR76 1695 8000 0104 6930 8053 866"
                                    copyable
                                    isFullWidth
                                />
                            </div>

                            {/* Important Footer */}
                            <div className="mt-12 p-5 bg-orange/[0.03] border border-orange/10 rounded-2xl">
                                <div className="flex gap-3">
                                    <div className="shrink-0 mt-0.5">
                                        <div className="w-1.5 h-1.5 bg-orange rounded-full"></div>
                                    </div>
                                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-poppins">
                                        <strong className="text-gray-900">{t('contact_section.payment.note_bold')}</strong> {t('contact_section.payment.note_text')}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

function BankDetail({ icon, label, value, copyable = false, isFullWidth = false }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={`group ${isFullWidth ? 'sm:col-span-2' : ''}`}>
            <div className="flex items-center gap-2 mb-2 text-gray-400">
                {icon}
                <span className="text-[11px] uppercase tracking-[0.1em] font-bold">{label}</span>
            </div>

            <div className="relative flex items-center justify-between group/item">
                <p className={`text-[15px] md:text-lg font-medium text-gray-900 break-all pr-8 ${copyable ? 'font-mono' : ''}`}>
                    {value}
                </p>

                {copyable && (
                    <button
                        onClick={handleCopy}
                        className="absolute right-0 p-2 text-gray-400 hover:text-orange transition-colors"
                        title="Copy to clipboard"
                    >
                        {copied ? <CheckCircle2 size={18} className="text-green-500" /> : <Copy size={18} />}
                    </button>
                )}
            </div>
            <div className="h-[1px] w-full bg-gray-100 mt-2 group-hover:bg-orange/30 transition-colors"></div>
        </div>
    );
}