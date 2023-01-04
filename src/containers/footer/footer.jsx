import React from "react";
import './footer.css';


const StateArray = [];

const changeTime = (value) => {

    console.log(value)
    const recipeUrl = "http://localhost:3000/api/recipes"
    const PostBody = {
        time: value,
    }
    const RequestMetadata = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
   //     body: JSON.stringify(PostBody)
    }
    // fetch(recipeUrl, PostBody, RequestMetadata)
}


const handleClick = (value) => {
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
    //  body: JSON.stringify(PostBody)
    }
    fetch(recipeUrl, PostBody, RequestMetadata)
}

const footer = ({chartData}) => {
    return (
        <div className='footer'>
            <div class="dropup">
                <button class="dropbtn">Select an option</button>
                <div class="dropup-content">
                    <a href="#" onClick={event => handleClick(event)}>Temperature</a>
                    <a href="#" onClick={event => handleClick(event)}>Humidity</a>
                    <a href="#" onClick={event => handleClick(event)}>Pressure</a>
                    <a href="#" onClick={event => handleClick(event)}>Light</a>
                </div>
            </div>
            
            <ul class="donate-now">
            <li>
                <input type="radio" id="ws" name="duration" onClick={event => changeTime("Hours")}/>
                <label for="hs">Hours</label>
            </li>
            <li>
                <input type="radio" id="ds" name="duration"  onClick={event => changeTime("Days")}/>
                <label for="ds">Days</label>
            </li>
            <li onClick={handleClick}>
                <input type="radio" id="ws" name="duration" onClick={event => changeTime("Weeks")}/>
                <label for="ws">Weeks</label>
            </li>
            </ul>
</div>
    )
}
// % millibars celcius %
export default footer;