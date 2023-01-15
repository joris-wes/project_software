import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush } from 'recharts';
import { useState } from 'react';
import { useEffect } from "react";
import { ChartHook } from '../header/header';
import Header from "../header/header";
import axios from 'axios';

const chart = ({url}) => {
  const [data, setData] = useState([]);


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
        console.log("url", url);
    }, [url]);

    return (
        <div className="chart">
            {data.length !== 0 ? <ResponsiveContainer width={600} height={"60%"}>
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
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="time"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Brush height={17}/>
                    <Line connectNulls type="monotone" dataKey="value" stroke="#82ca9d"/>
                </LineChart>
            </ResponsiveContainer> : <h1 style={{color:"black"}}>No Data</h1>}

        </div>
    );
}


export default chart;   