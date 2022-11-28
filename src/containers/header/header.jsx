import React from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/weather.png';
import './header.css'

const header = () => {
  return (
    <div className='headerbar'>
        <div className='headerbar-logo'>
            <img src={logo} alt="weather"/>
            <h1>Weather Application</h1>
        </div>
    </div>
    
  )
}

export default header
