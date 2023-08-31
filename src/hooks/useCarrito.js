import { useEffect, useState } from "react";

export const useCarrito = () => {
  const [carrito, setCarrito] = useState(() => {
    const storedCarrito = localStorage.getItem("carrito");
    return storedCarrito ? JSON.parse(storedCarrito) : [];
  });
  const [total, setTotal] = useState(() => {
    const storedTotal = localStorage.getItem("total");
    return storedTotal ? JSON.parse(storedTotal) : 0;
  });
  const [countProducts, setCountProducts] = useState(() => {
    const storedProductos = localStorage.getItem("countProducts");
    return storedProductos ? JSON.parse(storedProductos) : 0;
  });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    localStorage.setItem("total", JSON.stringify(total));
    localStorage.setItem("countProducts", JSON.stringify(countProducts));
  }, [carrito]);

  const addToCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    setTotal(total + producto.precio);
    setCountProducts(countProducts + 1);
  };

  const deleteToCarrito = (id, productoPrecio) => {
    const indice = carrito.findIndex((producto) => producto.id === id);
    if (indice !== -1) {
      const nuevoCarrito = [...carrito];
      nuevoCarrito.splice(indice, 1);
      setCarrito(nuevoCarrito);
    }
    setTotal(total - productoPrecio);
    setCountProducts(countProducts - 1);
  };

  return {
    addToCarrito,
    deleteToCarrito,
    carrito,
    total,
    countProducts
  }
};
