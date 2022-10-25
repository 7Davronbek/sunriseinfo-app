import React from 'react'
import HomeSecond from './HomeSecond/HomeSecond'
import HomeAbout from './HomeAbout/HomeAbout'
import HomeUslugi from './HomeUslugi/HomeUslugi'
import HomeWork from './HomeOurWork/HomeWork'

export default function HomePage() {
  return (
   <>
    <HomeAbout />
    <HomeSecond/>
    <HomeUslugi />
    <HomeWork />
   </>
  )
}
