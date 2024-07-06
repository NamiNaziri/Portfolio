
import CVExperiment from './CVExperiment'
import Grid from '@mui/material/Unstable_Grid2';
import "./CVPage.css"
function CVPage() {
  return (

    <Grid className="rowStyle" rowSpacing={{xs: 0}} container  marginBottom={0} justifyContent="center" alignItems="center">

        <Grid container xs={10} sm={10} md={10} lg={10} xl={10} >

          <Grid className=" justify-center text-center w-full"  justifyContent="center" alignItems="top">
          <CVExperiment></CVExperiment>
          <CVExperiment></CVExperiment>
          </Grid>
          </Grid>
          </Grid>

  )
}

export default CVPage