import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'

export default function Accordion({ list }) {
    return (
        <div className='shadow-lg bg-white overflow-hidden rounded-xl border border-gray-200'>
            {list?.map((item, index) => (
                <AccordionItem
                    key={index}
                    isLastEle={index === list.length - 1}
                    data={item}
                />
            ))}
        </div>
    )
}

function AccordionItem({ data, isLastEle }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`relative transition-all duration-300 ${!isLastEle ? "border-b border-gray-200" : ""}`}>
            {/* Clickable Header */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full px-5 py-4 md:px-6 md:py-5 flex gap-4 justify-between items-center text-left hover:bg-gray-50 transition-colors ${isOpen ? "bg-gray-50/50" : ""}`}
            >
                <span className='flex-1 font-medium text-base md:text-lg text-gray-800 leading-snug'>
                    {data?.text}
                </span>
                <div className='shrink-0 bg-gray-100 p-1 rounded-full'>
                    <ChevronDown
                        className={`size-5 text-gray-500 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : ""}`}
                    />
                </div>
            </button>

            {/* Expandable Content */}
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-5 py-4 md:px-6 md:py-5 text-sm md:text-base text-gray-600 bg-orange-50/30 border-t border-gray-100 leading-relaxed">
                    {data?.subtext}
                </div>
            </div>
        </div>
    )
}