import essentials from "../../../assets/images/05a6d621-8957-4329-a843-b516a5a915d0.jpeg"
import translations from "../../../assets/images/74872337-52c4-48e4-86df-641f65f3b8fe.jpeg"
import storage from "../../../assets/images/ac51ae2f-feab-421f-bf1f-7183e833e01d.jpeg"
import comparision from "../../../assets/images/bfb4d4c9-3cda-4562-9e20-68bb4bebe808.jpeg"
import integration from "../../../assets/images/f2d6d9df-d0d7-4038-85dc-be8f0a33e04b.jpeg"
import local from "../../../assets/images/Gare du Nord, Paris Railway Station… (1).jpeg"
import bank from "../../../assets/images/download (1).jpeg"
import costs from "../../../assets/images/fd0ce4fa-8176-40bb-93c0-4a73f8f31797.jpeg"
import job from "../../../assets/images/Foto jovem gerente feminina feliz segura….jpeg"
import passport from "../../../assets/images/Obtenez la nationalité française en 5 étapes.jpeg"
import crous from "../../../assets/images/crous.jpg"
import assurance from "../../../assets/images/amelie.png"
import caf from "../../../assets/images/caf.jpg"
import texting from "../../../assets/images/SEND TEXTS_ Message your friend as often as….jpeg"
import vls from "../../../assets/images/THE IMPORTANCE OF ACCURACY IN LEGAL TRANSLATION.jpeg"
import phone from "../../../assets/images/This Phone Hack Can Save You Hundreds on Your Next….jpeg"
import housing from "../../../assets/images/When renting out Student Apartments in Mobile, we….jpeg"

export default function ServicesSection() {
    const { t } = useTranslation();

    const data = [
        {
            key: "academics",
            list: [
                { key: "comparison", imgSrc: comparision },
                { key: "integration", imgSrc: integration },
                { key: "jobs", imgSrc: job },
            ],
        },
        {
            key: "housing",
            list: [
                { key: "housing", imgSrc: housing },
                { key: "essentials", imgSrc: essentials },
                { key: "storage", imgSrc: storage },
            ],
        },
        {
            key: "legal",
            list: [
                { key: "vls", imgSrc: vls },
                { key: "passport", imgSrc: passport },
                { key: "translations", imgSrc: translations },
                { key: "crous", imgSrc: crous },
                { key: "ameli", imgSrc: assurance },
                { key: "caf", imgSrc: caf },
                { key: "bank", imgSrc: bank },
                { key: "phone", imgSrc: phone },
            ],
        },
        {
            key: "local",
            list: [
                { key: "transport", imgSrc: local },
                { key: "costs", imgSrc: costs },
            ],
        },
        {
            key: "ongoing",
            list: [
                { key: "whatsapp", imgSrc: texting },
            ],
        },
    ];

    return (
        <section className='w-full pb-20'>
            <div className='bg-reddish-orange min-h-[160px] md:h-52 flex flex-col items-center justify-center px-6 text-center mb-12 md:mb-20'>
                <h1 className='font-playfair text-[26px] md:text-[36px] lg:text-[44px] font-semibold leading-tight'>
                    {t('services_page.main_title')}
                </h1>
            </div>

            <div className='max-w-7xl mx-auto flex flex-col px-5 md:px-10 lg:px-20 gap-16 md:gap-24'>
                {data.map((section, index) => (
                    <div key={index} className='flex flex-col gap-8 md:gap-12'>
                        {/* Section Title */}
                        <h2 className='font-poppins font-medium text-[22px] md:text-[32px] border-b border-whishkey-orange/20 pb-4'>
                            {t(`services_page.sections.${section.key}.title`)}
                        </h2>

                        {/* Responsive Grid */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10'>
                            {section.list.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group w-full bg-[#FAF9F6] border-whishkey-orange/10 border-[1px] rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
                                >
                                    <div className="h-48 md:h-56 w-full overflow-hidden rounded-t-2xl bg-gray-200">
                                        <img
                                            src={item.imgSrc}
                                            alt={t(`services_page.sections.${section.key}.items.${item.key}.title`)}
                                            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    <div className="px-6 py-8 md:py-10 text-center flex-grow flex flex-col justify-center">
                                        <h3 className="text-[16px] md:text-[20px] font-bold font-poppins mb-3">
                                            {t(`services_page.sections.${section.key}.items.${item.key}.title`)}
                                        </h3>
                                        <p className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed font-poppins">
                                            {t(`services_page.sections.${section.key}.items.${item.key}.desc`)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}