import React from 'react'

export default function ApartmentHero() {
    return (
        <section
            className="relative h-[90vh] w-full overflow-hidden flex justify-between bg-[#D9966E]/20"
        >
            <img
                src={""}
                alt="Hero"
                className="absolute w-1/2 right-0 bottom-0 object-contain"
            />

            <div className="relative z-10 flex flex-col h-full items-start justify-center ml-20 gap-10">
                <h1 className=" text-black-metal text-3xl md:text-5xl font-bold font-playfair w-[50%]">
                    Student Apartments for Rent
                </h1>
                <p className="text-base md:text-lg leading-relaxed">
                    Find your perfect home away from home. Browse our curated selection of student-friendly apartments.
                </p>
                <div className='border-l-2 border-orange bg-light-orange/30 p-6 rounded-e-lg max-w-2xl'>
                    <p>
                        <strong>Important Notice:</strong> All apartment rentals are facilitated through EduSteps2Europe.
                        Please contact us directly to arrange viewings and rentals.
                    </p>
                </div>
            </div>
        </section>
    )
}
