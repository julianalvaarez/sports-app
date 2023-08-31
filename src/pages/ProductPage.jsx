import {useContext} from 'react';
import { BsFillCartFill } from "react-icons/bs";
import {AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SportContext } from '../context/SportContext';

export default function ProductPage({producto}) {
  const { addToCarrito } = useContext(SportContext);

  function handleClick(e) {
    addToCarrito(producto)
  }

return (
    <div>
        <Link to="/"><p className='font-semibold text-white bg-black p-2 py-4'><AiOutlineArrowLeft className='inline'/> Volver al Inicio</p></Link>
        <div className='flex flex-col mt-4 lg:flex-row lg:items-center mx-20 lg:mt-32 xl:mt-20'>
          <img src={producto.imagen} alt={producto.nombre} className='lg:w-96 xl:w-2/4'/>
          <div>
            <h1 className='font-bold text-2xl xl:text-6xl xl:mb-12 lg:text-4xl font-mono text-center'>{producto.nombre}</h1>
            <div className='flex flex-col sm:flex-row justify-between mx-2 my-4 xl:mx-20 text-center'>
              <h4 className='font-semibold text-lg xl:text-2xl bg-gray-200 inline p-2 rounded-2xl'>${producto.precio}</h4>
              <h4 className='font-semibold text-lg xl:text-2xl bg-gray-200 inline p-2 rounded-2xl'>Categoria: {producto.categoria}</h4>
            </div>
            <div className='mx-3 xl:mx-20 xl:mt-12 xl:mb-14'>
              <h4 className='font-semibold text-md sm:text-xl md:text-2xl inline'>Detalles del Producto:</h4>
              <p className='w-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quibusdam. molestias ex voluptas quae, qui nostrum earum quaerat, id provident accusantium  optio fugiat quia. Alias aliquam labore doloribus at?</p>
            </div>
            <button onClick={handleClick} className="verProductos px-6 bg-black text-white py-3 font-medium text-sm mt-10 rounded-sm hover:bg-gray-100 transition-colors hover:text-black hover:border-2 w-full hover:border-black md:text-lg ">Agregar al Carrito <BsFillCartFill className='inline'/> </button>
          </div>
        </div>
    </div>
  )
}
