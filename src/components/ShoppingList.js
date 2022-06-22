import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  function onCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(e) {
    setSearch(e.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
   if (selectedCategory === "All") return true;

   return item.category === selectedCategory;
  }).filter(item => {
    if(search === "") {
      return true
    } else {
      const name = item.name.toUpperCase()
      return name.includes(search.toUpperCase())
    }
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} items={items} />
      <Filter onCategoryChange={onCategoryChange} onSearchChange={onSearchChange} search={search} selectedCategory={selectedCategory}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
