import { useState } from "react";

export const useFilterProducts = (data) => {
  const [filterCategory, setFilterCategory] = useState('');

  const filterProducts = (category) => {
    setFilterCategory(category);
  };

  const products = filterCategory !== "" ? data.filter((producto) => producto.categoria === filterCategory) : data;

  return {
    products,
    filterProducts
  }
}
