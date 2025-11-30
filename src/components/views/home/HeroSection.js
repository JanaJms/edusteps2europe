import React from 'react'
import bgHeroImage from "../../../assets/images/hero.jpg"
import Button from '../../buttons/Button';

export default function HeroSection() {

    const classStyles = {
        COMPONENT: " h-[332px] sm:h-[55vh] md:h-[80dvh] text-light-gray  min-h-fit w-full relative overflow-hidden z-[2]",
        IMAGE: "absolute w-full h-full object-cover object-right-bottom ",
        CONTAINER: " w-[90%] sm:w-full bottom-[10px] left-6 md:left-8 md:bottom-[40px] lg:bottom-[35px] lg:left-[55px] 2xl:bottom-4 2xl:left-14 z-[3] absolute items-start flex flex-col gap-y-3.5",
        TEXT_COMP: "max-w-[238px] sm:max-w-[400px] md:max-w-[43%]",
        TEXT: "text-[24px] font-bold md:text-[32px] lg:text-[48px] text-light-gray font-playfair ",
        BTNS: " flex gap-x-5 font-poppins font-medium",
    }

    return (
        <section
            className={classStyles.COMPONENT}
            id="home"
        >

            <img
                className={classStyles.IMAGE}
                src={bgHeroImage}
                alt="Hero"
                fill
                style={{ objectFit: 'cover' }}
            />

            <div className={classStyles.CONTAINER}>
                <div className={classStyles.TEXT_COMP}>
                    <div data-aos="fade-right" className='flex flex-col gap-y-5'>
                        <h1 className={classStyles.TEXT}>
                            Bring Your Child Closer to a Brighter Future in France
                        </h1>
                        <h2 className={classStyles.BTNS}>
                            <Button
                                customizeStyle={`bg-light-orange text-white-smoke`}
                                buttonText={`Book Free Consultation`} />

                            <Button
                                customizeStyle={`text-blue bg-grey-goose`}
                                buttonText={`See How It Works`} />
                        </h2>
                        <Button
                            textSize={`14px`}
                            buttonText={`The First Step Starts Here – Download Your Free Guide to Studying in France`}
                            customizeStyle='text-start text-grey-goose underline font-bold cursor-pointer !px-0' />
                    </div>
                </div>
            </div>

        </section>
    );

}
