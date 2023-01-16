/*
  * This file is for the footer component
  * It is used to display the options for the user to select
  * It uses the useState hook to store the selected options
*/

import React from "react";
import { useState } from "react";
import './footer.css';

const footer = ({ setxScope, setyScope }) => {

    // This hook is used to store the selected options and display them in the button
    const [TitileCaption, setTitleCaption] = useState("Select Options");

    return (
        <div className='footer'>
            <div class="dropup">
                <button class="dropbtn">{TitileCaption}</button>
                <div class="dropup-content">
                    <a href="#" onClick={(e) => { setyScope("Temperature"); setTitleCaption("Temperature") }}>Temperature</a>
                    <a href="#" onClick={(e) => { setyScope("Humidity"); setTitleCaption("Humidity") }}>Humidity</a>
                    <a href="#" onClick={(e) => { setyScope("Pressure"); setTitleCaption("Pressure") }}>Pressure</a>
                    <a href="#" onClick={(e) => { setyScope("Light"); setTitleCaption("Light") }}>Light</a>
                    <a href="#" onClick={(e) => { setyScope("Temperature_out"); setTitleCaption("Temperature Out") }}>Temperature Out</a>
                </div>
            </div>

            <ul class="donate-now">
                <li>
                    <input type="radio" id="ws" name="duration" onClick={(e) => { setxScope("Hours") }} checked />
                    <label for="hs">Hours</label>
                </li>
                <li>
                    <input type="radio" id="ds" name="duration" onClick={(e) => { setxScope("Days") }} />
                    <label for="ds">Days</label>
                </li>
                <li>
                    <input type="radio" id="ws" name="duration" onClick={(e) => { setxScope("Weeks") }} />
                    <label for="ws">Months</label>
                </li>
            </ul>
        </div>
    );
}
// % millibars celcius %
export default footer;