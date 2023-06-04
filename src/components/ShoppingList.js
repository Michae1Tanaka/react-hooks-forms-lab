import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchInput, setSearchInput] = useState("");
  const [itemsList, setItemsList] = useState(items);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(event) {
    setSearchInput(event.target.value);
  }

  function onItemFormSubmit(newItem) {
    setItemsList((items) => [...items, newItem]);
  }

  const itemsToDisplay = itemsList.filter((item) => {
    if (selectedCategory !== "All" && item.category !== selectedCategory) {
      return false;
    }

    if (searchInput === "") {
      return true;
    }

    return item.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        onCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
        search={searchInput}
        onSearchChange={onSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
