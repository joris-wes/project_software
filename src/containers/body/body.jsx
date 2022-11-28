import React from 'react';
import './body.css';


const body = () => {
  return (
   
    <div className='graphbody'>
        <h1> test</h1>
        <div className='graphbody__container'>
        <h1> graph Enschede</h1>
        </div>
        <div id="graph2">
        <h1> graph Gronau</h1>
        </div>
        <div className='compareButt'>
            <button>Compare</button>
        </div>
        <div id="graph3">
        <h1> graph Wierden</h1>
        </div>
        <div id="graph4">
        <h1> graph Compare</h1>
        </div>
    </div>
       
  )
}
export default body;