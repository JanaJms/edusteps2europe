import React, { useState } from 'react'
import { MapPin, DollarSign } from 'lucide-react';
import ImageWithFallback from '../../cards/ImageWithFallback';
import ApartmentModal from './ApartmentModal';
import Button from '../../buttons/Button';

export default function ApartmentGrid({ }) {
    const [selectedApartment, setSelectedApartment] = useState(null);

    const apartments = [
        {
            id: 1,
            title: 'Modern Studio near University',
            location: 'Downtown Boston',
            priceRange: '$1,200 - $1,500/mo',
            image: 'https://images.unsplash.com/photo-1594873604892-b599f847e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjkwMjMxOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            images: [
                'https://images.unsplash.com/photo-1594873604892-b599f847e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjkwMjMxOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                'https://images.unsplash.com/photo-1635933036183-d1f250072745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwYXBhcnRtZW50fGVufDF8fHx8MTc2OTAwMjU5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            ],
            description: 'A beautiful modern studio apartment located just 5 minutes from the university campus. Perfect for students who want to be close to classes while enjoying a comfortable living space.',
            bedrooms: 1,
            bathrooms: 1,
            size: '450 sq ft',
            availability: 'Available Now',
            amenities: ['WiFi Included', 'Fully Furnished', 'Utilities Included', 'Near Public Transit', 'Laundry in Building', 'Security System'],
        },
        {
            id: 2,
            title: 'Shared Student Housing',
            location: 'Cambridge',
            priceRange: '$800 - $1,000/mo',
            image: 'https://images.unsplash.com/photo-1635933036183-d1f250072745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwYXBhcnRtZW50fGVufDF8fHx8MTc2OTAwMjU5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            images: [
                'https://images.unsplash.com/photo-1635933036183-d1f250072745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwYXBhcnRtZW50fGVufDF8fHx8MTc2OTAwMjU5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                'https://images.unsplash.com/photo-1594873604892-b599f847e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjkwMjMxOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            ],
            description: 'Affordable shared housing option with fellow international students. Great for networking and making friends while keeping costs down. Each bedroom is private with shared common areas.',
            bedrooms: 1,
            bathrooms: 1,
            size: '350 sq ft',
            availability: 'Available Feb 1',
            amenities: ['WiFi Included', 'Furnished Room', 'Shared Kitchen', 'Study Room', 'Cleaning Service', 'All Utilities Included'],
        },
        {
            id: 3,
            title: 'Luxury 1-Bedroom Apartment',
            location: 'Back Bay',
            priceRange: '$2,000 - $2,500/mo',
            image: 'https://images.unsplash.com/photo-1594873604892-b599f847e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjkwMjMxOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            images: [
                'https://images.unsplash.com/photo-1594873604892-b599f847e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjkwMjMxOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                'https://images.unsplash.com/photo-1635933036183-d1f250072745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwYXBhcnRtZW50fGVufDF8fHx8MTc2OTAwMjU5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            ],
            description: 'Premium living space in one of Boston\'s most prestigious neighborhoods. Features modern amenities, high-end finishes, and stunning city views. Perfect for graduate students or those seeking upscale accommodation.',
            bedrooms: 1,
            bathrooms: 1,
            size: '650 sq ft',
            availability: 'Available March 1',
            amenities: ['High-Speed WiFi', 'Fully Furnished', 'Gym Access', 'Concierge Service', 'Parking Included', 'Pet Friendly'],
        },
        {
            id: 4,
            title: 'Cozy Studio with Garden View',
            location: 'Brookline',
            priceRange: '$1,100 - $1,300/mo',
            image: 'https://images.unsplash.com/photo-1635933036183-d1f250072745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwYXBhcnRtZW50fGVufDF8fHx8MTc2OTAwMjU5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            images: [
                'https://images.unsplash.com/photo-1635933036183-d1f250072745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwYXBhcnRtZW50fGVufDF8fHx8MTc2OTAwMjU5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            ],
            description: 'A peaceful studio apartment overlooking a beautiful garden. Located in a quiet residential area with easy access to public transportation and local amenities.',
            bedrooms: 1,
            bathrooms: 1,
            size: '400 sq ft',
            availability: 'Available Now',
            amenities: ['WiFi Ready', 'Furnished', 'Garden Access', 'Near Metro', 'Quiet Neighborhood', 'Storage Space'],
        },
        {
            id: 5,
            title: '2-Bedroom Family Apartment',
            location: 'Somerville',
            priceRange: '$1,800 - $2,200/mo',
            image: 'https://images.unsplash.com/photo-1594873604892-b599f847e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjkwMjMxOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            images: [
                'https://images.unsplash.com/photo-1594873604892-b599f847e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjkwMjMxOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                'https://images.unsplash.com/photo-1635933036183-d1f250072745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwYXBhcnRtZW50fGVufDF8fHx8MTc2OTAwMjU5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            ],
            description: 'Spacious 2-bedroom apartment ideal for students with families or those who want extra space. Features a modern kitchen, large living area, and plenty of natural light.',
            bedrooms: 2,
            bathrooms: 2,
            size: '900 sq ft',
            availability: 'Available April 1',
            amenities: ['High-Speed WiFi', 'Furnished Option', 'Dishwasher', 'Parking Available', 'Playground Nearby', 'Storage Unit'],
        },
        {
            id: 6,
            title: 'Budget-Friendly Student Room',
            location: 'Allston',
            priceRange: '$700 - $900/mo',
            image: 'https://images.unsplash.com/photo-1635933036183-d1f250072745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwYXBhcnRtZW50fGVufDF8fHx8MTc2OTAwMjU5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            images: [
                'https://images.unsplash.com/photo-1635933036183-d1f250072745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwYXBhcnRtZW50fGVufDF8fHx8MTc2OTAwMjU5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            ],
            description: 'Affordable private room in a student-friendly neighborhood. Great value for money with all essential amenities included. Perfect for budget-conscious students.',
            bedrooms: 1,
            bathrooms: 1,
            size: '300 sq ft',
            availability: 'Available Now',
            amenities: ['WiFi Included', 'Basic Furniture', 'Shared Kitchen', 'Near Bus Stop', 'Utilities Included', 'Flexible Lease'],
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {apartments.map((apartment) => (
                    <div
                        key={apartment.id}
                        className="rounded-xl bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                    >
                        <div className="h-56 overflow-hidden">
                            <ImageWithFallback
                                src={apartment.image}
                                alt={apartment.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        <div className="p-6">
                            <h3
                                className="text-xl mb-3 font-playfair "
                            >
                                {apartment.title}
                            </h3>

                            <div className="space-y-2 mb-4">
                                <div className="flex items-center gap-2">
                                    <MapPin size={18} className='text-orange' />
                                    <span className="text-sm text-green">{apartment.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <DollarSign size={18} className='text-orange' />
                                    <span className="text-sm text-green">{apartment.priceRange}</span>
                                </div>
                            </div>
                            <Button
                                onClick={() => setSelectedApartment(apartment)}
                                customizeStyle={`bg-orange text-white w-full py-3 hover:opacity-90`}
                                buttonText={`View Details`} />

                        </div>
                    </div>
                ))}
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
