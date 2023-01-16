import React from 'react';
import './body.css';
import Chart from './chart';
import { useEffect } from 'react';
import { useState } from 'react';

const body = ({ dropDownData, xscope, yscope }) => {
  const [listOfSensors, setListOfSensors] = useState("");
  const [listofurls, setListofUrl] = useState([]);

  const ParsedYscopeOptions = {
    Humidity: "humidity",
    Temperature_out: "temperature_out",
    Temperature: "temperature",
    Light: "light",
    Pressure: "pressure",
  }

  const ParsedXscopeOptions = {
    Hours: "hour",
    Days: "day",
    Weeks: "week",
  }


  useEffect(() => {
    const array = JSON.parse(dropDownData);
    let v = "";
    let urlArray = []
    for (let i = 0; i < array.length; i++) {
      v = v + array[i].value + ", ";
      let url = `https://0e8d-145-76-250-107.eu.ngrok.io/${array[i].value}/data/${ParsedYscopeOptions[yscope]}/${ParsedXscopeOptions[xscope]}`;
      urlArray.push(url)
    }
    setListofUrl(urlArray);
    setListOfSensors(v);
  }, [yscope, xscope, dropDownData]);

  return (
    <div className='body'>
      <h1 id="one">You have selected the graph for:</h1>
      <h1 id="one">{listOfSensors}</h1>
      <div className='graphbody__container'>
        {listofurls.map((url) => {
          return <Chart url={url} />
        })}
      </div>
    </div>
  )
}
export default body;
