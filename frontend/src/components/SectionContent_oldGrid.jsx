/* eslint-disable react/prop-types */
import {Chip} from "@nextui-org/react";
import { FaItchIo } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import {Button} from "@nextui-org/react";
import "./SectionContent.css"

const GridRow = ({ children, backgroundImage }) => {
  const rowStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    leftMargin: '100px',
    fgridGap: '10px',
    height: `100vh`,  
    justifyContent: 'center', /* horizontal centering */
    alignItems: 'center', /* vertical centering */
    backgroundImage: `url(${backgroundImage}), linear-gradient(rgba(31, 31, 31, 0.048), rgba(26, 26, 26, 0.837))`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'overlay',

  };

  const dynamicBackgroundImage = {
    backgroundImage: `url(${backgroundImage}), linear-gradient(rgba(31, 31, 31, 0.048), rgba(26, 26, 26, 0.837))`
  };

  return (
    <div className="rowStyle" style={dynamicBackgroundImage}>
      {children}
    </div>
  );
};


const GridCol = ({children }) => {
  return (
    <div style={{ text_align: 'center', justify_content: "center", align_items: "center"}}>
      {children}
    </div>
  );
};

const SectionContent = () => {

  const handleButtonClick = () => {
    window.open('https://naminaziri.itch.io/lost-radiance', '_blank'); // Replace with your desired URL
  };

  const iframeStyle = {
    width: '85%', // Ensures the iframe takes the full width of its container
    height: '56vh', // You can adjust the height as needed
    border: 'none', // Optional: Removes border around iframe
  };

  return (
      <GridRow backgroundImage={"/img/white.jpg"}>
        <GridCol>
        <iframe
              style={iframeStyle}
              src="https://www.youtube.com/embed/dR0P4tOlGsU"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </GridCol>
        <GridCol>
          <h1>Lost Radiance</h1>
          <GridCol>
            <div className="flex gap-2">
              <Chip color="default">C++</Chip>
              <Chip color="default">Blueprint</Chip>
              <Chip color="default">Unreal Engine</Chip>
            </div> 
          </GridCol>
          <p>
         {"This game is created using Unreal Engine 5 for the Games Now Game Jam, where the theme 'missing' takes center stage. Dive into a cosmic odyssey where light has gone astray, and you find yourself as the new star amidst the void. As shadows and darkness compel other stars to assail you, your survival becomes crucial. Beware, for if you falter, the cosmos will plunge into an everlasting darkness. Navigate this celestial challenge, illuminate the universe, and stave off the impending abyss in this captivating adventure."}
          </p>

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
        </GridCol>
      </GridRow>
  );
};

export default SectionContent;