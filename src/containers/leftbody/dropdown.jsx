import React, { useEffect, useState, useRef, CloseIcon } from "react";
import  GlobalState  from "../../App.js";

import "./Dropdown.css";

const Icon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    </svg>
  );
};



const Dropdown = ({
    placeHolder,
    options,
    isMulti,
    isSearchable,
  }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [selectedValue, setSelectedValue] = useState(isMulti ? [] : null);
    const [searchValue, setSearchValue] = useState("");
    const searchRef = useRef();
    const inputRef = useRef();
    // const places = React.useContext(GlobalState).array;
  
    useEffect(() => {
      setSearchValue("");
      if (showMenu && searchRef.current) {
        searchRef.current.focus();
      }
    }, [showMenu]);
  
    useEffect(() => {
      const handler = (e) => {
        if (inputRef.current && !inputRef.current.contains(e.target)) {
          setShowMenu(false);
        }
      };
  
      window.addEventListener("click", handler);
      return () => {
        window.removeEventListener("click", handler);
      };
    });
    const handleInputClick = (e) => {
      setShowMenu(!showMenu);
    };
  
    const getDisplay = () => {
      if (!selectedValue || selectedValue.length === 0) {
        return placeHolder;
      }
      if (isMulti) {
        return (
          <div className="dropdown-tags">
            {selectedValue.map((option) => (
              <div key={option.value} className="dropdown-tag-item">
                {option.label}
                <span
                  onClick={(e) => onTagRemove(e, option)}
                  className="dropdown-tag-close"
                >
                  <CloseIcon />
                </span>
              </div>
            ))}
          </div>
        );
      }
      return selectedValue.label;
    };
  
    const removeOption = (option) => {
      return selectedValue.filter((o) => o.value !== option.value);
    };
  
    const onTagRemove = (e, option) => {
      e.stopPropagation();
      const newValue = removeOption(option);
      setSelectedValue(newValue);
    };
  
    const onItemClick = (option) => {
      let newValue;
      if (isMulti) {
        if (selectedValue.findIndex((o) => o.value === option.value) >= 0) {
          newValue = removeOption(option);
        } else {
          newValue = [...selectedValue, option];
        }
      } else {
        newValue = option;
      }
      setSelectedValue(newValue);
      
    };
  
    const isSelected = (option) => {
      if (isMulti) {
        return selectedValue.filter((o) => o.value === option.value).length > 0;
      }
  
      if (!selectedValue) {
        return false;
      }
  
      return selectedValue.value === option.value;
    };
  
    const onSearch = (e) => {
      setSearchValue(e.target.value);
    };
  
    const getOptions = () => {
      if (!searchValue) {
        return options;
      }
  
      return options.filter(
        (option) =>
          option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
      );
    };

    return (
      <div className="dropdown-container">
      <div ref={inputRef} onClick={handleInputClick} className="dropdown-input">
        <div className="dropdown-selected-value">{getDisplay()}</div>
        <div className="dropdown-tools">
          <div className="dropdown-tool">
            <Icon />
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="dropdown-menu">
          {isSearchable && (
            <div className="search-box">
              <input onChange={onSearch} value={searchValue} ref={searchRef} />
            </div>
          )}
          {getOptions().map((option) => (
            <div
              onClick={() => onItemClick(option)}
              key={option.value}
              className={`dropdown-item ${isSelected(option) && "selected"}`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
    );
};

export default Dropdown;