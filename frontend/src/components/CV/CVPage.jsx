
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
  
  {title:"Kumma Gallery Showcase – Lost Radiance (Games Now! Game Jam 2023)",
    text: () =>(
      <div>
         Developed Lost Radiance, which was selected by industry professionals to be showcased at Kumma Gallery.<br/>
         <strong>Judges:</strong> Essi Jukkala (<strong>Supercell</strong>), Eevi Korhonen (<strong>Housemarque</strong>), Tatu Laine (<strong>Futureplay</strong>), and Jussi Loukiainen (<strong>Platonic Partnership</strong>)<br/>
         <strong>Feedback:</strong> Recognized for its simple yet engaging mechanics and strong visual presentation.<br/>
         <a href="https://www.instagram.com/p/C7cN6jRtFZY/?img_index=1" target="_blank" rel="noopener noreferrer">More</a>
      </div>
    )
      
  }
  ,
  {title:"Unreal Engine Programming Challenge – Space Invaders",
    text: () =>(
      <div>
        <div>Space Invaders game selected as one of the top 3 entries. The code structure was reviewed by Chris Rock, Lead Gameplay Programmer at Neon Koi(PlayStation).</div>
        <a href="https://gamesjobfair.com/programming-challenges-unrealengine-unity" target="_blank" rel="noopener noreferrer">More</a>
      </div>
    )
  }
  ,
  {title:"Finland Scholarship for Master's Studies",
    text: () =>( <div>Awarded a merit-based scholarship covering full tuition fees and a €5000 grant for living expenses.</div>)
  }
  ,
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