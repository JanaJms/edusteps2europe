import React from 'react'
import HeroSection from '../components/views/home/HeroSection'
import WhyUs from '../components/views/home/WhyUs'
import DownloadGuide from '../components/views/home/DownloadGuide'
import JourneySection from '../components/views/home/JourneySection'
import SuccessSection from '../components/views/home/SuccessSection'
import BookCall from '../components/views/home/BookCall'

export default function Home() {
  return (
    <div className='flex flex-col w-full gap-y-8 md:gap-y-20 pb-12 md:pb-28'>
      <HeroSection />
      <WhyUs/>
      <DownloadGuide/>
      <JourneySection/>
      <SuccessSection/>
      {/* <BookCall/> */}
    </div>
  )
}
