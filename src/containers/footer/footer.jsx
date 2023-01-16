import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Sector } from "recharts";
import './footer.css';
import axios from 'axios';

const footer = ({setxScope, setyScope}) => {
    
    const [TitileCaption, setTitleCaption] = useState("Select Options");

    return (
        <div className='footer'>
            <div class="dropup">
                <button class="dropbtn">{TitileCaption}</button>
                <div class="dropup-content">
                    <a href="#" onClick={(e) => {setyScope("Temperature"); setTitleCaption("Temperature")}}>Temperature</a>
                    <a href="#" onClick={(e) => {setyScope("Humidity"); setTitleCaption("Humidity")}}>Humidity</a>
                    <a href="#" onClick={(e) => {setyScope("Pressure"); setTitleCaption("Pressure")}}>Pressure</a>
                    <a href="#" onClick={(e) => {setyScope("Light"); setTitleCaption("Light")}}>Light</a>
                    <a href="#" onClick={(e)=> {setyScope("Temperature_out"); setTitleCaption("Temperature Out")}}>Temperature Out</a>
                </div>
            </div>
            
            <ul class="donate-now">
            <li>
                <input type="radio" id="ws" name="duration" onClick={(e) => {setxScope("Hours")} } checked/>
                <label for="hs">Hours</label>
            </li>
            <li>
              <input type="radio" id="ds" name="duration"  onClick={(e) => {setxScope("Days")} }/>
                <label for="ds">Days</label>
            </li>
            <li>
                <input type="radio" id="ws" name="duration" onClick={(e) => {setxScope("Weeks")} }/>
                <label for="ws">Months</label>
            </li>
            </ul>
</div>
    );
}
// % millibars celcius %
export default footer;