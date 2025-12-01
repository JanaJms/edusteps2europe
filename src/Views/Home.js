import React from 'react'
import HeroSection from '../components/views/home/HeroSection'
import WhyUs from '../components/views/home/WhyUs'

export default function Home() {
  return (
    <div className='flex flex-col w-full'>
      <HeroSection />
      <WhyUs/>
    </div>
  )
}
