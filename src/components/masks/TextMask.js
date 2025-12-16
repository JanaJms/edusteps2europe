import React from 'react'

export default function TextMask({ text, image, classStyle }) {
    return (
        <div
            className={`
                text-[120px] md:text-[160px] lg:text-[200px] font-extrabold font-poppins w-fit h-fit
                bg-center bg-contain text-transparent bg-clip-text leading-none
                ${classStyle}
            `}
            style={{
                backgroundImage: `url(${image})`
            }}
        >
            {text}
        </div>
    )
}
