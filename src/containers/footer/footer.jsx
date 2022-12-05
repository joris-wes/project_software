import React from "react";

import './footer.css';
const footer = () => {
    return (
        <div className='footer'>
            <div class="dropup">
                <button class="dropbtn">Select an option</button>
                <div class="dropup-content">
                    <a href="#">Temperature</a>
                    <a href="#">Humidity</a>
                    <a href="#">Pressure</a>
                    <a href="#">All together</a>
                </div>
            </div>
            
            <ul class="donate-now">
            <li>
                <input type="radio" id="ws" name="duration" />
                <label for="hs">Hours</label>
            </li>
            <li>
                <input type="radio" id="ds" name="duration" />
                <label for="ds">Days</label>
            </li>
            <li>
                <input type="radio" id="ws" name="duration" />
                <label for="ws">Weeks</label>
            </li>
            <li>
                <input type="radio" id="a100" name="duration" />
                <label for="eeeee">Eternity</label>
            </li>
            </ul>
</div>
    )
}

export default footer;