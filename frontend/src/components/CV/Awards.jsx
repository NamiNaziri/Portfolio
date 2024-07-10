/* eslint-disable react/prop-types */
import { FaAward } from "react-icons/fa";

function Awards({AwardsText}) {

  return (
    <>
      <h3 >Awards</h3>
      <ul className="m-0 pl-1">
        {AwardsText.map((text,index) => (
          <li key={index} className="flex items-center gap-2"><FaAward></FaAward>{text}</li>
          ))}
      <li className="flex items-center gap-2"><FaAward></FaAward>{AwardsText}</li>
      </ul>
    </>
  )
}

export default Awards