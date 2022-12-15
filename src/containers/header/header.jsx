import React from 'react'
import Dropdown from '../leftbody/dropdown';

import logo from '../../assets/weather.png';
import './header.css'


const StateArray =[];

const handleClick= (value) => {
    console.log(StateArray)
    StateArray.push(value);
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


const header = () => {
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
                onClick = {handleClick}
   
                
            /> 
        </div>
    </div>
    
  )
}

export default header
