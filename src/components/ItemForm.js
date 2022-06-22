import React, { useState }from "react";
import { v4 as uuid } from "uuid";
import items from "../data/items";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("")
  const [category, setCategory] = useState("Produce")


  function handleSubmit(e) {
    e.preventDefault()
   const newItem = {
      id: uuid(),
      name: itemName,
      category: category
    }
    console.log
   
    }


  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={(e) => setItemName(e.target.value)} value={itemName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
