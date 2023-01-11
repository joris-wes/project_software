import React, { useEffect, useState, useRef, CloseIcon } from "react";
import Multiselect from 'multiselect-react-dropdown';
import axios from 'axios';

const Dropdown = ({
  setDropDownData,

  }) => {

const [fetchedData, setfetchedData] = useState([]);

    const getData = () => {  
      axios.get("http://localhost:8080/list")
       // test server
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
    

    return ( 
      <Multiselect
        options={fetchedData} // Options to display in the dropdown
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