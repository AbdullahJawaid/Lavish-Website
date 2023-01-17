import React from 'react'
import HomeSection from '../../components/HomeSection'
import Pricing from '../../components/Pricing'

import { homeObjOne,homeObjThree,homeObjFour } from './Data'



function Home() {
  return (
    <>
    <HomeSection {...homeObjOne}/>
    <HomeSection {...homeObjThree}/>
    <HomeSection {...homeObjFour}/>
    <Pricing/>
    
 
    </>
  )
}

export default Home