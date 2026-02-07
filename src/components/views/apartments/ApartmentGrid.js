import React, { useState } from 'react'
import { MapPin, Maximize, Bed, Bath, ArrowRight } from 'lucide-react';
import ImageWithFallback from '../../cards/ImageWithFallback';
import ApartmentModal from './ApartmentModal';
import Button from '../../buttons/Button';

export default function ApartmentGrid() {
    const [selectedApartment, setSelectedApartment] = useState(null);

    const apartments = [
        {
            id: 1,
            title: 'Furnished Studio',
            location: 'Boulogne Billancourt - Ouest Paris vers porte Saint cloud Rue Émile Landrin - Métro Marcel Sembat ligne 9 (2 minutes)',
            price: '920',
            image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1000',
            description: "Very well-designed and functional furnished studio located on the second floor of an old town-house style building...",
            bedrooms: 1,
            bathrooms: 1,
            size: '17',
            availability: 'Available Now',
            amenities: [
                'WiFi Included',
                'Fully Furnished',
                'Utilities Included',
                "Electricity subscription included",
                "APL eligible",
                "Second floor",
                "Near metro"]
        }
    ]

    return (
        <section className="bg-body-color py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-black-metal">
                            Available Accommodations
                        </h2>
                        <p className="text-green mt-2">Quality student housing vetted for comfort and proximity.</p>
                    </div>
                    <div className="h-[2px] flex-grow mx-8 bg-grey-goose/20 hidden md:block mb-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {apartments.map((apartment) => (
                        <div
                            key={apartment.id}
                            className="group rounded-3xl bg-white border border-transparent hover:border-orange/20 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col"
                            onClick={() => setSelectedApartment(apartment)}
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <ImageWithFallback
                                    src={apartment.image}
                                    alt={apartment.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Price Tag */}
                                <div className="absolute bottom-4 left-4 bg-black-metal text-white px-4 py-2 rounded-xl font-bold">
                                    €{apartment.price}<span className="text-xs font-normal opacity-80">/mo</span>
                                </div>
                                {/* Status Badge */}
                                <div className="absolute top-4 right-4 bg-pastel-green/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    {apartment.availability}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-playfair font-bold text-black-metal mb-2 group-hover:text-orange transition-colors">
                                    {apartment.title}
                                </h3>

                                <div className="flex items-start gap-2 mb-4 h-10">
                                    <MapPin size={16} className='text-orange shrink-0 mt-1' />
                                    <span className="text-sm text-green line-clamp-2 leading-tight">
                                        {apartment.location}
                                    </span>
                                </div>

                                {/* Specs Bar */}
                                <div className="flex items-center justify-between py-4 border-y border-white-smoke mb-6">
                                    <div className="flex items-center gap-2 text-black-metal/70">
                                        <Maximize size={16} className="text-whishkey-orange" />
                                        <span className="text-sm font-medium">{apartment.size} m²</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-black-metal/70">
                                        <Bed size={16} className="text-whishkey-orange" />
                                        <span className="text-sm font-medium">{apartment.bedrooms} Bed</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-black-metal/70">
                                        <Bath size={16} className="text-whishkey-orange" />
                                        <span className="text-sm font-medium">{apartment.bathrooms} Bath</span>
                                    </div>
                                </div>

                                {/* Action */}
                                <div className="mt-auto">
                                    <button
                                        className="w-full bg-white-smoke text-black-metal group-hover:bg-orange group-hover:text-white py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2"
                                    >
                                        View Details
                                        <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedApartment && (
                <ApartmentModal
                    apartment={selectedApartment}
                    onClose={() => setSelectedApartment(null)}
                />
            )}
        </section>
    )
}