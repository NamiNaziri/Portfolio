import CVElement from "./CVElement"
import Grid from '@mui/material/Unstable_Grid2';
import "./CVExperiment.css"
function CVExperiment() {

  // const sectionStyle = {
  //   height: '100vh',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   fontSize: '2rem',
  // };
  //<Grid className="rowStyle" columnSpacing={{ xs: 2, md: 5 }} container display="flex" height='100vh' justifyContent="center" alignItems="center">
  return (
    <Grid className="object-contain  flex flex-col  items-center space-x-2 md:space-x-5 space-y-1" >
      <Grid className="object-contain justify-center text-center w-full h-full">
        <h1>Education</h1>
      </Grid>
      <Grid  className="object-contain justify-center   w-full h-full" >
        <CVElement></CVElement>
      </Grid>
      <Grid  className="object-contain justify-center  w-full h-full" >
        <CVElement></CVElement>
      </Grid>
    </Grid>
  )
}

export default CVExperiment