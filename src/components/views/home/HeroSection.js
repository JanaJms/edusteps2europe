import React, { useEffect, useState } from 'react'
import bgHeroImage from "../../../assets/images/homeBg.png"
import bgHeroImageSm from "../../../assets/images/hero-sm.png"
import Button from '../../buttons/Button';
import { chatOnWhatsapp } from '../../../utils/utils';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {

    const [src, setSrc] = useState(bgHeroImage);
    const navigate = useNavigate()

    useEffect(() => {
        const update = () => {
            if (window.innerWidth < 1024) setSrc(bgHeroImageSm);
            else setSrc(bgHeroImage);
        };

        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    const classStyles = {
        COMPONENT: " h-[332px] sm:h-[55vh] md:h-[90dvh] text-light-gray  min-h-fit w-full relative overflow-hidden z-[2]",
        IMAGE: "absolute w-full h-full object-cover object-left lg:object-left ",
        ANIMATED_COMP: "flex flex-col gap-y-5",
        CONTAINER: " w-[90%] sm:w-full bottom-[10px] left-6 md:left-8 md:bottom-[40px] lg:bottom-[35px] lg:left-[55px] 2xl:bottom-4 2xl:left-14 z-[3] absolute items-start flex flex-col gap-y-3.5",
        TEXT_COMP: "max-w-[238px] sm:max-w-[400px] md:max-w-[43%]",
        TEXT: "text-[24px] font-bold md:text-[32px] lg:text-[48px] text-light-gray font-playfair ",
        BTNS: " flex gap-x-5 font-poppins font-medium text-xs md:text-base",
        PRIMARY_BTN: "bg-light-orange text-white-smoke",
        SECONDARY_BTN: `text-blue bg-grey-goose`,
        LINK: 'text-start text-blue underline font-bold cursor-pointer !px-0 text-[8px] md:text-sm'
    }

    return (
        <section
            className={classStyles.COMPONENT}
            id="home"
        >

            <img
                className={classStyles.IMAGE}
                src={src}
                alt="Hero"
                style={{ objectFit: 'cover' }}
            />

            <div className={classStyles.CONTAINER}>
                <div className={classStyles.TEXT_COMP}>
                    <div data-aos="fade-right" className={classStyles.ANIMATED_COMP}>
                        <h1 className={classStyles.TEXT}>
                            Bring Your Child Closer to a Brighter Future in France
                        </h1>
                        <h2 className={classStyles.BTNS}>
                            <Button
                                onClick={() => chatOnWhatsapp()}
                                customizeStyle={classStyles.PRIMARY_BTN}
                                buttonText={`Book Free Consultation`} />

                            <Button
                                onClick={() => { navigate("faq") }}
                                customizeStyle={classStyles.SECONDARY_BTN}
                                buttonText={`See How It Works`} />
                        </h2>
                        <a
                            className={classStyles.LINK}>
                            The First Step Starts Here – Download Your Free Guide to Studying in France
                        </a>
                    </div>
                </div>
            </div>

        </section>
    );

}
