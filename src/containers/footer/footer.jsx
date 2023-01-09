import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Sector } from "recharts";
import './footer.css';
import axios from 'axios';

const footer = ({setxScope, setyScope}) => {
    
 const [scale, setScale] = useState([]);
 const getData = () => {
    axios.get("https://sensor_data") // test server
    .then((response)=>{
      console.log(response)
      const myData = response.data;
      const newArr = []
      for (let i=0; i<myData.length;i++){
        let id = i;
        let value = myData[i]; 
        newArr.push({value, id})
      }
      setScale(newArr);
      console.log(newArr);
    });
  }

useEffect(()=>getData(), []);
  
    return (
        <div className='footer'>
            <div class="dropup">
                <button class="dropbtn">Select an option</button>
                <div class="dropup-content">
                    <a href="#" onClick={(e) => {setyScope("Temperature")}}>Temperature</a>
                    <a href="#" onClick={(e) => {setyScope("Humidity")}}>Humidity</a>
                    <a href="#" onClick={(e) => {setyScope("Pressure")}}>Pressure</a>
                    <a href="#" onClick={(e) => {setyScope("Light")}}>Light</a>
                </div>
            </div>
            
            <ul class="donate-now">
            <li onClick={setScale}>
                <input type="radio" id="ws" name="duration" onClick={(e) => {setxScope("Hours")} }/>
                <label for="hs">Hours</label>
            </li>
            <li onClick={setScale}>
                <input type="radio" id="ds" name="duration"  onClick={(e) => {setxScope("Days")} }/>
                <label for="ds">Days</label>
            </li>
            <li onClick={setScale}>
                <input type="radio" id="ws" name="duration" onClick={(e) => {setxScope("Weeks")} }/>
                <label for="ws">Weeks</label>
            </li>
            </ul>
</div>
    )
}
// % millibars celcius %
export default footer;