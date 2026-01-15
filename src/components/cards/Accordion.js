import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'

export default function Accordion({ list }) {
    return (
        <div className='shadow-[0_4px_10px_0_rgba(0,0,0,0.25)] bg-white overflow-hidden bg-clip-padding rounded-lg'>
            {
                list?.map((item, index) => (
                    <AccordionItem
                        key={index}
                        isFirstEle={Boolean(index === 0)}
                        isLastEle={Boolean(index === list.length - 1)}
                        data={item}
                    />
                ))
            }
        </div>
    )
}

function AccordionItem({ data, isFirstEle, isLastEle }) {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={`relative border-[1px] border-black-metal text-lg 
        ${isFirstEle ? "rounded-t-lg" : ""}
        ${isLastEle ? "rounded-b-lg" : ""}`}>
            <div className={`px-5 py-3 flex gap-2 justify-between`}>
                <div className='flex-1'>
                    {data?.text}
                </div>
                <div
                    onClick={() => (setIsOpen((prev) => !prev))}
                    className='shrink-0'>
                    <ChevronDown className={`size-6 transition-all duration-500 ease-in-out ${isOpen ? "-rotate-90" : ""}`} />
                </div>
            </div>
            {isOpen && <div className={`px-5 py-3 text-base text-gray-700 transition-all duration-500 ease-in-out border-t-[1px] border-black-metal bg-orange/10 `}>
                {data?.subtext}
            </div>}
        </div>

    )
}
