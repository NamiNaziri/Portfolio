/* eslint-disable react/prop-types */

import {Chip, Card,  CardBody,  CardHeader, Divider} from "@nextui-org/react";
import { useMediaQuery } from 'react-responsive';
import "./SmallProject.css"
import CustomDevider from "./CV/CustomDevider";


const Experience =[
  {
    description: "Designed and implemented NPC behaviors utilizing behavior trees, enabling dynamic interactions such as mantling using Nav Link Proxies and NPC following the player or predefined paths.\
• Developed a crowd system using the Mas",
    image: "img/RR.jfif",
    title1:"Game AI Programmer",
    title2:"RichardRendering · Freelance",
    date: "Apr 2023 - Present",
    Location: "Remote"


  }
]

const tags = ['c++', 'OpenGL']

function SmallProject({element}) {  
  const isXS = useMediaQuery({ query: '(max-width: 575px)' });

  const description="• Designed and implemented NPC behaviors utilizing behavior trees, enabling dynamic interactions such as mantling using Nav Link Proxies and NPC following the player or predefined paths.\
• Developed a crowd system using the MassEntity framework, enhancing it by integrating an accessory and animation system for crowd agents.\
• Utilized smart objects to enhance crowd interactions, allowing crowds to identify, claim, and use objects such as benches.\
• Analyzed and addressed performance bottlenecks within the crowd systems, resulting in significant optimization and improved frame rates."
const description2= "Designed and implemented NPC behaviors utilizing behavior trees, enabling dynamic interactions such as mantling using Nav Link Proxies and NPC following the player or predefined paths.\
• Developed a crowd system using the Mas"
  return (
    <div className="samll-project-container">
    <Card >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
        <h4 className="font-bold text-large">Dual Quaternion Skinning</h4>
        <div className="flex gap-2">
        {tags.map((tag,index)=>(<Chip key={index} color="default">{tag}</Chip>))}
        </div>
      </CardHeader>
      <CardBody className="flex items-center">
      <div className="project-image-container">
        <img
            radius="sm"
            src="img/DQS.gif"
          />
          </div>
      </CardBody >
      <CardBody className="items-center gap-0">
        <div className="text-justify">Implementation of Dual Quaternion Skinning (DQS) to address candy wrapping issue with other skinning techniques like Linear Blend Skinning. </div>
        </CardBody>

    </Card>
    </div>
  );
}

export default SmallProject  