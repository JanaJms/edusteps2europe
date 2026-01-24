import { X, MapPin, DollarSign, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import ImageWithFallback from '../../cards/ImageWithFallback';

export default function ApartmentModal({ apartment, onClose }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % apartment.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + apartment.images.length) % apartment.images.length);
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(0,0,0,0.6)]"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl bg-white font-poppins"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 bg-white text-black-metal right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                >
                    <X size={24} />
                </button>

                {/* Image Gallery */}
                <div className="relative h-64 md:h-96">
                    <ImageWithFallback
                        src={apartment.images[currentImageIndex]}
                        alt={`${apartment.title} - Image ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover"
                    />

                    {/* Gallery Navigation */}
                    {apartment.images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 bg-white text-black-metal -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 bg-white text-black-metal -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                            >
                                <ChevronRight size={24} />
                            </button>

                            {/* Image Indicators */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {apartment.images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all ease-in-out duration-500 ${index === currentImageIndex ? 'bg-orange' : 'bg-white/60'}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col gap-y-6">
                    <h2
                        className="text-2xl md:text-3xl mb-4 font-playfair text-black-metal"
                    >
                        {apartment.title}
                    </h2>

                    {/* Key Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="flex items-center gap-2">
                            <MapPin size={20} className='text-orange' />
                            <div>
                                <p className="text-sm text-green">Location</p>
                                <p className='text-black-metal'>{apartment.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <DollarSign size={20} className='text-orange' />
                            <div>
                                <p className="text-sm text-green">Price Range</p>
                                <p className='text-black-metal'>{apartment.priceRange}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={20} className='text-orange' />
                            <div>
                                <p className="text-sm text-green">Availability</p>
                                <p className='text-black-metal'>{apartment.availability}</p>
                            </div>
                        </div>
                    </div>

                    {/* Details */}
                    <div
                        className="p-4 rounded-lg grid grid-cols-3 gap-4 bg-white-smoke"
                    >
                        <div className="text-center">
                            <p className="text-2xl mb-1 text-orange">{apartment.bedrooms}</p>
                            <p className="text-sm text-green">Bedrooms</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl mb-1 text-orange">{apartment.bathrooms}</p>
                            <p className="text-sm text-green">Bathrooms</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl mb-1 text-orange">{apartment.size}</p>
                            <p className="text-sm text-green">Size</p>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="">
                        <h3 className="mb-3 text-black-metal">Description</h3>
                        <p className="leading-relaxed text-green">
                            {apartment.description}
                        </p>
                    </div>

                    {/* Amenities */}
                    <div className="">
                        <h3 className="mb-3 text-black-metal">Amenities</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {apartment.amenities.map((amenity, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 p-2 rounded bg-reddish-orange"
                                >
                                    <div
                                        className="w-2 h-2 rounded-full bg-orange"
                                    />
                                    <span className="text-sm text-black-metal">{amenity}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Important Note */}

                    <div className='border-l-2 border-orange bg-light-orange/30 p-6 rounded-e-lg '>
                        <p>
                            <strong>Important:</strong> Please contact EduSteps2Europe directly to arrange your rental. We facilitate all apartment bookings to ensure a smooth and secure process.

                        </p>
                    </div>

                    {/* CTA Button */}
                    <button
                        className="w-full py-4 rounded-lg transition-opacity hover:opacity-90 bg-orange text-white"
                    >
                        Contact Us to Rent This Apartment
                    </button>
                </div>
            </div>
        </div>
    );
}
