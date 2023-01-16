/*
  * This file contains the header component which is the top bar of the application 
  * which contains the logo and the dropdown component 
*/
import React from 'react'
import Dropdown from '../dropdown/dropdown';
import logo from '../../assets/weather.png';
import './header.css'

const header = ({ setDropDownData }) => {
  return (
    <div className='headerbar'>
      <img src={logo} alt="weather" />
      <h1>Weather Application</h1>
      <Dropdown setDropDownData={setDropDownData} />
    </div>

  )
}

export default header

