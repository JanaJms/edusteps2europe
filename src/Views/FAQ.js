import React from 'react'
import HeroFAQ from '../components/views/faq/HeroFAQ'
import FAQsection from '../components/views/faq/FAQsection';

export default function FAQ() {
    const data = [
        {
            id: "section-general",
            sectionTitle: "General texts about Support",
            icon: "🎓",
            order: 1,
            faqList: [
                {
                    id: "faq-001",
                    text: "How can you help us?",
                    subtext:
                        "We assist you at every stage of your settlement in France: visa application, housing search, social security registration, opening a bank account, CAF (housing aid) procedures, insurance, and more. Our goal is to simplify your life and secure all your administrative processes.",
                    isActive: true,
                    order: 1,
                },
                {
                    id: "faq-002",
                    text:
                        "I’ve already been in France for 6 months. Can you still help me?",
                    subtext:
                        "Of course. Our services are available for all international students, whether you are already in France or preparing your arrival from abroad. Do not hesitate to contact us via the “Contact Us” section.",
                    isActive: true,
                    order: 2,
                },
                {
                    id: "faq-003",
                    text:
                        "What are the advantages of going through you rather than handling the procedures alone?",
                    subtext:
                        "We save you time, help you avoid common mistakes, and provide personalized advice at each step. Thanks to our expertise, your administrative procedures are faster and more efficient.",
                    isActive: true,
                    order: 3,
                },
                {
                    id: "faq-004",
                    text: "Is your support service paid? What are the prices?",
                    subtext:
                        "Yes, our support services are paid. We offer different packages depending on your needs, such as visa assistance, housing support, or complete administrative procedures. Prices are transparent and affordable. Please check our \"Pricing\" page for details.",
                    isActive: true,
                    order: 4,
                },
                {
                    id: "faq-005",
                    text: "How can I contact you for a first inquiry?",
                    subtext:
                        "You can reach us through our online form, by email, or directly via WhatsApp.",
                    isActive: true,
                    order: 5,
                },
            ],
        },

        {
            id: "section-visa",
            sectionTitle: "Visa and Residence Permit",
            icon: "🛂",
            order: 2,
            faqList: [
                {
                    id: "faq-006",
                    text: "What types of visas for France do you assist with?",
                    subtext:
                        "We mainly assist with student visas, but also with short-stay visas.",
                    isActive: true,
                    order: 1,
                },
                {
                    id: "faq-007",
                    text: "Can you help me renew my student residence permit?",
                    subtext:
                        "Yes, we guide you through the renewal process, including booking an appointment, preparing the file, and submitting it online via ANEF.",
                    isActive: true,
                    order: 2,
                },
                {
                    id: "faq-008",
                    text: "How long does it take to obtain a French student visa?",
                    subtext:
                        "The processing time varies between 2 and 6 weeks depending on your country of origin and the time of year, starting from the submission of a complete application. We help you prepare your file to avoid delays. However, we are not responsible for the processing time or the outcome of the application.",
                    isActive: true,
                    order: 3,
                },
                {
                    id: "faq-009",
                    text: "What documents do I need for my visa application?",
                    subtext:
                        "Once your request is submitted to the Visa office, you will receive the official list of required documents.",
                    isActive: true,
                    order: 4,
                },
                {
                    id: "faq-010",
                    text: "What should I do if my visa is refused?",
                    subtext:
                        "We review the reasons for the refusal with you and help you, as far as possible, to complete and strengthen your file.",
                    isActive: true,
                    order: 5,
                },
            ],
        },

        {
            id: "section-housing",
            sectionTitle: "Housing",
            icon: "🏠",
            order: 3,
            faqList: [
                {
                    id: "faq-011",
                    text: "Do you help students find accommodation in France?",
                    subtext:
                        "Yes, we help you find housing adapted to your budget and city of study, whether in student residences, shared housing, or private rentals.",
                    isActive: true,
                    order: 1,
                },
                {
                    id: "faq-012",
                    text: "Can I get a housing certificate for my visa application?",
                    subtext:
                        "Yes, once you have secured accommodation, you can request a housing certificate. We guide you in obtaining the official proof required by the consulate. A guarantor residing in France with a minimum income of three times the rent is required. If this is an issue, we suggest alternative solutions.",
                    isActive: true,
                    order: 2,
                },
                {
                    id: "faq-013",
                    text: "Do you help with APL or other housing aid applications?",
                    subtext:
                        "Yes. We assist you in creating your CAF account and applying for housing aid (APL/ALS), step by step. A minor student becomes eligible once they reach adulthood.",
                    isActive: true,
                    order: 3,
                },
            ],
        },

        {
            id: "section-procedures",
            sectionTitle: "CAF, Social Security, Bank & Other Procedures",
            icon: "💼",
            order: 4,
            faqList: [
                {
                    id: "faq-014",
                    text: "Do you help with student social security registration?",
                    subtext:
                        "Yes, we guide you in creating an account on the official health insurance website and completing your registration with French social security.",
                    isActive: true,
                    order: 1,
                },
                {
                    id: "faq-015",
                    text: "Do you help with opening a bank account in France?",
                    subtext:
                        "Yes, we assist by providing a list of nearby banks, required documents, and support up to booking an appointment, even before arrival. Conditions differ for minors.",
                    isActive: true,
                    order: 2,
                },
                {
                    id: "faq-016",
                    text: "Do you help with CAF housing aid applications?",
                    subtext:
                        "Yes, we help you prepare all required documents and complete the online application for CAF housing aid.",
                    isActive: true,
                    order: 3,
                },
                {
                    id: "faq-017",
                    text: "Can you help with housing and liability insurance?",
                    subtext:
                        "Yes, we assist you in finding suitable housing and liability insurance.",
                    isActive: true,
                    order: 4,
                },
                {
                    id: "faq-018",
                    text: "How do I pay the CEVEC?",
                    subtext:
                        "You must register on the official website cevec.etudiant.gouv.fr to make the payment. Proof of payment is mandatory for university registration.",
                    isActive: true,
                    order: 5,
                },
            ],
        },

        {
            id: "section-language",
            sectionTitle: "Language and Integration",
            icon: "💬",
            order: 5,
            faqList: [
                {
                    id: "faq-019",
                    text: "Do I need to speak French to use your services?",
                    subtext:
                        "No. We speak several languages, including English and Arabic, and adapt to your level of French. We also help explain French administrative terminology.",
                    isActive: true,
                    order: 1,
                },
                {
                    id: "faq-020",
                    text: "Do you provide advice on student life in France?",
                    subtext:
                        "Yes, we provide practical guides covering transport, healthcare, food, and integration, and subtext any texts related to daily life in France.",
                    isActive: true,
                    order: 2,
                },
            ],
        },

        {
            id: "section-followup",
            sectionTitle: "Follow-up and Updates",
            icon: "🔄",
            order: 6,
            faqList: [
                {
                    id: "faq-021",
                    text: "Do you provide follow-up after arrival in France?",
                    subtext:
                        "Yes, we remain available after your arrival for residence permit renewal, address changes, CAF assistance, and more.",
                    isActive: true,
                    order: 1,
                },
                {
                    id: "faq-022",
                    text:
                        "If I change housing or university, can you help update my documents?",
                    subtext:
                        "Yes, we assist you in updating your information with the relevant authorities such as the prefecture, social security, and CAF.",
                    isActive: true,
                    order: 2,
                },
                {
                    id: "faq-023",
                    text:
                        "How can I update my information after submitting a file with your help?",
                    subtext:
                        "Contact us as soon as possible. We will check whether updates are possible and assist you with the necessary procedures.",
                    isActive: true,
                    order: 3,
                },
            ],
        },

        {
            id: "section-deadlines",
            sectionTitle: "Deadlines and Emergencies",
            icon: "📅",
            order: 7,
            faqList: [
                {
                    id: "faq-024",
                    text: "What are the processing times for your services?",
                    subtext:
                        "Processing times depend on the service requested. Some files can be handled within 24–48 hours. We always acknowledge requests and keep you informed.",
                    isActive: true,
                    order: 1,
                },
                {
                    id: "faq-025",
                    text:
                        "Do you offer help in case of urgent or late applications?",
                    subtext:
                        "Yes, we offer a priority service for urgent or late files when timelines allow. Please contact us as soon as possible.",
                    isActive: true,
                    order: 2,
                },
            ],
        },
    ];

    return (
        <div className='flex flex-col w-full gap-y-8 md:gap-y-20 pb-12 md:pb-28'>
            <HeroFAQ />
            <FAQsection data={data}/>
        </div>
    )
}
