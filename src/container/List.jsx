import React, { useState } from "react";
import ListItems from "./ListIteams";

const List = (props) => {
  const [listItems, setListItems] = useState([
    "Buy a Car",
    "Buy a Tractor",
    "Sell Aeroplane",
  ]);
  const [toDo, setToDo] = useState("");

  return (
    <>
      <div className="parent-box">
        <span className="key-text">TO-DO LIST</span>
        <input type="text" onChange={(e) => setToDo(e.target.value)}></input>
        <button on onClick={() => setListItems([toDo,...listItems])}>
          ADD
        </button>
      </div>
      <ListItems 
      listItems={listItems} 
      fnDeleteHandler={(e)=>setListItems(listItems.filter(ele=> e!==ele))}
      />
    </>
  );
};
export default List;
