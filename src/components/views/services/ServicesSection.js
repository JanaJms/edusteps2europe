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
import crous from "../../../assets/images/Screenshot 2025-06-22 181751.png"
import assurance from "../../../assets/images/Screenshot 2025-06-22 181819.png"
import caf from "../../../assets/images/Screenshot 2025-06-22 181901.png"
import texting from "../../../assets/images/SEND TEXTS_ Message your friend as often as….jpeg"
import vls from "../../../assets/images/THE IMPORTANCE OF ACCURACY IN LEGAL TRANSLATION.jpeg"
import phone from "../../../assets/images/This Phone Hack Can Save You Hundreds on Your Next….jpeg"
import housing from "../../../assets/images/When renting out Student Apartments in Mobile, we….jpeg"

export default function ServicesSection() {
    const data = [
        {
            title: "University & Academics",
            list: [
                { title: "University comparison", description: "Rankings, career prospects, locations", imgSrc: comparision },
                { title: "University life integration", description: "Student associations, library registration, social events", imgSrc: integration },
                { title: "Student jobs", description: "20h/week rules, CV help", imgSrc: job },
            ],
        },
        {
            title: "Housing & Essentials",
            list: [
                { title: "Housing", description: "Help contacting/choosing residences", imgSrc: housing },
                { title: "Essential purchases", description: "Kettle, cutlery, duvet, pillows, sheets, hygiene products", imgSrc: essentials },
                { title: "Storage support", description: "Luggage saving during vacation or moving", imgSrc: storage },
            ],
        },
        {
            title: "Legal & Administrative",
            list: [
                { title: "VLS validation", description: "Help contacting/choosing residences", imgSrc: vls },
                { title: "Residence permit", description: "Guidance for validation and administrative steps", imgSrc:passport },
                { title: "French translations", description: "Document translation support", imgSrc: translations },
                { title: "CROUS", description: "Account setup and submission", imgSrc: crous },
                { title: "AMELI", description: "Social security enrollment", imgSrc: assurance },
                { title: "CAF", description: "Account creation for housing aid", imgSrc: caf },
                { title: "Bank account", description: "Support with opening a French bank account", imgSrc: bank },
                { title: "Phone subscriptions", description: "Guidance for mobile plans", imgSrc: phone },
            ],
        },
        {
            title: "Local Life Setup",
            list: [
                { title: "Local transport", description: "Navigo pass, public transport guidance", imgSrc: local },
                { title: "Living costs", description: "Estimated monthly expenses by city", imgSrc: costs },
            ],
        },
        {
            title: "Ongoing Support",
            list: [
                { title: "WhatsApp assistance", description: "Real-time help anytime", imgSrc: texting },
            ],
        },
    ];

    return (
        <section className='w-full pb-20'>
            {/* Header Section */}
            <div className='bg-reddish-orange min-h-[160px] md:h-52 flex flex-col items-center justify-center px-6 text-center mb-12 md:mb-20'>
                <h1 className='font-playfair text-[26px] md:text-[36px] lg:text-[44px] font-semibold leading-tight'>
                    Our Services – step-by-step support
                </h1>
            </div>

            {/* Content Sections */}
            <div className='max-w-7xl mx-auto flex flex-col px-5 md:px-10 lg:px-20 gap-16 md:gap-24'>
                {data.map((ele, index) => (
                    <ServiceGroup key={index} section={ele} />
                ))}
            </div>
        </section>
    )
}

function ServiceGroup({ section }) {
    return (
        <div className='flex flex-col gap-8 md:gap-12'>
            {/* Section Title */}
            <h2 className='font-poppins font-medium text-[22px] md:text-[32px] border-b border-whishkey-orange/20 pb-4'>
                {section.title}
            </h2>

            {/* Responsive Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10'>
                {section.list.map((item, idx) => (
                    <div 
                        key={idx} 
                        className="group w-full bg-[#FAF9F6] border-whishkey-orange/10 border-[1px] rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
                    >
                        {/* Image Container */}
                        <div className="h-48 md:h-56 w-full overflow-hidden rounded-t-2xl bg-gray-200">
                            {item.imgSrc ? (
                                <img
                                    src={item.imgSrc}
                                    alt={item.title}
                                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            ) : (
                                // Placeholder if no image provided
                                <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                                    <span className="text-xs uppercase tracking-widest">EduSteps Preview</span>
                                </div>
                            )}
                        </div>

                        {/* Card Content */}
                        <div className="px-6 py-8 md:py-10 text-center flex-grow flex flex-col justify-center">
                            <h3 className="text-[16px] md:text-[20px] font-bold font-poppins mb-3">
                                {item.title}
                            </h3>
                            <p className="text-[13px] md:text-[16px] text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}