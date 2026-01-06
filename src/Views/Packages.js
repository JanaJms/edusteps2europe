import React from 'react'
import { ClipboardCheck, PhoneCall, Calculator } from 'lucide-react';
import Button from '../components/buttons/Button';

export default function Packages() {

    const classStyles = {
        // Top Section Styles
        SECTION_CONTAINER: "w-full",
        HEADER_GROUP: "text-center max-w-2xl mx-auto mb-16",
        TITLE: "text-[32px] md:text-[48px] font-bold font-playfair text-[#2d2d2d] leading-tight mb-6",
        SUBTITLE: "text-sm md:text-base font-poppins text-gray-500 leading-relaxed",

        // Split Content Styles
        SPLIT_WRAPPER: "flex flex-col md:flex-row items-center justify-between gap-12 mb-24 py-16 px-6 md:px-12 lg:px-24",
        LEFT_CONTENT: "flex-1 max-w-[500px] flex flex-col gap-y-10",
        RIGHT_IMAGE_WRAP: "flex-1 relative w-full h-[400px] md:h-[500px]",
        IMAGE_ROUNDED: "w-full h-full object-cover rounded-[40px]",

        // Bottom Banner Styles
        FREE_BANNER: "bg-reddish-orange w-full flex flex-col lg:flex-row items-center justify-center gap-12 py-16 px-6 md:px-12 lg:px-24",
        FREE_TEXT_BLOCK: "max-w-1/2 text-center",
        FREE_TITLE: "text-4xl md:text-5xl font-playfair font-bold",
        FREE_HIGHLIGHT: "text-[#FF6400]",

        // Button & List Styles
        PRIMARY_BTN: "bg-[#ffa66b] text-white font-poppins font-semibold py-4 px-8 rounded-xl shadow-lg hover:bg-[#f89552] transition-all",
        LIST_ITEM: "flex items-center gap-4 text-lg font-poppins font-medium text-[#4a4a4a]",
        ICON_BOX: "p-3 rounded-lg text-[#2d2d2d]"
    };

    return (

        <div className={classStyles.SECTION_CONTAINER}>
            {/* 1. Main Header */}
            <div className={classStyles.HEADER_GROUP}>
                <h2 className={classStyles.TITLE}>Tailored Support for Every Journey to France</h2>
                <p className={classStyles.SUBTITLE}>
                    Whether you need full guidance or just help with a few steps — we offer
                    flexible, parent-approved service packages that make sure nothing is missed.
                </p>
            </div>

            {/* 2. Feature Section (Split) */}
            <div className={classStyles.SPLIT_WRAPPER}>
                <div className={classStyles.LEFT_CONTENT}>
                    <h3 className="text-[28px] md:text-[40px] font-playfair font-bold leading-tight mb-8">
                        Let's talk about your child's goals and challenges, and we'll help you decide what support they truly need.
                    </h3>

                    <Button
                        customizeStyle={`bg-light-orange text-white-smoke !w-fit`}
                        buttonText={`Get Personal Help Choosing a Package`} />
                </div>

                <div className={classStyles.RIGHT_IMAGE_WRAP}>
                    <img
                        src="/api/placeholder/600/500"
                        alt="Support Session"
                        className={classStyles.IMAGE_ROUNDED}
                    />
                </div>
            </div>

            {/* 3. "What's Always Free" Banner */}
            <div className={classStyles.FREE_BANNER}>
                <div className={classStyles.FREE_TEXT_BLOCK}>
                    <h2 className={classStyles.FREE_TITLE}>
                        What's Always <span className={classStyles.FREE_HIGHLIGHT}>Free</span>
                    </h2>
                    <p className="mt-4 text-gray-600 font-poppins">
                        We believe in transparency and helping every student succeed.<br/> That's why some resources are always free:
                    </p>
                </div>

                <div className="flex flex-col gap-6 w-full lg:w-auto">
                    <div className={classStyles.LIST_ITEM}>
                        <div className={classStyles.ICON_BOX}><ClipboardCheck size={28} /></div>
                        <span>Downloadable student checklist</span>
                    </div>
                    <div className={classStyles.LIST_ITEM}>
                        <div className={classStyles.ICON_BOX}><PhoneCall size={28} /></div>
                        <span>Free discovery call</span>
                    </div>
                    <div className={classStyles.LIST_ITEM}>
                        <div className={classStyles.ICON_BOX}><Calculator size={28} /></div>
                        <span>French life budgeting templates</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
