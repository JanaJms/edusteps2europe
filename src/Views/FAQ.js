import React from 'react';
import { useTranslation } from 'react-i18next'; // Import
import HeroFAQ from '../components/views/faq/HeroFAQ';
import FAQsection from '../components/views/faq/FAQsection';

export default function FAQ() {
    const { t } = useTranslation();

    const data = [
        {
            id: "section-general",
            sectionTitle: t('faq.sections.general.title'),
            icon: "🎓",
            order: 1,
            faqList: [
                { id: "faq-001", text: t('faq.sections.general.q1.q'), subtext: t('faq.sections.general.q1.a'), isActive: true, order: 1 },
                { id: "faq-002", text: t('faq.sections.general.q2.q'), subtext: t('faq.sections.general.q2.a'), isActive: true, order: 2 },
                { id: "faq-003", text: t('faq.sections.general.q3.q'), subtext: t('faq.sections.general.q3.a'), isActive: true, order: 3 },
                { id: "faq-004", text: t('faq.sections.general.q4.q'), subtext: t('faq.sections.general.q4.a'), isActive: true, order: 4 },
                { id: "faq-005", text: t('faq.sections.general.q5.q'), subtext: t('faq.sections.general.q5.a'), isActive: true, order: 5 },
            ],
        },
        {
            id: "section-visa",
            sectionTitle: t('faq.sections.visa.title'),
            icon: "🛂",
            order: 2,
            faqList: [
                { id: "faq-006", text: t('faq.sections.visa.q1.q'), subtext: t('faq.sections.visa.q1.a'), isActive: true, order: 1 },
                { id: "faq-007", text: t('faq.sections.visa.q2.q'), subtext: t('faq.sections.visa.q2.a'), isActive: true, order: 2 },
                { id: "faq-008", text: t('faq.sections.visa.q3.q'), subtext: t('faq.sections.visa.q3.a'), isActive: true, order: 3 },
                { id: "faq-009", text: t('faq.sections.visa.q4.q'), subtext: t('faq.sections.visa.q4.a'), isActive: true, order: 4 },
                { id: "faq-010", text: t('faq.sections.visa.q5.q'), subtext: t('faq.sections.visa.q5.a'), isActive: true, order: 5 },
            ],
        },
        {
            id: "section-housing",
            sectionTitle: t('faq.sections.housing.title'),
            icon: "🏠",
            order: 3,
            faqList: [
                { id: "faq-011", text: t('faq.sections.housing.q1.q'), subtext: t('faq.sections.housing.q1.a'), isActive: true, order: 1 },
                { id: "faq-012", text: t('faq.sections.housing.q2.q'), subtext: t('faq.sections.housing.q2.a'), isActive: true, order: 2 },
                { id: "faq-013", text: t('faq.sections.housing.q3.q'), subtext: t('faq.sections.housing.q3.a'), isActive: true, order: 3 },
            ],
        },
        {
            id: "section-procedures",
            sectionTitle: t('faq.sections.procedures.title'),
            icon: "💼",
            order: 4,
            faqList: [
                { id: "faq-014", text: t('faq.sections.procedures.q1.q'), subtext: t('faq.sections.procedures.q1.a'), isActive: true, order: 1 },
                { id: "faq-015", text: t('faq.sections.procedures.q2.q'), subtext: t('faq.sections.procedures.q2.a'), isActive: true, order: 2 },
                { id: "faq-016", text: t('faq.sections.procedures.q3.q'), subtext: t('faq.sections.procedures.q3.a'), isActive: true, order: 3 },
                { id: "faq-017", text: t('faq.sections.procedures.q4.q'), subtext: t('faq.sections.procedures.q4.a'), isActive: true, order: 4 },
                { id: "faq-018", text: t('faq.sections.procedures.q5.q'), subtext: t('faq.sections.procedures.q5.a'), isActive: true, order: 5 },
            ],
        }
    ];

    return (
        <div className='flex flex-col w-full gap-y-8 md:gap-y-20 pb-12 md:pb-28'>
            <HeroFAQ />
            <FAQsection data={data} />
        </div>
    )
}