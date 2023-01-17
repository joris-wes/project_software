/*
  * This file is a Chart component file
  * It is used to display the graph for the selected sensors
  * It uses the recharts library to display the graph
  * It uses the axios library to get the data from the server
  * It uses the useEffect hook to get the data from the server
  * It uses the useState hook to store the data from the server
*/

import React from "react";
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, ResponsiveContainer, AreaChart } from 'recharts';
import { useState, useEffect } from 'react';
import axios from 'axios';

const chart = ({ url }) => {

  const [data, setData] = useState([]);

  // Get the data from the server
  const getData = async () => {

    try {

      const data = await axios.get(url);
      setData(data.data)

    } catch (e) {

      setData([]);
    }
  }

  useEffect(() => {

    getData();

  }, [url]);

  return (
    <div className="chart">
      {
        /* 
           This is the chart component importet from ReCharts library. It is renders only if data is not null.
           ResponsiveContainer allows chart to render one by one until all of the graphs from selected sensors are displayed
         */
      }
      <h2>{url.split("/")[3]}</h2>
      {data.length !== 0 ? <ResponsiveContainer width={600} height={"95%"}>
        <AreaChart
          data={data}
          margin={{
            top: 0,
            right: 30,
            left: 20,
            bottom: 20
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area connectNulls type="monotone" dataKey="value" activeDot={{ r: 5 }} stroke="#245BA7" fill="#7DACEE" />
        </AreaChart>
      </ResponsiveContainer> : <h2 style={{ color: "black" }}>Nothing to display </h2>}

    </div>
  );
}


export default chart;   