import React from 'react'

export default function ServicesSection() {

    const data = [
        {
            title: "University & Academics",
            list: [
                {
                    title: "University comparison",
                    description: "Rankings, career prospects, locations",
                    imgSrc: "",
                },
                {
                    title: "University life integration",
                    description: "Student associations, library registration, social events",
                    imgSrc: "",
                },
                {
                    title: "Student jobs",
                    description: "20h/week rules, CV help",
                    imgSrc: "",
                },
            ],
        },
        {
            title: "Housing & Essentials",
            list: [
                {
                    title: "Housing",
                    description: "Help contacting/choosing residences",
                    imgSrc: "",
                },
                {
                    title: "Essential purchases",
                    description: "Kettle, cutlery, duvet, pillows, sheets, hygiene products",
                    imgSrc: "",
                },
                {
                    title: "Storage support",
                    description: "Luggage saving during vacation or moving",
                    imgSrc: "",
                },
            ],
        },
        {
            title: "Legal & Administrative",
            list: [
                {
                    title: "VLS validation",
                    description: "Help contacting/choosing residences",
                    imgSrc: "",
                },
                {
                    title: "Residence permit",
                    description: "Guidance for validation and administrative steps",
                    imgSrc: "",
                },
                {
                    title: "French translations",
                    description: "Document translation support",
                    imgSrc: "",
                },
                {
                    title: "CROUS",
                    description: "Account setup and submission",
                    imgSrc: "",
                },
                {
                    title: "AMELI",
                    description: "Social security enrollment",
                    imgSrc: "",
                },
                {
                    title: "CAF",
                    description: "Account creation for housing aid",
                    imgSrc: "",
                },
                {
                    title: "Bank account",
                    description: "Support with opening a French bank account",
                    imgSrc: "",
                },
                {
                    title: "Phone subscriptions",
                    description: "Guidance for mobile plans",
                    imgSrc: "",
                },
            ],
        },
        {
            title: "Local Life Setup",
            list: [
                {
                    title: "Local transport",
                    description: "Navigo pass, public transport guidance",
                    imgSrc: "",
                },
                {
                    title: "Living costs",
                    description: "Estimated monthly expenses by city",
                    imgSrc: "",
                },
            ],
        },
        {
            title: "Ongoing Support",
            list: [
                {
                    title: "WhatsApp assistance",
                    description: "Real-time help anytime",
                    imgSrc: "",
                },
            ],
        },
    ];

    return (
        <div>
            <div className='text-center flex-col justify-center bg-reddish-orange flex h-52 font-playfair text-[22px] md:text-[30px] lg:text-[44px] font-semibold mb-20'>
                Our Services – step-by-step support
            </div>
            <div className='flex flex-col px-5 lg:px-20 gap-10'>
                {
                    data?.map((ele) => (
                        <Section s={ele} />
                    ))
                }
            </div>
        </div>
    )
}


function Section({ s }) {

    return (
        <div className='flex flex-col gap-16'>
            <div className='font-poppins font-medium  text-[24px] md:text-[32px]'>{s?.title}</div>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    s?.list?.map((el) => (

                        <div className="w-full max-w-sm bg-[#FAF9F6] border-whishkey-orange/20 border-[1px] rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">

                            {/* Image */}
                            <div className="h-56 w-full overflow-hidden rounded-t-2xl">
                                <img
                                    src={el.imgSrc}
                                    alt={el.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="px-6 py-10 text-center">
                                <h3 className="text-[14px] md:text-[20px] font-medium pb-5">
                                    {el.title}
                                </h3>

                                <p className="text-[12px] md:text-[16px] leading-relaxed">
                                    {el.description}
                                </p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )

}