
import CVExperience from './CVExperience.jsx'
import CVEducation from './CVEducation.jsx'
import Grid from '@mui/material/Unstable_Grid2';
import Summary from './Summary.jsx'
import  {Divider} from "@nextui-org/react";
import Awards from './Awards.jsx';
import "./CVPage.css"
import PersonalInformation from './PersonalInformation.jsx';
import CustomDevider from './CustomDevider.jsx';
import Skills from './Skills.jsx';
import { useEffect } from 'react';


const AwardsText=[
  "hiii",
  "hii2",
  "hiii3"
]

function CVPage() {
      const SummaryText = "I am a first‑year computer science master’s student at Aalto University. I’m proficient in Unreal Engine and enjoy exploring new concepts related\
to game development, particularly where gameplay, AI, and animation intersect."

  useEffect(() => {
    // Scroll to the top of the page when MyComponent mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this effect runs only on mount

  return (

    <Grid className="rowStyle" rowSpacing={{xs: 0}} container marginTop={10} marginBottom={0} justifyContent="center" alignItems="center">

      <Grid container xs={10} sm={10} md={10} lg={10} xl={10} >

        <Grid className=" text-justify md:text-justify w-full"  justifyContent="center" alignItems="top">
          <PersonalInformation></PersonalInformation>

          <CustomDevider></CustomDevider>
          <Summary SummaryText={SummaryText}></Summary>

          <CustomDevider></CustomDevider>
          <Awards AwardsText={AwardsText}></Awards>

          <CustomDevider></CustomDevider>
          <Skills></Skills>

          <CustomDevider></CustomDevider>
          <CVExperience></CVExperience>

          <Divider></Divider>
          <CVEducation></CVEducation>


        </Grid>
      </Grid>
    </Grid>

  )
}

export default CVPage