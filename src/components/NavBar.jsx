import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Cart } from "./Cart";

export const NavBar = () => {
  const [cartActive, setCartActive] = useState(false);

  return (
    <>
      <header className="fixed w-full -mt-32 z-10 bg-black">
        <nav className="flex  text-white flex-col sm:flex-row p-4 md:justify-between md:items-center md:mx-10">
            
          <span className="mb-2 font-semibold text-center text-2xl md:mb-0 font-mono">
            <Link to="/">SPORT SHOP</Link>
          </span>

          <ul className="flex justify-around items-center text-center my-2 md:my-0 font-semibold md:text-xl">
            <li className="md:mr-5"><NavLink to='/products' className={({isActive}) => `${isActive ? 'underline' : '' }`} >Productos</NavLink></li>
            <li>
                <button onClick={() => setCartActive(!cartActive)}>
                {!cartActive ? "Ver Carrito" : "Ocultar Carrito"}
                </button>
            </li>
          </ul>
        </nav>
        {cartActive && <Cart/>}
      </header>
    </>
  );
};
