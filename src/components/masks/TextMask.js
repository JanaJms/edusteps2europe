import React from 'react'

export default function TextMask({ text, image }) {
    return (
        <div
            className={`
                text-[300px] font-extrabold font-poppins
                bg-center bg-contain text-transparent bg-clip-text
            `}
            style={{
                backgroundImage: `url(${image})`
            }}
        >
            {text}
        </div>
    )
}
