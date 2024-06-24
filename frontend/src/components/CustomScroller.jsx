/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import SectionContent from './SectionContent';
import ReactPageScroller from 'react-page-scroller';
import {Progress} from "@nextui-org/react";
import { useEffect, useState } from 'react'
import "./CustomScroller.css";
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

const CustomScroller =({children}) => {
  console.log(children.length)
  const childCount = children.length
  const [pagePercentage, setPagePercentage] = useState(5);
  const [currentNumber, setCurrentNumber] = useState(0);

  const handlePageOnChange = number => {
    setCurrentNumber(number)
    setPagePercentage(Math.max(((number)/(childCount-1)) * 100,5))
     console.log(`before ${number}`);
  };

  

  return ( 
    <>
      <VerticalNavDots maxNumber={childCount} currentNumber={currentNumber} />
      <ReactPageScroller renderAllPagesOnFirstRender={true} containerHeight="92.3vh" animationTimer={400} pageOnChange={handlePageOnChange}>
          {children}
      </ReactPageScroller>
          
      <div className="flex flex-col gap-6 w-full">
        <Progress size="sm"  value={pagePercentage} />
      </div>
      </>
    
  )
}

export default CustomScroller