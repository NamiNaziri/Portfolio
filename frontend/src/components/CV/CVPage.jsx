
import CVExperiment from './CVExperiment'
import Grid from '@mui/material/Unstable_Grid2';
import Summary from './Summary.jsx'
import  {Divider} from "@nextui-org/react";

import "./CVPage.css"
import PersonalInformation from './PersonalInformation.jsx';
import CustomDevider from './CustomDevider.jsx';

function CVPage() {
      const SummaryText = "I am a first‑year computer science master’s student at Aalto University. I’m proficient in Unreal Engine and enjoy exploring new concepts related\
to game development, particularly where gameplay, AI, and animation intersect."

  return (

    <Grid className="rowStyle" rowSpacing={{xs: 0}} container marginTop={10} marginBottom={0} justifyContent="center" alignItems="center">

      <Grid container xs={10} sm={10} md={10} lg={10} xl={10} >

        <Grid className=" text-justify md:text-justify w-full"  justifyContent="center" alignItems="top">
          <PersonalInformation></PersonalInformation>
          <CustomDevider></CustomDevider>
          
          <Summary SummaryText={SummaryText}></Summary>
          <CustomDevider></CustomDevider>
          <CVExperiment></CVExperiment>
          <CVExperiment></CVExperiment>
        </Grid>
      </Grid>
    </Grid>

  )
}

export default CVPage