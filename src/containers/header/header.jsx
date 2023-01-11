import React from 'react'
import Dropdown from '../leftbody/dropdown';
import logo from '../../assets/weather.png';
import './header.css'

const header = ({setDropDownData}) => {
  return (
    <div className='headerbar'>
        <img src={logo} alt="weather"/>
        <h1>Weather Application</h1>
        <div className='dropdown'>
            <Dropdown 
            setDropDownData={setDropDownData}/> 
        </div>
    </div>
    
  )
}

export default header

