import React from 'react'
import Dropdown from '../leftbody/dropdown';

import logo from '../../assets/weather.png';
import './header.css'

const header = () => {
  return (
    <div className='headerbar'>
        <img src={logo} alt="weather"/>
        <h1>Weather Application</h1>
        <div className='dropdown'>
            <Dropdown
                placeHolder="Select a city"
                options={[{"value": "Enschede", "label": "Enschede"}, {"value": "Gronau", "label": "Gronau"}, {"value": "Wierden", "label": "Wierden"}]}
                isSearchable={true}
                isMulti={false}
                onChange={(value) => console.log(value)}
            /> 
        </div>
    </div>
    
  )
}

export default header
