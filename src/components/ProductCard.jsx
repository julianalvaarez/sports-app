import { useContext } from 'react';
import {BsFillCartFill} from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { SportContext } from '../context/SportContext';

const button = "px-6 bg-black text-white py-2 font-medium text-sm mt-5 rounded-sm hover:bg-gray-100 transition-colors hover:text-black hover:border-2 hover:border-black md:text-lg "

export const ProductCard = ({product}) => {
  const navigate = useNavigate()
  function handleNavigate() {
    navigate(`product/${nombre}`, {replace: true})
  }
  const {nombre, imagen, precio, categoria} = product
  const {addToCarrito, carrito} = useContext(SportContext)
  const product_count_carrito = carrito.includes(product) ? `(${carrito.filter(item => item === product).length})`: ''

  return (
    <>
     <div className='flex flex-col mx-auto border-2 p-3 mb-8 rounded-lg flex-wrap hover:scale-105'>
        <div onClick={handleNavigate} className='cursor-pointer'>
            <img src={imagen} alt={nombre} className='h-64 xl:h-96' />
            <h3 className='text-center font-bold text-xl sm:hover:underline md:text-2xl'>{nombre}</h3>
        </div>
            <div className='flex justify-around mt-4'>
            <p className='p-1 bg-gray-200 font-semibold rounded-md md:text-lg'>${precio}</p>
            <p className='p-1 bg-gray-200 font-semibold rounded-md md:text-lg'>Categoria: {categoria}</p>
            </div>
            <button className={button} onClick={() => addToCarrito(product)}>Agregar al Carrito {product_count_carrito} <BsFillCartFill className='inline'/> </button>
     </div>   
    </>
  )
}
