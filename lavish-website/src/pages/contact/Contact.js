import React from 'react';
import HomeSection from '../../components/HomeSection';

import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

export default function Contact() {
  return (
    <div>
      
      <HomeSection {...homeObjTwo}/>
      <HomeSection {...homeObjThree}/>
    </div>
  )
}
