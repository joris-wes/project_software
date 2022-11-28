import React from 'react'
import './leftbody.css'
import Dropdown from "./dropdown";

const leftbody = () => {
  return (
    <div className='leftmostbody'>
        <div className='dropdown'>
            <Dropdown placeHolder="Select a city"/> 
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
