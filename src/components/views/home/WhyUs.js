import React from 'react'
import { useTranslation } from 'react-i18next'
import img1 from "../../../assets/images/icons8-compass-100.png"
import img2 from "../../../assets/images/icons8-handshake-100.png"
import img3 from "../../../assets/images/icons8-support-100.png"
import img4 from "../../../assets/images/icons8-world-markets-100.png"
import img5 from "../../../assets/images/icons8-cheap-100.png"
import img6 from "../../../assets/images/icons8-shield-100.png"
import FlipCard from "../../cards/FlipCard"

export default function WhyUs() {
    const { t } = useTranslation();

    const data = [
        { id: 1, key: "c1", icon: img1 },
        { id: 2, key: "c2", icon: img2 },
        { id: 3, key: "c3", icon: img3 },
        { id: 4, key: "c4", icon: img4 },
        { id: 5, key: "c5", icon: img5 },
        { id: 6, key: "c6", icon: img6 },
    ];

    return (
        <div className='flex flex-col justify-center items-center px-10 lg:px-20 gap-8 text-center'>
            <div className='font-playfair text-[22px] md:text-[30px] lg:text-[44px] font-semibold'>
                {t('why_us.title')}
            </div>
            <div className='w-[65vw] text-[12px] md:text-[16px] font-poppins'>
                {t('why_us.subtitle')}
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 flex-wrap items-center justify-center gap-4 py-3 md:gap-10 md:py-5 lg:py-8'>
                {data.map((el) => (
                    <FlipCard
                        key={el.id}
                        FrontCard={{
                            Component: FrontCard,
                            props: {
                                title: t(`why_us.cards.${el.key}.title`),
                                imgSrc: el.icon,
                            }
                        }}
                        BackCard={{
                            Component: BackCard,
                            props: {
                                text: t(`why_us.cards.${el.key}.text`),
                            }
                        }}
                    />
                ))}
            </div>

            <div className='w-[65vw] text-[12px] md:text-[16px] font-poppins'>
                {t('why_us.footer_text')}
            </div>
        </div>
    )
}

function FrontCard({ title, imgSrc }) {
    return (
        <div className='shadow-[0_4px_10px_0_rgba(0,0,0,0.25)] p-4 flex flex-col items-center justify-center gap-3 h-[160px] w-[240px] md:w-[300px] rounded-xl md:h-[210px] border-[1px] border-whishkey-orange/20 text-[#5A6B5B] font-medium bg-gradient-to-t from-[#F0EFEB] to-[#FFF9F5]'>
            <img className='size-10 md:size-16 lg:size-20' src={imgSrc} alt={title} />
            <div className='text-[12px] md:text-[16px] font-poppins'>{title}</div>
        </div>
    )
}

function BackCard({ text }) {
    return (
        <div className='shadow-[0_4px_10px_0_rgba(0,0,0,0.25)] p-2 flex items-center justify-center gap-3 h-[160px] w-[240px] md:w-[300px] rounded-xl md:h-[210px] border-[1px] border-whishkey-orange/20 text-[#5A6B5B] font-medium bg-gradient-to-t from-[#F0EFEB] to-[#FFF9F5]'>
            <div className='bg-white/65 px-5 py-2 rounded-2xl w-full h-full flex items-center justify-center text-[12px] md:text-[16px] font-poppins'>
                {text}
            </div>
        </div>
    )
}