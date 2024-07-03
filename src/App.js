import "./App.css";
import Input from "./components/Input.jsx";
import List from "./components/List.jsx";
import { useState, createContext } from "react";

export const ListItemsContext = createContext();

function App() {
  const [listItems, setListItems] = useState(["corn", "potatoes"]);

  const handleListItems = (input) => {
    setListItems([...listItems, input]);
  };

  return (
    <div>
      <ListItemsContext.Provider value={{ listItems, handleListItems }}>
        <Input />
        <List />
      </ListItemsContext.Provider>
    </div>
  );
}

export default App;
