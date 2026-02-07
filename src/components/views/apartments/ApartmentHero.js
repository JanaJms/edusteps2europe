import React from 'react'
import { ArrowRight, Info } from 'lucide-react'

export default function ApartmentHero() {
    return (
        <section className="relative min-h-[90vh] w-full overflow-hidden bg-reddish-orange flex items-center pt-28">
            {/* Background Decorative Element */}
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-whishkey-orange/10 rounded-full blur-3xl -z-0" />

            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content Side */}
                    <div className="flex flex-col items-start gap-8 max-w-2xl">
                        <div className="flex flex-col gap-4">
                            <span className="text-orange font-semibold tracking-widest uppercase text-sm">
                                Premium Student Living
                            </span>
                            <h1 className="text-black-metal text-3xl md:text-5xl font-bold font-playfair leading-[1.1]">
                                Your perfect home <br />
                                <span className="text-orange italic">away from home.</span>
                            </h1>
                            <p className="text-black-metal/70 text-base md:text-lg  leading-relaxed max-w-lg">
                                Discover hand-picked student apartments across Europe, designed for comfort, study, and community.
                            </p>
                        </div>

                        {/* Integrated Notice Box */}
                        <div className="flex gap-4 bg-white/60 backdrop-blur-md border border-whishkey-orange/30 p-5 rounded-2xl shadow-sm mt-4">
                            <div className="bg-orange/10 p-2 h-fit rounded-lg">
                                <Info className="text-orange" size={24} />
                            </div>
                            <div className="text-sm text-black-metal/80 leading-relaxed">
                                <p>
                                    <strong className="text-black-metal block mb-1">Important Notice</strong>
                                    Rentals are facilitated through <span className="text-orange font-medium">EduSteps2Europe</span>.
                                    Contact us to arrange viewings.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Side */}
                    <div className="relative hidden lg:block">
                        {/* Decorative Frames */}
                        <div className="absolute -top-6 -left-6 w-full h-full border-2 border-whishkey-orange rounded-3xl -z-10 translate-x-4 translate-y-4" />
                        <div className="relative overflow-hidden rounded-3xl bg-grey-goose h-full w-full shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1000" // Replace with your image
                                alt="Modern Apartment Interior"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}