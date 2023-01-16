/*
  * This file contains the code for the dropdown menu.
  * It uses the multiselect-react-dropdown library to create the dropdown menu.
  * It uses the axios library to get the data from the server.
  * It uses the useEffect hook to get the data from the server.
  * It uses the useState hook to store the data from the server.
  * It uses the setDropDownData function to set the data in the parent component.
*/

import React, { useEffect, useState, } from "react";
import Multiselect from 'multiselect-react-dropdown';
import axios from 'axios';
import './Dropdown.css';

const Dropdown = ({ setDropDownData }) => {

  const [fetchedData, setfetchedData] = useState([]);

  // Get the data from the server
  const getData = async () => {

    try {

      // Data from the server fetched using axios
      const response = await axios.get("https://0e8d-145-76-250-107.eu.ngrok.io/list");
      const data = response.data
      const newArr = []

      // Parsing the data from the server
      for (let i = 0; i < data.length; i++) {
        let id = i;
        let value = data[i];
        newArr.push({ value, id })
      }

      // Setting parsed data in the state
      setfetchedData(newArr);

    } catch (e) {

      console.log(e);

    }
  }

  useEffect(() => {

    getData();

  }, []);


  return (
    <div className="dropdown">
      <Multiselect
        // Options to display in the dropdown
        options={fetchedData}
        // Function will trigger on select event
        onSelect={
          (e) => setDropDownData(JSON.stringify(e))
        } 
        // Function will trigger on remove event
        onRemove={
          (e) => setDropDownData(JSON.stringify(e))
        } 
        // Property name to display in the dropdown options
        displayValue="value" 
      />
    </div>
  )
};


export default Dropdown;