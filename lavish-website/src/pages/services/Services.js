import React from 'react';
import HomeSection from '../../components/HomeSection';
import Pricing from '../../components/Pricing';


import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

function Services() {
  return (
    <div>

      <HomeSection {...homeObjOne}/>
      <Pricing />
      <HomeSection {...homeObjThree}/>
      
    </div>
  )
}

export default Services