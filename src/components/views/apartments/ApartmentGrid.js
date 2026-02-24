import React, { useState } from 'react'
import { MapPin, Maximize, Bed, Bath, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ImageWithFallback from '../../cards/ImageWithFallback';
import ApartmentModal from './ApartmentModal';

export default function ApartmentGrid() {
    const { t } = useTranslation();
    const [selectedApartment, setSelectedApartment] = useState(null);

    const apartments = [
        {
            id: 1,
            title: t('accommodations.studio_1.title'),
            location: t('accommodations.studio_1.location'),
            price: '920',
            image: 'https://edusteps2europe.com/uploads/home5',
            images: [
                'https://edusteps2europe.com/uploads/home5',
                'https://edusteps2europe.com/uploads/home1',
                'https://edusteps2europe.com/uploads/home2',
                'https://edusteps2europe.com/uploads/home3',
                'https://edusteps2europe.com/uploads/home4',
                'https://edusteps2europe.com/uploads/home6',
                'https://edusteps2europe.com/uploads/home7',
                'https://edusteps2europe.com/uploads/home8',
                'https://edusteps2europe.com/uploads/home9',
                'https://edusteps2europe.com/uploads/home10',
                'https://edusteps2europe.com/uploads/home11',
            ],
            description: t('accommodations.studio_1.description'),
            bedrooms: 1,
            bathrooms: 1,
            size: '17',
            availability: t('accommodations.studio_1.availability'),
            amenities: t('accommodations.studio_1.amenities', { returnObjects: true })
        }
    ]

    return (
        <section className="bg-body-color py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-black-metal">
                            {t('accommodations.title')}
                        </h2>
                        <p className="text-green mt-2">{t('accommodations.subtitle')}</p>
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
                                    €{apartment.price}<span className="text-xs font-normal opacity-80">{t('accommodations.per_mo')}</span>
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
                                        <span className="text-sm font-medium">{apartment.bedrooms} {t('accommodations.bed')}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-black-metal/70">
                                        <Bath size={16} className="text-whishkey-orange" />
                                        <span className="text-sm font-medium">{apartment.bathrooms} {t('accommodations.bath')}</span>
                                    </div>
                                </div>

                                {/* Action */}
                                <div className="mt-auto">
                                    <button
                                        className="w-full bg-white-smoke text-black-metal group-hover:bg-orange group-hover:text-white py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2"
                                    >
                                        {t('accommodations.view_details')}
                                        <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal - It will automatically show translated content passed via props */}
            {selectedApartment && (
                <ApartmentModal
                    apartment={selectedApartment}
                    onClose={() => setSelectedApartment(null)}
                />
            )}
        </section>
    )
}