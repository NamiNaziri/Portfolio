
import CVExperiment from './CVExperiment'
import Grid from '@mui/material/Unstable_Grid2';
import "./CVPage.css"
function CVPage() {
  return (

    <Grid className="rowStyle" columnSpacing={{ xs: 2, md: 5 }} rowSpacing={{xs: 0}} Spacing container display="flex" height='100vh' marginBottom={0} justifyContent="center" alignItems="center">

        <Grid container xs={10} sm={10} md={10} lg={10} xl={10} >

          <Grid className=" justify-center text-center w-full lg:w-1/2"  justifyContent="center" alignItems="top">
          <CVExperiment></CVExperiment>
          <CVExperiment></CVExperiment>
          </Grid>
          </Grid>
          </Grid>

  )
}

export default CVPage