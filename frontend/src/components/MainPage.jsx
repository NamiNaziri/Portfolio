/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import SectionContent from './SectionContent';
import ReactPageScroller from 'react-page-scroller';
import {Progress} from "@nextui-org/react";
import { useEffect, useState } from 'react'
import CustomScroller from './CustomScroller';
import "./MainPage.css";
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
    <CustomScroller>
      <SectionContent></SectionContent>
      <SectionContent></SectionContent>

      <SectionContent></SectionContent>
      <SectionContent></SectionContent>
      <SectionContent></SectionContent>
      <SectionContent></SectionContent>
    </CustomScroller>
    
  )
}

export default MainPage