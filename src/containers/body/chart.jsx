import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush } from 'recharts';
import StateArray from '../header/header';
import { useState } from 'react';
import { useEffect } from "react";
import { ChartHook } from '../header/header';
import Header from "../header/header";
import axios from 'axios';

const data_s1 = 
  [
    {
      "id": "02e21c74833e99d48191df8ffc0000e0",
      "key": "02e21c74833e99d48191df8ffc0000e0",
      "value": {
        "rev": "1-555a48be5fd970c74d3e8715130c1967"
      },
      "doc": {
        "_id": "02e21c74833e99d48191df8ffc0000e0",
        "_rev": "1-555a48be5fd970c74d3e8715130c1967",
        "recieved_at": "",
        "end_device_ids": {
          "device_id": "py-wierden"
        },
        "uplink_message": {
          "decoded_payload": {
            "light": 0,
            "pressure": 1007.5,
            "temperature": 23.7
          },
          "Settings": {
            "Data_rate": {
              "Bandwidth": 0,
              "Spreading_factor": 0
            },
            "Frequency": "868500000",
            "Timestamp": 348409555,
            "Time": "2022-12-21T22:37:54.751185894Z"
          },
          "rx_metadata": [
            {
              "channel_rssi": -79,
              "gateway_ids": {
                "eui": "58A0CBFFFE8005DA",
                "gateway_id": "slot-wierden"
              },
              "location": {
                "altitude": 10,
                "latitude": 52.36891310514845,
                "longitude": 6.602898538112641,
                "source": "SOURCE_REGISTRY"
              },
              "received_at": "2022-12-21T22:37:54.767894353Z",
              "rssi": -79,
              "snr": 7.5,
              "time": "2022-12-21T22:37:54.751185894Z",
              "timestamp": 348409555,
              "uplink_token": "ChoKGAoMc2xvdC13aWVyZGVuEghYoMv//oAF2hDTnZGmARoMCMKVjp0GENKLhYADILjQz/aRgQM="
            }
          ],
          "Received_at": "2022-12-21T22:37:54.806688139Z",
          "Consumed_airtime": "0.051456s"
        }
      }
    },
    {
      "id": "02e21c74833e99d48191df8ffc0003e0",
      "key": "02e21c74833e99d48191df8ffc0100e0",
      "value": {
        "rev": "1-555a48be5fd970c74d3e8714130c1967"
      },
      "doc": {
        "_id": "02e21c74833e99d48191df8fff0000e0",
        "_rev": "1-555a48be5fd970c74d3e8715130c1967",
        "recieved_at": "",
        "end_device_ids": {
          "device_id": "py-gronau"
        },
        "uplink_message": {
          "decoded_payload": {
            "light": 1,
            "pressure": 1008.5,
            "temperature": 20.7
          },
          "Settings": {
            "Data_rate": {
              "Bandwidth": 0,
              "Spreading_factor": 0
            },
            "Frequency": "868500000",
            "Timestamp": 348409555,
            "Time": "2022-12-21T23:37:54.751185894Z"
          },
          "rx_metadata": [
            {
              "channel_rssi": -79,
              "gateway_ids": {
                "eui": "58A0CBFFFE8005DA",
                "gateway_id": "slot-wierden"
              },
              "location": {
                "altitude": 10,
                "latitude": 52.36891310514845,
                "longitude": 6.602898538112641,
                "source": "SOURCE_REGISTRY"
              },
              "received_at": "2022-12-21T22:37:54.767894353Z",
              "rssi": -79,
              "snr": 7.5,
              "time": "2022-12-21T22:37:54.751185894Z",
              "timestamp": 348409555,
              "uplink_token": "ChoKGAoMc2xvdC13aWVyZGVuEghYoMv//oAF2hDTnZGmARoMCMKVjp0GENKLhYADILjQz/aRgQM="
            }
          ],
          "Received_at": "2022-12-21T22:37:54.806688139Z",
          "Consumed_airtime": "0.051456s"
        }
      }
    }
  ]

const data1 = [
  {
    temperature: 23.5,
    humidity: 60,
    pressure: 1000,
    time: "2022-12-21T22:37:54.751185894Z"
  },
  {
    temperature: 20.5,
    humidity: 60,
    pressure: 1000, 
    time: "2022-12-21T23:37:54.751185894Z"
  }
]

const chart = ({dropDownValue}) => {

   const [chartData, setChartData] = useState('');

   const getData = () => {
    axios.get("https://sensor_data") // test server
    .then((response)=>{
      console.log(response)
      const myData = response.data;
      const newArr = []
      for (let i=0; i<myData.length;i++){
       let val = myData[i];
       newArr.push({val});
      }
      setChartData(newArr);
      console.log(newArr);
    });
  }

   useEffect(()=>getData(), []);

  return (
    <div className="chart">
      <LineChart 
        width={500}
        height={400}
        data={data1}
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