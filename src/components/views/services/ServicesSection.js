import React from 'react'

export default function ServicesSection() {
    const data = [
        {
            title: "University & Academics",
            list: [
                { title: "University comparison", description: "Rankings, career prospects, locations", imgSrc: "" },
                { title: "University life integration", description: "Student associations, library registration, social events", imgSrc: "" },
                { title: "Student jobs", description: "20h/week rules, CV help", imgSrc: "" },
            ],
        },
        {
            title: "Housing & Essentials",
            list: [
                { title: "Housing", description: "Help contacting/choosing residences", imgSrc: "" },
                { title: "Essential purchases", description: "Kettle, cutlery, duvet, pillows, sheets, hygiene products", imgSrc: "" },
                { title: "Storage support", description: "Luggage saving during vacation or moving", imgSrc: "" },
            ],
        },
        {
            title: "Legal & Administrative",
            list: [
                { title: "VLS validation", description: "Help contacting/choosing residences", imgSrc: "" },
                { title: "Residence permit", description: "Guidance for validation and administrative steps", imgSrc: "" },
                { title: "French translations", description: "Document translation support", imgSrc: "" },
                { title: "CROUS", description: "Account setup and submission", imgSrc: "" },
                { title: "AMELI", description: "Social security enrollment", imgSrc: "" },
                { title: "CAF", description: "Account creation for housing aid", imgSrc: "" },
                { title: "Bank account", description: "Support with opening a French bank account", imgSrc: "" },
                { title: "Phone subscriptions", description: "Guidance for mobile plans", imgSrc: "" },
            ],
        },
        {
            title: "Local Life Setup",
            list: [
                { title: "Local transport", description: "Navigo pass, public transport guidance", imgSrc: "" },
                { title: "Living costs", description: "Estimated monthly expenses by city", imgSrc: "" },
            ],
        },
        {
            title: "Ongoing Support",
            list: [
                { title: "WhatsApp assistance", description: "Real-time help anytime", imgSrc: "" },
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