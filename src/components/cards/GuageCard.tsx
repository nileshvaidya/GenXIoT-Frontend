import React, { useEffect, useState } from 'react'

import { Guage } from '../gauges/guage';
import '../../index.css'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
 
import type { CardProps } from "@material-tailwind/react";

interface GuageProps {
  value: number;
  minValue: number;
  maxValue: number;
  low: number;
  lowlow: number;
  high: number;
  highhigh: number;
  title: string;
}
const GuageCard = (props:GuageProps) => {
  const { value, minValue, maxValue, lowlow, low, high, highhigh,title  } = props;
  

  return (
   
      <div className='items-start justify-center'>
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-pink-purple-gradient rounded-2lx blur opacity-75
      group-hover:opacity-100 transition duration-1000 group-hover: duration-200"></div>
        <button className="relative w-72 py-2 px-7  bg-gray-900 rounded-2xl  leading-none" >
        <div className="items-center font-bold text-3xl text-center text-gray-400
        group-hover:text-gray-100 transition duration-200">{title}</div>
         <Guage className="mt-44" value={value}
        diameter={200}
        minValue={minValue}
        lowlowValue={lowlow}
        lowValue={low}
        highValue={high}
        highhighValue={highhigh}
        maxValue={maxValue}
        startAngle={90}
        endAngle={270}
        numTicks={11}
        tickColor={"#cccccc"}
        tickLength={10.0}
        //progressColor={"#002344"}
            needleColor={"#374151"} />
<div className=" py-2">
              <div className="font-bold text-xl mt-4 text-center text-gray-400
        group-hover:text-gray-100 transition duration-200">Value = {value}</div>
          <p className="text-gray-500 text-base text-start
  group-hover:text-gray-100 transition duration-200">
   Last Updated = Few minutes ago...
  </p>
</div>
<div className="px-6 pt-4 pb-2">
  <span className="inline-block bg-blue-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">View History</span>
 
</div>
</button>
        </div>   
        </div>  
           
  )
}


export default GuageCard
