import { createContext } from "react";
import { useCarrito } from "../hooks/useCarrito";

export const SportContext = createContext();

export const SportContextProvider = (props) => {
   const { addToCarrito, deleteToCarrito, carrito, total, countProducts } = useCarrito()


  return (
    <SportContext.Provider
      value={{
        addToCarrito,
        deleteToCarrito,
        carrito,
        total,
        countProducts
      }}
    >
      {props.children}
    </SportContext.Provider>
  );
};
