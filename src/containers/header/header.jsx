import React from 'react'
import Dropdown from '../leftbody/dropdown';

import logo from '../../assets/weather.png';
import './header.css'
import {setText} from '../leftbody/dropdown';
import {useState} from 'react';




const header = ({setDropDownData}) => {


  return (
    <div className='headerbar'>
        <img src={logo} alt="weather"/>
        <h1>Weather Application</h1>
        <div className='dropdown'>
          
            <Dropdown 
            setDropDownData={setDropDownData}
                options={
                  [
                    {value: 'sensor1', id: 1},
                    {value: 'sensor2', id: 2},
                    {value:'sensor3',id:3}
                  ]}
              // value={StateArray.push(chartData)}
                
              

                
                
            /> 
        </div>
    </div>
    
  )
}

export default header

