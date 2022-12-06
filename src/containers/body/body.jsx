import React from 'react';
import './body.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush } from 'recharts';

const data = [
  {
    time: '12:00',
    Enschede: 13,
    Gronau: 13,
    Wierden: 10,
  },
  {
    time: '13:20',
    Enschede: 14,
    Gronau: null,
    Wierden: null,
  },
  {
    time: '14:00',
    Enschede: 15,
    Gronau: 14,
    Wierden: 13,
  },
  {
    time: '16:00',
    Enschede: 13,
    Gronau: 14,
    Wierden: 12,
  },
  {
    time: '18:00',
    Enschede: 10,
    Gronau: 10,
    Wierden: 9,
  },
  {
    time: '20:00',
    Enschede: 8,
    Gronau: 7,
    Wierden: 7,
  },
  {
    time: '22:00',
    Enschede: 5,
    Gronau: 5,
    Wierden: 0,
  },
  {
    time: '00:00',
    Enschede: 0,
    Gronau: 0,
    Wierden: -1,
  },
]

const body = () => {
  return (
    <div className='body'>
       <h1 id="one">You have selected the temperature graph for:</h1>
       <h1 id="one">All of three cities</h1>
        <div className='graphbody__container'>
        
            <LineChart
                width={1000}
                height={400}
                data={data}
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
                <Line  connectNulls stype="monotone" dataKey="Enschede" stroke="#82ca9d" />
                <Line connectNulls type="monotone" dataKey="Gronau" stroke="#ff0000" />
                <Line connectNulls type="monotone" dataKey="Wierden" stroke="#0000FF" />
                <Brush height={22} />
            </LineChart>
        
        </div>
    </div>
  )
}
export default body;