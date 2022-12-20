import React from 'react'
import Dropdown from '../leftbody/dropdown';

import logo from '../../assets/weather.png';
import './header.css'
import {setText} from '../leftbody/dropdown';
import {useState} from 'react';


export function ChartHook(initvalue){
  const [chartData, setChartData] = useState(initvalue);
  return [chartData, setChartData];
}


const header = () => {
 // const StateArray =[];

const handleDDClick= (value) => {
    
    ChartHook.chartData = value;
    console.log(ChartHook.chartData)
    const recipeUrl = "http://localhost:3000/api/recipes"
    const PostBody = {
      sensor: value, 
    }
    const RequestMetadata ={
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(PostBody)
    }
    fetch(recipeUrl, PostBody, RequestMetadata)
    
}
  return (
    <div className='headerbar'>
        <img src={logo} alt="weather"/>
        <h1>Weather Application</h1>
        <div className='dropdown'>
          
            <Dropdown
                placeHolder="Select a city"
                options={[{"value": "sensor1", "label": "sensor1"}, {"value": "sensor2", "label": "sensor2"}, {"value": "sensor3", "label": "sensor3"}]}
                isSearchable={false}
                isMulti={false}
                onClick = {handleDDClick}
              // value={StateArray.push(chartData)}
                
              

                
                
            /> 
        </div>
    </div>
    
  )
}

export default header

