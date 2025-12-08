import React from 'react'
import HeroSection from '../components/views/home/HeroSection'
import WhyUs from '../components/views/home/WhyUs'
import DownloadGuide from '../components/views/home/DownloadGuide'
import JourneySection from '../components/views/home/JourneySection'

export default function Home() {
  return (
    <div className='flex flex-col w-full gap-y-8 md:gap-y-20'>
      <HeroSection />
      <WhyUs/>
      <DownloadGuide/>
      <JourneySection/>
    </div>
  )
}
