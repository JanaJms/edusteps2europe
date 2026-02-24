import React from 'react';
import { CheckCircle2, MessageCircle, Home, School, Landmark, Briefcase, Info } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import { chatOnWhatsapp } from '../utils/utils';
import StudentGuide from '../components/views/packages/Guide';

const Packages = () => {
    const { t } = useTranslation();

    const mainPackages = [
        {
            name: t('packages.main.essential.name'),
            price: "250€",
            description: t('packages.main.essential.description'),
            features: t('packages.main.essential.features', { returnObjects: true }),
            color: "border-gray-200",
            message: t('packages.main.essential.message')
        },
        {
            name: t('packages.main.comfort.name'),
            price: "500€",
            description: t('packages.main.comfort.description'),
            features: t('packages.main.comfort.features', { returnObjects: true }),
            color: "border-gray-200",
            message: t('packages.main.comfort.message')
        },
        {
            name: t('packages.main.peace.name'),
            price: "750€",
            popular: true,
            description: t('packages.main.peace.description'),
            features: t('packages.main.peace.features', { returnObjects: true }),
            color: "border-orange shadow-xl scale-105",
            message: t('packages.main.peace.message')
        }
    ];

    const specializedServices = [
        {
            title: t('packages.specialized.university.title'),
            icon: <School className="text-orange" size={32} />,
            tiers: [
                { label: "Essential", price: "50€", detail: t('packages.specialized.university.t1') },
                { label: "Comfort", price: "70€", detail: t('packages.specialized.university.t2') },
                { label: "Premium", price: "100€", detail: t('packages.specialized.university.t3') }
            ]
        },
        {
            title: t('packages.specialized.housing.title'),
            icon: <Home className="text-orange" size={32} />,
            tiers: [
                { label: "Essential", price: "50€", detail: t('packages.specialized.housing.t1') },
                { label: "Premium", price: "100€", detail: t('packages.specialized.housing.t2') }
            ]
        },
        {
            title: t('packages.specialized.banking.title'),
            icon: <Landmark className="text-orange" size={32} />,
            tiers: [
                { label: "Essential", price: "70€", detail: t('packages.specialized.banking.t1') },
                { label: "Premium", price: "150€", detail: t('packages.specialized.banking.t2') }
            ]
        }
    ];

    return (
        <div className="bg-white min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* --- Section 1: Intro --- */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-black-metal mb-6">
                        {t('packages.intro.title')}
                    </h1>
                    <div className="text-lg text-gray-600 max-w-3xl mx-auto font-poppins">
                        <Trans i18nKey="packages.intro.description">
                            Managing your arrival... With <span className="text-orange font-bold">EduSteps2Europe</span>...
                        </Trans>
                    </div>
                    <div className="mt-8 inline-block bg-orange/10 text-orange px-6 py-2 rounded-full font-semibold">
                        {t('packages.intro.badge')}
                    </div>
                </div>

                {/* --- Section 2: Main Pricing Cards --- */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {mainPackages.map((pkg, idx) => (
                        <div
                            onClick={() => chatOnWhatsapp(pkg.message)}
                            key={idx} className={`relative p-8 rounded-3xl border-2 flex flex-col cursor-pointer ${pkg.color} bg-white transition-all`}>
                            {pkg.popular && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest">
                                    {t('packages.main.recommended')}
                                </span>
                            )}
                            <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                            <div className="text-4xl font-black text-orange mb-4">{pkg.price}</div>
                            <p className="text-gray-500 mb-8 h-12 text-sm">{pkg.description}</p>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {pkg.features.map((feat, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm">
                                        <CheckCircle2 className="text-orange shrink-0" size={18} />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full py-4 rounded-xl font-bold transition-all ${pkg.popular ? 'bg-orange text-white hover:bg-orange/90' : 'border-2 border-black-metal text-black-metal hover:bg-black-metal hover:text-white'}`}>
                                {t('packages.main.choose_plan')}
                            </button>
                        </div>
                    ))}
                </div>

                {/* --- Section 3: Specialized Support --- */}
                <h2 className="text-3xl font-bold text-center mb-12 font-playfair">{t('packages.specialized.title')}</h2>
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {specializedServices.map((service, idx) => (
                        <div key={idx} className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                            <div className="mb-6">{service.icon}</div>
                            <h3 className="text-xl font-bold mb-6">{service.title}</h3>
                            <div className="space-y-6">
                                {service.tiers.map((t, i) => (
                                    <div key={i} className="border-b border-gray-200 pb-4 last:border-0">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-bold text-orange text-sm uppercase">{t.label}</span>
                                            <span className="font-black">{t.price}</span>
                                        </div>
                                        <p className="text-xs text-gray-500 leading-relaxed">{t.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- Section 4: A La Carte & WhatsApp CTA --- */}
                <div className="grid md:grid-cols-2 gap-12 mb-24">
                    <div className="bg-black-metal text-white p-10 rounded-3xl flex flex-col">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Briefcase className="text-orange" /> {t('packages.alacarte.title')}
                        </h3>
                        <div className="space-y-6 flex-grow">
                            <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                <div>
                                    <p className="font-bold">{t('packages.alacarte.job')}</p>
                                    <p className="text-sm text-gray-400">{t('packages.alacarte.job_desc')}</p>
                                </div>
                                <span className="text-orange font-bold">100€</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                <div>
                                    <p className="font-bold">{t('packages.alacarte.translation')}</p>
                                    <p className="text-sm text-gray-400">{t('packages.alacarte.translation_desc')}</p>
                                </div>
                                <span className="text-orange font-bold">10% fee</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-bold">{t('packages.alacarte.taxi')}</p>
                                    <p className="text-sm text-gray-400">{t('packages.alacarte.taxi_desc')}</p>
                                </div>
                                <span className="text-orange font-bold">min 10€</span>
                            </div>
                        </div>
                        <button
                            onClick={() => chatOnWhatsapp(t('packages.alacarte.wa_msg'))}
                            className="cursor-pointer mt-8 border border-white/20 text-center py-4 rounded-xl font-bold hover:bg-white hover:text-black-metal transition-all"
                        >
                            {t('packages.alacarte.btn')}
                        </button>
                    </div>

                    <div className="bg-orange p-10 rounded-3xl text-white flex flex-col">
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <MessageCircle /> {t('packages.whatsapp_card.title')}
                            </h3>
                            <div className="mb-6 text-lg leading-relaxed font-poppins">
                                <Trans i18nKey="packages.whatsapp_card.description">
                                    Need a quick answer for <strong>Doctolib</strong>, <strong>Ameli</strong>...
                                </Trans>
                            </div>
                            <div className="bg-white/10 p-4 rounded-2xl mb-6">
                                <p className="font-bold text-lg">
                                    {t('packages.whatsapp_card.promo_title')}
                                </p>
                                <p className="text-sm opacity-90">
                                    {t('packages.whatsapp_card.promo_subtitle')}
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => chatOnWhatsapp()}
                            className="cursor-pointer mt-4 bg-white text-orange text-center py-5 rounded-2xl font-black text-lg shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                        >
                            <MessageCircle size={24} fill="currentColor" className="text-orange" />
                            {t('packages.whatsapp_card.btn')}
                        </button>
                    </div>
                </div>

                {/* --- Section 5: Essential Info --- */}
                <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 font-playfair">
                        <Info className="text-orange" /> {t('packages.info.title')}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8 text-sm leading-relaxed text-gray-600 font-poppins">
                        <div className="space-y-4">
                            <p><Trans i18nKey="packages.info.p1">... pay the <strong>CVEC</strong>, register with the <strong>CROUS</strong>...</Trans></p>
                            <p><Trans i18nKey="packages.info.p2">... <strong>Minors:</strong> No specific steps...</Trans></p>
                            <p><Trans i18nKey="packages.info.p3">... <strong>Adults:</strong> validate your VLS-TS...</Trans></p>
                        </div>
                        <div className="space-y-4">
                            <p><Trans i18nKey="packages.info.p4">... <strong>Social Security:</strong> etranger.ameli.fr ...</Trans></p>
                            <p className="italic bg-white p-4 rounded-xl border border-gray-100">
                                {t('packages.info.disclaimer')}
                            </p>
                        </div>
                    </div>
                </div>

                <StudentGuide withCTA={false} />

            </div>
        </div>
    );
};

export default Packages;