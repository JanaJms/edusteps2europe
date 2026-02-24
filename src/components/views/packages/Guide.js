import React from 'react';
import { Download, PlaneTakeoff, GraduationCap, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const StudentGuide = ({ withCTA }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    // 3. Map the data structure to translation keys
    const roadmap = [
        {
            title: t('roadmap.section1_title'),
            icon: <GraduationCap className="text-orange" />,
            steps: t('roadmap.section1_steps', { returnObjects: true })
        },
        {
            title: t('roadmap.section2_title'),
            icon: <Building2 className="text-orange" />,
            steps: t('roadmap.section2_steps', { returnObjects: true })
        },
        {
            title: t('roadmap.section3_title'),
            icon: <PlaneTakeoff className="text-orange" />,
            steps: t('roadmap.section3_steps', { returnObjects: true })
        }
    ];

    return (
        <section className="py-20 bg-gray-50 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold text-black-metal mb-4">
                            {t('roadmap.header_title')}
                        </h2>
                        <p className="text-gray-600">
                            {t('roadmap.header_subtitle')}
                        </p>
                    </div>
                    {/* DOWNLOAD BUTTON */}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://edusteps2europe.com/uploads/Guide_Administrative_Procedures_International_Students_France.pdf"
                        className="flex items-center gap-2 bg-black-metal text-white px-6 py-3 rounded-xl font-bold hover:bg-orange transition-all shadow-lg"
                    >
                        <Download size={20} />
                        {t('roadmap.download_btn')}
                    </a>
                </div>

                {/* Timeline UI */}
                <div className="space-y-8">
                    {roadmap.map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex gap-6">
                            <div className="hidden sm:flex h-12 w-12 rounded-2xl bg-orange/10 items-center justify-center shrink-0">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4 font-playfair">{item.title}</h3>
                                <ul className="grid md:grid-cols-2 gap-3">
                                    {item.steps.map((step, i) => (
                                        <li key={i} className="flex items-center gap-2 text-gray-600 text-sm font-poppins">
                                            <div className="h-1.5 w-1.5 rounded-full bg-orange" />
                                            {step}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA - Linking back to packages */}
                {withCTA &&
                    <div className="mt-12 bg-orange p-8 rounded-3xl text-white text-center">
                        <h3 className="text-xl font-bold mb-2 font-playfair">
                            {t('roadmap.cta_title')}
                        </h3>
                        <p className="mb-6 opacity-90 font-poppins">
                            {t('roadmap.cta_desc')}
                        </p>
                        <button
                            onClick={() => navigate("/packages")}
                            className="bg-white text-orange px-8 py-3 rounded-xl font-bold hover:scale-105 transition-all"
                        >
                            {t('roadmap.cta_btn')}
                        </button>
                    </div>}
            </div>
        </section>
    );
};

export default StudentGuide;