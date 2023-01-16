import React, { useEffect, useState, useRef, CloseIcon } from "react";
import Multiselect from 'multiselect-react-dropdown';
import axios from 'axios';
import './Dropdown.css';

const Dropdown = ({
  setDropDownData,

  }) => {

const [fetchedData, setfetchedData] = useState([]);

    const getData = async () => {  
      try {
        const response = await axios.get("https://0e8d-145-76-250-107.eu.ngrok.io/list");
        const data = response.data 
        const newArr = []
        for (let i=0; i<data.length;i++){
          let id = i;
          let value = data[i]; 
          newArr.push({value, id})
        }
        setfetchedData(newArr);
      } catch (e) {
        console.log(e);
      }
    }

  useEffect(()=>{
    getData();
  }, []);
    

    return ( 
      <div className="dropdown">
      <Multiselect 
        options={fetchedData} // Options to display in the dropdown
        onSelect={
          (e)=> setDropDownData(JSON.stringify(e))
        } // Function will trigger on select event
        onRemove={
          (e) => setDropDownData(JSON.stringify(e))
        } // Function will trigger on remove event
        displayValue="value" // Property name to display in the dropdown options
    />
      </div>
    )
};


export default Dropdown;