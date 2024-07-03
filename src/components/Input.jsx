import React, { useState, useContext } from "react";
import { ListItemsContext } from "../App";

function Input(props) {
  const [inputValue, setInputValue] = useState("");

  const { listItems, handleListItems } = useContext(ListItemsContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // move state to app
    // console.log(listItems);
    // console.log(handleListItems);
    handleListItems(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={inputValue} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Input;
