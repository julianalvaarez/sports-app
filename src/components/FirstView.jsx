import {BiCaretLeft, BiCaretRight} from 'react-icons/bi';
import '../carrusel.css'

export const FirstView = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-3xl text-center mb-8">
          SPORTS SHOP - TIENDA DEPORTIVA ONLINE
        </h1>
        <div id="contentCarrusel">
          <div className="carrusel" id="carrusel1">
            <div className="tarjetasCarrusel" id="tarjeta1"></div>
            <div className="flechasCarrusel">
              <a href="#carrusel3">
                <BiCaretLeft />{" "}
              </a>
              <a href="#carrusel2">
                <BiCaretRight />
              </a>
            </div>
          </div>
          <div className="carrusel" id="carrusel2">
            <div className="tarjetasCarrusel" id="tarjeta2"></div>
            <div className="flechasCarrusel">
              <a href="#carrusel1">
                <BiCaretLeft />{" "}
              </a>
              <a href="#carrusel3">
                <BiCaretRight />
              </a>
            </div>
          </div>
          <div className="carrusel" id="carrusel3">
            <div className="tarjetasCarrusel" id="tarjeta3"></div>
            <div className="flechasCarrusel" id="flechas3">
              <a href="#carrusel2">
                <BiCaretLeft />{" "}
              </a>
              <a href="#carrusel1">
                <BiCaretRight />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mt-6">
          <a href="#view">
            <button className="verProductos px-16 bg-black text-white py-3 font-semibold text-xl rounded-sm hover:bg-gray-100 transition-colors hover:text-black hover:border-2   hover:border-black mx-auto">
              Ver Productos
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
