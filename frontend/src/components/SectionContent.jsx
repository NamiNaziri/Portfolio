/* eslint-disable react/prop-types */
import {Chip} from "@nextui-org/react";
import { FaItchIo } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import {Button} from "@nextui-org/react";
import Grid from '@mui/material/Unstable_Grid2';
import ImageGalleryComponent from './ImageGallery'
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import {
  Routes, Route, useLocation 
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
const SectionContent = () => {


  const [currentPrimary, setCurrentPrimary]=useState(0)
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    // Set the active route value when the route changes
    
    switch(location.pathname)
    {
      case '/':
        setCurrentPrimary(0);
        break;
      case '/cv':
        setCurrentPrimary(1);
        break;
      case '/contact':
        setCurrentPrimary(2);
        break;
    }
  }, [location]);

  const isXS = useMediaQuery({ query: '(max-width: 575px)' });

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      const newDimensions = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      setDimensions(newDimensions);
      newDimensions.height
      console.log(`Width changed to: ${newDimensions.width}px`);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleButtonClick = () => {
    window.open('https://naminaziri.itch.io/lost-radiance', '_blank'); // Replace with your desired URL
  };

  const backgroundImage = "/img/lostRadiance.jpg"
  
  const dynamicBackgroundImage = {
    backgroundImage: `url(${backgroundImage}), linear-gradient(rgba(31, 31, 31, 0.048), rgba(26, 26, 26, 0.837))`
  };

  return (
      
      <Grid className="rowStyle" columnSpacing={{ xs: 2, md: 5 }} paddingTop={{ xs: "5vh"}} rowSpacing={{xs: 0}}  style={dynamicBackgroundImage} container display="flex" height='100vh' marginBottom={0} justifyContent="center" alignItems="center">

        <Grid container xs={10} sm={10} md={10} lg={10} xl={10} >

          <Grid className=" justify-center text-center w-full lg:w-1/2"  justifyContent="center" alignItems="top">
            
            <ImageGalleryComponent></ImageGalleryComponent>
          </Grid>
          <Grid container className="text-justify  w-full lg:w-1/2 text-sm xl:text-base">
            <Grid xs={12}  >
            {!isXS && <h1>Lost Radiance</h1>}
            
            </Grid>
            <Grid  xs={12}>
              <Grid className={isXS? "flex justify-center flex gap-2": "flex gap-2"} marginTop={1}>
                <Chip color="default">C++</Chip>
                <Chip color="default">Blueprint</Chip>
                <Chip color="default">Unreal Engine</Chip>
              </Grid> 
            </Grid>
            <Grid xs={12} marginTop={2} marginBottom={isXS? 0 : 2}>
            <p >
          {"This game is created using Unreal Engine 5 for the Games Now Game Jam, where the theme 'missing' takes center stage. Dive into a cosmic odyssey where light has gone astray, and you find yourself as the new star amidst the void. As shadows and darkness compel other stars to assail you, your survival becomes crucial. Beware, for if you falter, the cosmos will plunge into an everlasting darkness. Navigate this celestial challenge, illuminate the universe, and stave"}
            </p>
            </Grid>
            <Grid xs={12} >
            <div className="flex gap-2">
                <Button color="danger" variant="bordered" startContent={<FaItchIo />} onPress={handleButtonClick}>
                itch.io
                </Button>
                <Button color="white" variant="bordered" startContent={<FaGithub />} onPress={handleButtonClick}>
                github
                </Button>
                <Button color="warning" variant="bordered" startContent={<IoGameController />} onPress={handleButtonClick}>
                more
                </Button>
                </div>

                
                </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
};

export default SectionContent;