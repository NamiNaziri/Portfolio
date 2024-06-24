import CVElement from "./CVElement"
import {Divider} from "@nextui-org/divider";
import Grid from '@mui/material/Unstable_Grid2';
import "./CVExperiment.css"
function CVExperiment() {
  return (
    <Grid className="rowStyle" columnSpacing={{ xs: 2, md: 5 }} container display="flex" height='100vh' justifyContent="center" alignItems="center">
       <Grid xs={12}  justifyContent="center" alignItems="top">
    <h1>Education</h1>
    </Grid>
    <Grid xs={12}  justifyContent="center" alignItems="top">
      <CVElement></CVElement>
      </Grid>
      <Grid xs={12}  justifyContent="center" alignItems="top">
      <CVElement></CVElement>
      </Grid>
    </Grid>
  )
}

export default CVExperiment