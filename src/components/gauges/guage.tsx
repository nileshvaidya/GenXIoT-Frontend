import 'react-app-polyfill/ie11';

import * as React from 'react';

import { useGauge } from 'use-gauge';


interface GuageProps {
  value: number;
  diameter: number;
  minValue: number;
  lowlowValue: number;
  lowValue: number;
  highValue: number;
  highhighValue: number;
  maxValue: number;
  startAngle: number;
  endAngle: number;
  numTicks: number;
  tickColor: string;
  tickLentgh: number;
  progressColor: string;
  needleColor: string;


}

export const Guage = (props: any) => {
 const { value,diameter,minValue, lowlowValue,lowValue,highValue,highhighValue, maxValue, startAngle, endAngle,numTicks , tickColor, tickLength,needleColor
  } = props 

  let progressColor = "#99a233";
  if (value < lowlowValue) { progressColor= '#571054' };
  if (value > lowlowValue && value < lowValue) progressColor= '#e8d55a';
  if (value > lowValue && value < highValue) progressColor= '#64c74e';
  if (value > highValue && value < highhighValue) progressColor= '#d15d2c';
  if (value > highhighValue) progressColor= '#800705';
  console.log('Value : ' + value + ', low : ' + lowValue + ', Progress Color : ' + progressColor);
  
  const {
    ticks,
    getTickProps,
    getLabelProps,
    valueToAngle,
    angleToValue,
    getArcProps,
    getNeedleProps,
    getSVGProps,
  } = useGauge({
    startAngle,
    endAngle,
    numTicks,
    diameter,
    domain: [minValue, maxValue],
  });

  const { tip, base, points } = getNeedleProps({
    value,
    baseRadius:12.0,
    tipRadius:2.0,
  });


  return (
    <div className="flex items-center justify-center">
      <svg {...getSVGProps()} className="max-w-full overflow-visible mt-8">
        <path
          {...getArcProps({
            offset:8,
            startAngle,
            endAngle,
          })}
          fill="none"
          className="stroke-gray-700"
          strokeWidth={24}
          // @ts-ignore
          strokeLinecap={"round"}
        />
        {value > minValue && (
          <path
            {...getArcProps({
              offset:8,
              startAngle,
              endAngle: valueToAngle(value),
            })}
            fill="none"
            stroke={progressColor}
            strokeWidth={24}
            // @ts-ignore
            strokeLinecap={"round"}
          />
        )}
        <g id="ticks">
          {ticks.map((angle: any) => {
            return (
              <React.Fragment key={`tick-group-${angle}`}>
                <line
                  stroke={tickColor}
                  {...getTickProps({ angle, length: tickLength })}
                />
                <text
                  className="text-sm fill-gray-500 font-medium"
                  {...getLabelProps({ angle, offset: 20 })}
                >
                  {angleToValue(angle)}
                </text>
              </React.Fragment>
            );
          })}
        </g>
        <g id="needle">
          <circle className="fill-gray-300" {...base} r={24} />
          <circle fill={needleColor} {...base} />
          <circle fill={needleColor} {...tip} />
          <polyline fill={needleColor} points={points} />
          <circle className="fill-white" {...base} r={4} />
        </g>
      </svg>
    </div>
  );
};

