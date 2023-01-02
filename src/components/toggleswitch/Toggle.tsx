import React, {useState} from 'react'
import '../../index.css';


interface ToggleProps {
  value: boolean;
}
const Toggle = (props: ToggleProps) => {
  const { value } = props;
  const [toggle, setToggle] = useState(!value);
  // setToggle(value);
  const toggleClass = "transform translate-x-32";
  return (
    <div className="flex flex-col justify-center items-center ">
    {/*   Switch Container */}

    <div
        className="md:w-56 md:h-24 w-60 h-24 flex items-center bg-gray-400 rounded-full cursor-pointer"
        style={{backgroundColor: toggle? 'red' : 'green'}}
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      {/* Switch */}
      <div
        className={
          "bg-neon md:w-24 md:h-24 h-24 w-72 rounded-full shadow-md transform duration-300 ease-in-out" +
          (toggle ? null : toggleClass)
        }
      ></div>
      </div>
      </div>
  )
}

export default Toggle
