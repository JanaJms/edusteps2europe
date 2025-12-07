import React from 'react'
import HeroSection from '../components/views/home/HeroSection'
import WhyUs from '../components/views/home/WhyUs'
import DownloadGuide from '../components/views/home/DownloadGuide'

export default function Home() {
  return (
    <div className='flex flex-col w-full'>
      <HeroSection />
      <WhyUs/>
      <DownloadGuide/>
    </div>
  )
}
