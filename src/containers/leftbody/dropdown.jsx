import React, { useEffect, useState, useRef, CloseIcon } from "react";
import Multiselect from 'multiselect-react-dropdown';
import axios from 'axios';

const Dropdown = ({
  setDropDownData,

  }) => {

const [fetchedData, setfetchedData] = useState([]);

    const getData = () => {
      axios.get("https://6bfb-92-67-23-13.eu.ngrok.io/list") // test server
      .then((response)=>{
        console.log(response)
        const myData = response.data;
        const newArr = []
        for (let i=0; i<myData.length;i++){
          let id = i;
          let value = myData[i]; 
          newArr.push({value, id})
        }
        setfetchedData(newArr);
        console.log(newArr);
      });
    }

  useEffect(()=>getData(), []);
    
    

  //  const data = await fetch("https://6bfb-92-67-23-13.eu.ngrok.io/list");
  //  data.json();
  //  console.log(data)

    return ( 
      <Multiselect
        options={fetchedData} // Options to display in the dropdown
        // selectedValues={stateTEST.selectedValues} // Preselected value to persist in dropdown
        onSelect={
          (e)=> setDropDownData(JSON.stringify(e))
        } // Function will trigger on select event
        onRemove={
          (e) => setDropDownData(JSON.stringify(e))
        } // Function will trigger on remove event
        displayValue="value" // Property name to display in the dropdown options
    />)
};


export default Dropdown;