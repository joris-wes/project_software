/*
    * This file is a body of the site which contains the graph component
    * and takes the states from the the dropdown component
    * to display the graph for the selected sensors.
    * With the dropdown component it also takes the xscope and yscope from footer component
    * to display the graph for the selected xscope and yscope.
    * Witin the body component it also parses the data from the dropdown component
    * to display the selected sensors on the page.
    * It also generates the url for the graph component
    * to display the graph for the selected sensors.
    * It uses the Chart component to display the graph for the selected sensors.
    * It uses the map function to display the graph for the selected sensors.
    * It uses the axios library to get the data from the server.
*/

import React from 'react';
import './body.css';
import Chart from './chart';
import { useEffect } from 'react';
import { useState } from 'react';

const body = ({ dropDownData, xscope, yscope }) => {

    // Standart states decralation
    const [listOfSensors, setListOfSensors] = useState("");
    const [listofurls, setListofUrl] = useState([]);

    // Parsing the data from footer componet in format of the url, so it can be used in the generating url component
    // ParsedYScopeOptions is used for the Y-scope of the graph
    const ParsedYscopeOptions = {
        Humidity: "humidity",
        Temperature_out: "temperature_out",
        Temperature: "temperature",
        Light: "light",
        Pressure: "pressure",
    }

    // ParsedXScopeOptions is used for the X-scope of the graph
    const ParsedXscopeOptions = {
        Hours: "hour",
        Days: "day",
        Months: "month",
    }

    // This useEffect is used to parse the data from the dropdown component in order to show it on the page as a string
    // Also it generates the url for the graph component
    useEffect(() => {

        const sensornames = JSON.parse(dropDownData);

        let displaySensorNames = "";
        let urlArray = [];

        // Generating the url for the graph component
        for (let i = 0; i < sensornames.length; i++) {
            console.log("sensornames ",displaySensorNames);
            displaySensorNames = displaySensorNames + sensornames[i].value + ", ";
            let url = `https://ef7b-145-76-250-107.eu.ngrok.io/${sensornames[i].value}/data/${ParsedYscopeOptions[yscope]}/${ParsedXscopeOptions[xscope]}`;
            urlArray.push(url);
            console.log(url);
        }
        
        setListofUrl(urlArray);
        setListOfSensors(displaySensorNames);

    }, [yscope, xscope, dropDownData]);


    return (
        <div className='body'>

            <h1 id="one">You have selected the graph for:</h1>
            <h1 id="one">{listOfSensors}</h1>
            <div className='graphbody__container'>
                {/* Displaying the graph and passing there urls */}
                {listofurls.map((url) => {
                    return <Chart url={url} />
                })}
            </div>
        </div>
    )
}
export default body;
