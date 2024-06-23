/* eslint-disable no-unused-vars */
import SectionContent from './SectionContent';
import ReactPageScroller from 'react-page-scroller';
import {Progress} from "@nextui-org/react";
import { useEffect, useState } from 'react'

function MainPage() {

  const [pagePercentage, setPagePercentage] = useState(0);

  const handlePageOnChange = number => {
    setPagePercentage(((number)/3) * 100)
    //console.log(`before ${number}`);
  };

  

  return ( 
    <>
    <ReactPageScroller containerHeight="92.3vh" animationTimer={400} pageOnChange={handlePageOnChange}>

      <SectionContent></SectionContent>
      <SectionContent></SectionContent>

      <SectionContent></SectionContent>
      <SectionContent></SectionContent>
        </ReactPageScroller>
        
        <div className="flex flex-col gap-6 w-full">
      <Progress size="sm"  value={pagePercentage} />
      </div>
        </>
    
  )
}

export default MainPage