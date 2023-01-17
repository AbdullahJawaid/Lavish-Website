import React from 'react';
import HomeSection from '../../components/HomeSection';

import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';


function About() {
  return (
    <div>
     
      <HomeSection {...homeObjFour} />
      <HomeSection {...homeObjOne} />
    </div>
  )
}

export default About