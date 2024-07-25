/* eslint-disable react/prop-types */

import {Card,  CardBody,  Divider} from "@nextui-org/react";
import { useMediaQuery } from 'react-responsive';
import SmallProject from "./SmallProject";
import Grid from '@mui/material/Unstable_Grid2';

function SmallProjectsSection({element}) {  
  const isXS = useMediaQuery({ query: '(max-width: 575px)' });

  return (
    <Grid className="rowStyle" columnSpacing={{ xs: 2, md: 5 }} paddingTop={{ xs: "5vh"}} marginTop={{ xs: "1.8vh"}} rowSpacing={{xs: 0}} container display="flex" height='100vh' marginBottom={0} justifyContent="center" alignItems="center">

    <div className="grid grid-cols-3 gap-4 m-10 mx-10 md:mx-20 place-items-center">
      
      <SmallProject></SmallProject>
      <SmallProject></SmallProject>
      <SmallProject></SmallProject>
    </div>
    </Grid>
  );
}

export default SmallProjectsSection  