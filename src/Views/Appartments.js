import ApartmentHero from '../components/views/apartments/ApartmentHero';
import ApartmentGrid from '../components/views/apartments/ApartmentGrid';

export default function Appartments() {


    return (
        <div className='flex flex-col w-full gap-y-8 md:gap-y-20 pb-12 md:pb-28'>
            {/* Intro Section */}
            <ApartmentHero />

            {/* Apartments Grid */}
            <ApartmentGrid />
        </div>
    );
}
