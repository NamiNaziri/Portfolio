/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import SectionContent from './SectionContent';
import { useEffect, useState } from 'react'

import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage'

import FullScrollPage from './Scroll/FullScrollPage';
import CVPage from './CV/CVPage';
const VerticalNavDots = ({ maxNumber, currentNumber }) => {
  const dots = [];

  for (let i = 0; i < maxNumber; i++) {
    dots.push(
      <div
        key={i}
        className={`dot ${i === currentNumber ? 'active' : ''}`}
      ></div>
    );
  }

  return <div className="vertical-nav-dots">{dots}</div>;
};

function MainPage() {

  const [pagePercentage, setPagePercentage] = useState(5);
  const [currentNumber, setCurrentNumber] = useState(0);

  const handlePageOnChange = number => {
    setCurrentNumber(number)
    setPagePercentage(Math.max(((number)/3) * 100,5))
     console.log(`before ${number}`);
  };

  

  return ( 
    <div>
    <FullScrollPage>
      <FullpageSection>
      <SectionContent></SectionContent>
      </FullpageSection>
      <FullpageSection>
      <SectionContent></SectionContent>
      </FullpageSection>
      <FullpageSection>
      <SectionContent></SectionContent>
      </FullpageSection>
      <FullpageSection>
      <SectionContent></SectionContent>
      </FullpageSection>
      <FullpageSection>
      <SectionContent></SectionContent>
      </FullpageSection>
      
    </FullScrollPage>
    
    </div>  
  )
}

export default MainPage