import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");
  const newItem = {
    id: uuid(),
    name: itemName,
    category: itemCategory,
  };

  function onNameChange(event) {
    setItemName(event.target.value);
  }

  function onCategorySelected(event) {
    setItemCategory(event.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onItemFormSubmit(newItem);
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={onNameChange} />
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={onCategorySelected}>
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
