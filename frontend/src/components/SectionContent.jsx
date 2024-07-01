/* eslint-disable react/prop-types */
import {Chip} from "@nextui-org/react";
import { FaItchIo } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import {Button} from "@nextui-org/react";
import "./SectionContent.css"
import Grid from '@mui/material/Unstable_Grid2';
import ImageGalleryComponent from './ImageGallery'
import { useMediaQuery } from 'react-responsive';
import { Hidden } from "@mui/material";

const SectionContent = () => {

  const isXS = useMediaQuery({ query: '(max-width: 575px)' });

  const handleButtonClick = () => {
    window.open('https://naminaziri.itch.io/lost-radiance', '_blank'); // Replace with your desired URL
  };

  const backgroundImage = "/img/lostRadiance.jpg"
  
  const dynamicBackgroundImage = {
    backgroundImage: `url(${backgroundImage}), linear-gradient(rgba(31, 31, 31, 0.048), rgba(26, 26, 26, 0.837))`
  };

  return (
      <Grid className="rowStyle" columnSpacing={{ xs: 2, md: 5 }} rowSpacing={{xs: 1}} Spacing style={dynamicBackgroundImage} container display="flex" height='100vh' justifyContent="center" alignItems="center">
        <Grid container xs={10} sm={10} md={10} lg={10} xl={10}>
          <Grid className=" justify-center text-center w-full lg:w-1/2"  justifyContent="center" alignItems="top">
            
            <ImageGalleryComponent></ImageGalleryComponent>
          </Grid>
          <Grid container className="text-justify  w-full lg:w-1/2 text-sm sm:text-base">
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
          {"This game is created using Unreal Engine 5 for the Games Now Game Jam, where the theme 'missing' takes center stage. Dive into a cosmic odyssey where light has gone astray, and you find yourself as the new star amidst the void. As shadows and darkness compel other stars to assail you, your survival becomes crucial. Beware, for if you falter, the cosmos will plunge into an everlasting darkness. Navigate this celestial challenge, illuminate the universe, and stave off the impending abyss in this captivating adventure."}
            </p>
            </Grid>
            <Grid xs={12} >
            <div className="flex gap-2">
                <Button color="danger" variant="bordered" startContent={<FaItchIo />} onPress={handleButtonClick}>
                itch.io
                </Button>
                <Button color="default" variant="bordered" startContent={<FaGithub />} onPress={handleButtonClick}>
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