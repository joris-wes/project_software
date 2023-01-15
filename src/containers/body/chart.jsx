import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area  , ResponsiveContainer, AreaChart } from 'recharts';
import { useState } from 'react';
import { useEffect } from "react";
import { ChartHook } from '../header/header';
import Header from "../header/header";
import axios from 'axios';

const chart = ({url}) => {
  const [data, setData] = useState([]);
  const [sensorname, setSensorName] = useState("");

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
            {data.length !== 0 ? <ResponsiveContainer width={600} height={"95%"}>
                <AreaChart
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
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="time"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Area connectNulls type="monotone" dataKey="value" activeDot={{r:5}} stroke="#245BA7" fill="#7DACEE" />
                </AreaChart>
            </ResponsiveContainer> : <h1 style={{color:"black"}}>No Data</h1>}

        </div>
    );
}


export default chart;   