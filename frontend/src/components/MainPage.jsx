/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import SectionContent from './SectionContent';
import { useEffect, useState } from 'react'

import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from './Scroll/es'
import { useMediaQuery } from 'react-responsive';
import FullScrollPage from './Scroll/FullScrollPage';
import CVPage from './CV/CVPage';
import {lostRadiance, spaceInvaders,skinning, sm_skinning, sm_animation, sm_ik, sm_simplify } from './ProjectList.jsx'
import SmallProjectsSection from './SmallProjectsSection.jsx';
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

const projects = [
  lostRadiance,
  spaceInvaders,
  
]

const mobileProjects =[
  skinning,
]

const smallProjects = [
  [sm_skinning, sm_animation],
  [sm_ik, sm_simplify]

]

function MainPage() {
  const isXS = useMediaQuery({ query: '(max-width: 575px)' });
  const [pagePercentage, setPagePercentage] = useState(5);
  const [currentNumber, setCurrentNumber] = useState(0);

  const handlePageOnChange = number => {
    setCurrentNumber(number)
    setPagePercentage(Math.max(((number)/3) * 100,5))
     console.log(`before ${number}`);
  };

//   useEffect(() => {
//     const handleScroll = () => {
//         // Your scroll handling logic here
//         console.log("hoooooo")
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Clean up the event listener on component unmount
//     return () => {
//         window.removeEventListener('scroll', handleScroll);
//     };
// }, []);

  return ( 
    <div>
    <FullScrollPage>
      {projects.map((project,index)=>(
        <FullpageSection key={index}>
          <SectionContent project={project}></SectionContent>
        </FullpageSection>
      ))}

      {isXS && mobileProjects.map((project,index)=>(
        <FullpageSection key={index + 50}>
          <SectionContent project={project}></SectionContent>
        </FullpageSection>
      ))}

    {!isXS && 
    
      smallProjects.map((projects,index)=>(
        <FullpageSection key={index + 100}>
        <SmallProjectsSection projects={projects} index={index}></SmallProjectsSection>
        </FullpageSection>
      ))
        
    }
        
    </FullScrollPage>
    
    </div>  
  )
}

export default MainPage