import { X, MapPin, Calendar, ChevronLeft, ChevronRight, Maximize, Bed, Bath, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import ImageWithFallback from '../../cards/ImageWithFallback';
import { chatOnWhatsapp } from '../../../utils/utils';

export default function ApartmentModal({ apartment, onClose }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % apartment.images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + apartment.images.length) % apartment.images.length);
    };

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 bg-black-metal/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-5xl h-full md:h-auto md:max-h-[95vh] overflow-y-auto rounded-none md:rounded-3xl shadow-2xl bg-white"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button - Floating */}
                <button
                    onClick={onClose}
                    className="fixed top-4 right-4 z-[110] bg-white/90 hover:bg-white text-black-metal p-2 rounded-full shadow-lg transition-transform hover:scale-110"
                >
                    <X size={24} />
                </button>

                <div className="flex flex-col">
                    {/* 1. Image Gallery Section */}
                    <div className="relative h-[40vh] lg:h-[60vh] bg-grey-goose/20">
                        <ImageWithFallback
                            src={apartment?.images?.[currentImageIndex]}
                            alt={apartment?.title}
                            className="w-full h-full object-cover"
                        />

                        {/* Navigation Arrows */}
                        {apartment?.images?.length > 1 && (
                            <>
                                <div className="absolute inset-0 flex items-center justify-between px-4">
                                    <button onClick={prevImage} className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-black-metal transition-all">
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button onClick={nextImage} className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-black-metal transition-all">
                                        <ChevronRight size={24} />
                                    </button>
                                </div>
                                {/* Modern Progress Indicators */}
                                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                                    {apartment?.images?.map((_, i) => (
                                        <div
                                            key={i}
                                            className={`h-1 transition-all duration-300 rounded-full ${i === currentImageIndex ? 'w-8 bg-orange' : 'w-2 bg-white/50'}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    {/* 2. Content Section */}
                    <div className="p-6 md:p-10">
                        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-8">
                            <div className="space-y-2 max-w-2xl">
                                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-black-metal leading-tight">
                                    {apartment?.title}
                                </h2>
                                <div className="flex items-center gap-2 text-green">
                                    <MapPin size={18} className="text-orange shrink-0" />
                                    <span className="text-sm font-medium">{apartment?.location}</span>
                                </div>
                            </div>
                            <div className="bg-reddish-orange p-4 rounded-2xl min-w-[180px] w-full md:w-fit text-center">
                                <p className="text-sm text-orange font-bold uppercase tracking-wider mb-1">Monthly Rent</p>
                                <p className="text-3xl font-bold text-black-metal">{apartment?.price}<span className="text-lg font-normal">€</span></p>
                            </div>
                        </div>

                        {/* 3. Core Specs Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                            {[
                                { icon: <Maximize />, label: 'Size (m2)', value: apartment.size },
                                { icon: <Bed />, label: 'Bedrooms', value: apartment.bedrooms },
                                { icon: <Bath />, label: 'Bathrooms', value: apartment.bathrooms },
                                { icon: <Calendar />, label: 'Available', value: apartment.availability },
                            ].map((spec, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white-smoke border border-grey-goose/10">
                                    <div className="text-orange">{spec.icon}</div>
                                    <div>
                                        <p className="text-[10px] uppercase font-bold text-green/60 tracking-widest">{spec.label}</p>
                                        <p className="text-sm font-bold text-black-metal">{spec.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="grid lg:grid-cols-3 gap-10">
                            {/* Left Column: Description & Amenities */}
                            <div className="lg:col-span-2 space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold text-black-metal mb-4 flex items-center gap-2">
                                        About this Property
                                        <div className="h-[1px] flex-grow bg-grey-goose/20 ml-2" />
                                    </h3>
                                    <p className="text-green leading-relaxed text-lg">
                                        {apartment.description}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-black-metal mb-4 flex items-center gap-2">
                                        Included Amenities
                                        <div className="h-[1px] flex-grow bg-grey-goose/20 ml-2" />
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {apartment.amenities.map((amenity, index) => (
                                            <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-reddish-orange/50 border border-reddish-orange">
                                                <CheckCircle2 size={18} className="text-orange" />
                                                <span className="text-sm font-medium text-black-metal">{amenity}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: CTA & Notice */}
                            <div className="space-y-6">
                                <div className="bg-white border-2 border-orange/10 p-6 rounded-3xl shadow-sm">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="bg-orange/10 p-3 rounded-xl">
                                            <Calendar className="text-orange" />
                                        </div>
                                        <p className="text-sm text-black-metal/80 leading-snug">
                                            <strong className="block text-black-metal mb-1">Booking Notice</strong>
                                            Rentals are facilitated via <strong>EduSteps2Europe</strong> for security.
                                        </p>
                                    </div>

                                    <button
                                        onClick={chatOnWhatsapp}
                                        className="w-full bg-orange text-white py-4 rounded-2xl font-bold shadow-lg shadow-orange/20 hover:bg-light-orange transition-all transform hover:-translate-y-1">
                                        Request a Viewing
                                    </button>

                                    <p className="text-[11px] text-center text-green mt-4 italic">
                                        Response time: usually within 24 hours
                                    </p>
                                </div>

                                <div className="bg-blue/5 border border-blue/10 p-5 rounded-2xl">
                                    <p className="text-xs text-blue font-bold uppercase tracking-widest mb-2">Need Help?</p>
                                    <p className="text-sm text-black-metal/70">
                                        Our student advisors are available to help you with the legal paperwork and APL eligibility.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}