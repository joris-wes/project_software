import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush } from 'recharts';
import StateArray from '../header/header';
import { useState } from 'react';
import { useEffect } from "react";
import { ChartHook } from '../header/header';
import Header from "../header/header";



const data_s1 = [
 {"device_id":"py-saxion"},
 {"light":0,"pressure":1001.5,"temperature":21.2},
 {"light":0,"pressure":1001.5,"temperature":21.1}
]



const chart = ({dropDownValue}) => {
   const [chartData, setChartData] = useState('');

   useEffect(()=>{
    if(dropDownValue){
      setChartData(data_s1)
    }
   }, [dropDownValue])

    
  return (
    <div className="chart">



      <LineChart 
        
        width={500}
        height={400}
        data={data_s1}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        
        <Line connectNulls stype="monotone" dataKey="temperature" stroke="#82ca9d" />
        <Brush height={17} />
      </LineChart>
    </div>
  );
}


export default chart;   