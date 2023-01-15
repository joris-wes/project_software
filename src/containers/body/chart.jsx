import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush } from 'recharts';
import { useState } from 'react';
import { useEffect } from "react";
import { ChartHook } from '../header/header';
import Header from "../header/header";
import axios from 'axios';

const chart = (listofurls) => {
   const [data, setData] = useState([]);

   const getData = () => {
    console.log(listofurls.listofurls)
    setData([]);
    console.log(data);
    for (let i=0; i<listofurls.listofurls.length;i++){
      axios.get(listofurls.listofurls[0])
      .then((response)=>{
        console.log(response)
        const myData = response.data;
        setData(myData);
        
      })
      .catch((error)=>{
        console.log(error);
      }
      )
      
    }
   
   }
   
   useEffect(()=>getData(), [listofurls]);

  return (
    <div className="chart">
      <ResponsiveContainer width={1200} height={"90%"}>
      <LineChart 
        // width={1200}
        // height={450}
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
      </ResponsiveContainer>
    </div>
  );
}


export default chart;   