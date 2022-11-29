import React from 'react'
import './leftbody.css'
import Dropdown from "./dropdown";

const leftbody = () => {
  return (
    <div className='leftmostbody'>
        <br>
        </br>
        <div className='dropdown'>
            <Dropdown
                placeHolder="Select an option what to show"
                options={[{"value": "Temperature", "label": "Temperature"}, {"value": "Humidity", "label": "Humidity"}, {"value": "All together", "label": "All together"}]}
                isSearchable={false}
                isMulti={false}
                onChange={(value) => console.log(value)}
            /> 
        </div>

        {/* <div className='leftmostbody-check-box'>
            <label className = 'check-box'><p id='city'>Enschede</p>
                <input type="checkbox"/>
                <span className="checkmark"></span>
            </label>
            
            <label className = 'check-box'><p id='city'>Gronau</p>
                <input type="checkbox"/>
                <span className="checkmark"></span>
            </label>
            <label className='check-box'><p id='city'>Wierden</p>
                <input type="checkbox"/>
                <span className="checkmark"></span>
            </label>
            <label className='check-box'><p id='city'>All together</p>
                <input type="checkbox"/>
                <span className="checkmark"></span>
            </label>
        </div> */}
    </div>
  )

}
export default leftbody;
