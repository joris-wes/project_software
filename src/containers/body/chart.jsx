import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush } from 'recharts';
import { useState } from 'react';
import { useEffect } from "react";
import { ChartHook } from '../header/header';
import Header from "../header/header";
import axios from 'axios';

const chart = (listofurls) => {
   const [data, setData] = useState([]);

  //  const getData = async () => {
  //   console.log(listofurls);
  //   // console.log("THIS IS LIST OF URLS", listofurls.listofurls)
  //   // setData([]);
  //   // console.log("THIS IS DATA",data);
  //   // for (let i=0; i<listofurls.listofurls.length;i++){
  //   //   console.log("THIS IS I",i)
  //   try {
  //     const data = await axios.get(listofurls.listofurls);
  //     setData(data.data)
  //     } catch (e){
  //     setData([]);
  //     }
      
  //   //}
   
   //} 
   
   useEffect(async ()=>
   {
    axios.get(listofurls.listOfUrls).then(response => {
      setData(response.data);
  }).catch(e=>{
      setData([]);
  })
  //   console.log(listofurls);
  //  // console.log("THIS IS LIST OF URLS", listofurls.listofurls)
  //  // setData([]);
  //  // console.log("THIS IS DATA",data);
  //  // for (let i=0; i<listofurls.listofurls.length;i++){
  //  //   console.log("THIS IS I",i)
  //  try {
  //    const data = await axios.get(listofurls.listofurls);
  //    setData(data.data)
  //    } catch (e){
  //     console.log(e);
  //    setData([]);
  //    }
    }, [listofurls]);

  return (
    <div className="chart">
      {data.length !== 0 ?  <ResponsiveContainer width={1200} height={"90%"}>
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
      </ResponsiveContainer>: null}
     
    </div>
  );
}


export default chart;   