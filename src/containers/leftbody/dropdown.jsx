import React, { useEffect, useState, useRef, CloseIcon } from "react";
import Multiselect from 'multiselect-react-dropdown';


const Dropdown = ({
  options,
  setDropDownData
  }) => {


    return ( 
      <Multiselect
        options={options} // Options to display in the dropdown
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