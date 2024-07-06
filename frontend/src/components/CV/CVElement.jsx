
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { useMediaQuery } from 'react-responsive';

import "./CVElement.css"


function CVElement() {  
  const isXS = useMediaQuery({ query: '(max-width: 575px)' });

  const description="• Designed and implemented NPC behaviors utilizing behavior trees, enabling dynamic interactions such as mantling using Nav Link Proxies and NPC following the player or predefined paths.\
• Developed a crowd system using the MassEntity framework, enhancing it by integrating an accessory and animation system for crowd agents.\
• Utilized smart objects to enhance crowd interactions, allowing crowds to identify, claim, and use objects such as benches.\
• Analyzed and addressed performance bottlenecks within the crowd systems, resulting in significant optimization and improved frame rates."
const description2= "Designed and implemented NPC behaviors utilizing behavior trees, enabling dynamic interactions such as mantling using Nav Link Proxies and NPC following the player or predefined paths.\
• Developed a crowd system using the Mas"
  return (
    <Card >
      <CardBody className="grid grid-cols-3 md:grid-cols-4">
        {/* <img

          radius="sm"
          src="img/aalto.png"

        /> */}
          <div className="image-container ">
        <img
            
            radius="sm"
            src="img/RR.jfif"
          />
          </div>
          <div className="flex flex-col col-span-2 md:col-span-3 ml-2    items-start">
              <div className="text-sm md:text-large font-bold mt-2  m-0">Game AI Programmer</div>
                <div className="text-xs md:text-base font-semibold text-foreground/90  m-0">RichardRendering · Freelance</div>
                <p className="text-xs text-foreground/80  m-0"  >Apr 2023 - Present</p>
                <p className="text-xs text-foreground/80 m-0 ">Remote</p>
                
                {!isXS && 
              <div className="text-justify"><Divider></Divider>  {description}</div>
              }
              </div>
              
      </CardBody >
      {isXS &&<CardBody className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="text-justify">{description}  </div>
        </CardBody>}
      {/* <Divider/>
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter> */}
    </Card>
  );
}

export default CVElement  