import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush } from 'recharts';
import { useState } from 'react';
import { useEffect } from "react";
import { ChartHook } from '../header/header';
import Header from "../header/header";
import axios from 'axios';

const chart = ({listofurls}) => {
   const [data, setData] = useState([]);

   let listofURLS = []

   const getData = () => {
    axios.get({listofurls})
    .then((response)=>{
      console.log(response)
      const myData = response.data;
      setData(myData);
      console.log(myData);
    });
   }
   
   useEffect(()=>getData(), []);

  return (
    <div className="chart">
      <LineChart 
        width={600}
        height={450}
        data={data}
        margin={{
          top: 0,
          right: 30,
          left: 20,
          bottom: 20
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time"/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Brush height={17} />
        <Line connectNulls type="monotone" dataKey="value" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}


export default chart;   