import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush } from 'recharts';
import StateArray from '../header/header';
import { useState } from 'react';
import { useEffect } from "react";
import { ChartHook } from '../header/header';
import Header from "../header/header";



const data_s1 = [
  {
    time: '12:00',
    temperature: 13,

  },
  {
    time: '13:20',
    temperature: 14,


  },
  {
    time: '14:00',
    temperature: 15,

  },
  {
    time: '16:00',
    temperature: 13,

  },
  {
    time: '18:00',
    temperature: 10,


  },
  {
    time: '20:00',
    temperature: 8,


  },
  {
    time: '22:00',
    temperature: 5,

  },
  {
    time: '00:00',
    temperature: 0,

  },
]



const chart = () => {
  const HandleChart = () => {
    if (ChartHook.chartData === "sensor1") {
      console.log("sensor1")
    }
 

    
  return (
    <div className="chart" HandleChart>



      <LineChart HandleChart
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
        
        {/* <Line connectNulls stype="monotone" dataKey="temperature" stroke="#82ca9d" /> */}
        <Brush height={17} />
      </LineChart>
    </div>
  );
}
}

export default chart;   