import React from 'react';

export function Card({
    children,
    className = '',
    variant = 'default',
}) {
    const variantStyles = {
        default: 'bg-white border border-grey-goose shadow-[0_4px_10px_0_rgba(0,0,0,0.25)]',
        highlighted: 'bg-light-orange/20 border border-grey-goose/20 shadow-md',
    };

    return (
        <div
            className={`rounded-lg p-6 ${variantStyles[variant]} ${className}`}
        >
            {children}
        </div>
    );
}

export function InfoCard({
    icon,
    title,
    value,
    className = '',
}) {
    return (
        <Card
            className={`flex flex-col items-center justify-center text-center gap-4 h-[250px] ${className}`}
        >
            <div className="text-orange">
                <img src={icon} className='size-8'/>
            </div>

            <div className="flex flex-col gap-1">
                <h4 className="text-black-metal/60 text-sm">
                    {title}
                </h4>
                <p className="text-foreground">
                    {value}
                </p>
            </div>
        </Card>
    );
}
