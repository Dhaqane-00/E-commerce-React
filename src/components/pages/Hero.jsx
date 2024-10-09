import React from 'react'
import Header from '../sections/Hero/Title/Header'
import { Nav } from '../sections/Hero/Nav/HeaderNavigations'
import SidebarMenu from '../sections/Hero/HeroHome/SidebarMenu/SidebarMenu'
import IPhonePromotion from '../sections/Hero/HeroHome/Promotion/IPhonePromotion'

function Hero() {
  return (
    <div className='h-[90vh]'>
      <div className='flex gap-[100px] px-[150px] mt-6'>
        <SidebarMenu />
        <IPhonePromotion />
      </div>
    </div>
  )
}

export default Hero