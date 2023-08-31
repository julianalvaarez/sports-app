import { useContext } from 'react';
import {MdDelete} from 'react-icons/md';
import { SportContext } from '../context/SportContext';

export const CartItem = ({productoCarrito}) => {
  const {deleteToCarrito} = useContext(SportContext)
  return (
    <>
      <tr key={productoCarrito.id}>
        <td className='border-2'><img src={productoCarrito.imagen} alt={productoCarrito.nombre} className='h-16 rounded-sm mx-auto' /></td>
        <td className='border-2 px-4 text-center'>{productoCarrito.nombre}</td>
        <td className='border-2 text-center px-2'>${productoCarrito.precio}</td>

        <td className='text-center border-2 text-xl'><button className='bg-red-600 text-white lg:bg-gray-100 lg:text-black lg:hover:bg-red-600 lg:hover:text-white transition-colors p-4 rounded-xl' onClick={()=> deleteToCarrito(productoCarrito.id, productoCarrito.precio)}><MdDelete/></button></td>
      </tr>   
    </>
  )
}
