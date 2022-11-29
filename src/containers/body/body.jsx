import React from 'react';
import './body.css';
import Dropdown from '../leftbody/dropdown';

const body = () => {
  return (
   
    <div className='graphbody'>
       <div className='dropdownGraph'>
            <Dropdown
                placeHolder="Select data"
                options={[{"value": "Temperature", "label": "Temperature"}, {"value": "Humidity", "label": "Humidity"}, {"value": "All together", "label": "All together"}]}
                isSearchable={false}
                isMulti={false}
                onChange={(value) => console.log(value)}
            /> 
        </div>
        <div className='graphbody__container'>
        <h1> graph </h1>
        </div>
    </div>
       
  )
}
export default body;