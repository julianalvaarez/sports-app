import { useContext } from "react";
import { SportContext } from "../context/SportContext";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { carrito, total, countProducts } = useContext(SportContext);

  return (
    <>
      {carrito.length < 1 ? (
        <span className="fixed z-20 bg-gray-100 text-center text-black rounded-sm font-bold p-5">
          NO HAY PRODUCTOS EN EL CARRITO
        </span>
      ) : (
        <div className="fixed flex flex-col z-20 bg-gray-100 text-black rounded-sm font-semibold p-3 w-full">
          <table>
            <thead>
              <tr className="text-center">
                <td className="border-2">Imagen</td>
                <td className="border-2">Producto</td>
                <td className="border-2 px-3">Precio</td>
                <td className="border-2 px-3">Eliminar</td>
              </tr>
            </thead>
            <tbody>
              {carrito.map((productoCarrito) => (
                <CartItem key={productoCarrito.length} productoCarrito={productoCarrito} />
              ))}
            </tbody>

          </table>

            <div className="my-2 md:text-lg">
              <p>Productos Totales: {countProducts}</p>
              <p>Total Compra: {total}</p>
            </div>
            <span className="grid place-items-center">
                <button className="bg-black text-white p-2 rounded-md font-semibold hover:text-black hover:bg-gray-300 hover:scale-105 md:text-lg md:p-3">
                    <Link to="/pagar">Ir a Pagar</Link>
                </button>
            </span>
        </div>
      )}
    </>
  );
};
