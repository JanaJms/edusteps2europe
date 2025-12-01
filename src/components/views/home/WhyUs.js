import img1 from "../../../assets/images/icons8-world-markets-100.png"
import img2 from "../../../assets/images/icons8-handshake-100.png"
import img3 from "../../../assets/images/icons8-support-100.png"
import img4 from "../../../assets/images/icons8-world-markets-100.png"
import img5 from "../../../assets/images/icons8-cheap-100.png"
import img6 from "../../../assets/images/icons8-compass-100.png"
import FlipCard from "../../cards/FlipCard"

export default function WhyUs() {

    const data = [
        {
            id: 1,
            title: "Complete Guidance – From A to Z",
            text: "We help you identify the right university and program, guide you through the application process, and assist with housing, insurance, and other essentials.",
            icon: img1
        },
        {
            id: 2,
            title: "On-the-Ground Support in France",
            text: "You’re not alone. We are here to support you once you land in France—airport pickup, city orientation, settling in, and much more.",
            icon: img2,
        },
        {
            id: 3,
            title: "Expertise in French Systems",
            text: "From visas and OFII appointments to university registration and CAF applications, we simplify every administrative process so you can focus on your studies.",
            icon: img3
        },
        {
            id: 4,
            title: "Local Knowledge, Personal Touch",
            text: "Our team is made up of professionals and former students who’ve been in your shoes. We know what it takes to succeed and feel at home in France.",
            icon: img4
        },
        {
            id: 5,
            title: "Affordable & Transparent Services",
            text: "No hidden fees. Just practical, honest help tailored to your budget and needs.",
            icon: img5
        },
        {
            id: 6,
            title: "Support Throughout Your First Year",
            text: "From opening a bank account to renewing your residence permit, we stay by your side during your most critical adjustment period.",
            icon: img6
        },
    ]

    return (
        <div className='flex flex-col justify-center items-center p-10 lg:p-20 gap-8 text-center'>
            <div className='font-playfair text-[22px] md:text-[30px] lg:text-[44px] font-semibold'>Why choose EDUSTEPS2EUROPE? </div>
            <div className='w-[65vw] text-[12px] md:text-[16px]'>We help you identify the right university and program, guide you through the application process, and assist with housing, insurance, and other essentials.</div>
            <div className='flex flex-wrap items-center justify-center gap-4 py-5 md:gap-10 md:py-10 lg:py-16'>
                {data.map((el) => (
                    <FlipCard
                        key={el.id}
                        FrontCard={{
                            Component: FrontCard,
                            props: {
                                title: el.title,
                                imgSrc: el.icon,
                            }
                        }}
                        BackCard={{
                            Component: BackCard,
                            props: {
                                text: el.text,
                            }
                        }}
                    />

                ))}
            </div>
            <div className='w-[65vw] text-[12px] md:text-[16px]'>We offer comprehensive support tailored specifically for students  who want to study in France – from the moment you dream of  studying abroad, through your arrival, and throughout your crucial first year.
            </div>
        </div>
    )
}


function FrontCard({ title, imgSrc }) {
    return (
        <div className='shadow-[0_4px_10px_0_rgba(0,0,0,0.25)] p-4 flex flex-col items-center justify-center gap-3 h-[160px] w-[240px] md:w-[300px] rounded-xl md:h-[210px] border-[1px] border-whishkey-orange/20 text-[#5A6B5B] font-medium bg-gradient-to-t from-[#F0EFEB] to-[#FFF9F5]'>
            <img className='size-10 md:size-16 lg:size-20' src={imgSrc} />
            <div className='text-[12px] md:text-[16px]'>{title}</div>
        </div>
    )
}

function BackCard({ text }) {
    return (
        <div className='shadow-[0_4px_10px_0_rgba(0,0,0,0.25)] p-2 flex items-center justify-center gap-3  h-[160px] w-[240px] md:w-[300px] rounded-xl md:h-[210px] border-[1px] border-whishkey-orange/20 text-[#5A6B5B] font-medium bg-gradient-to-t from-[#F0EFEB] to-[#FFF9F5]'>
            <div className='bg-white/65 px-5 py-2 rounded-2xl w-full h-full flex items-center justify-center text-[12px] md:text-[16px]'>{text}</div>
        </div>
    )
}