import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
// import { FaRegHeart } from "react-icons/fa";

const ProductItem = ({id,name,price,image,size}) => {
    const {currency}=useContext(ShopContext)
  return (
    <div className='cursor-pointer bg-[#F4F5F7] group transition-all duration-300 hover:shadow-lg overflow-hidden'>
        <NavLink to={`/product/${id}`}>
            <div className='overflow-hidden relative pt-[110%]'>
                <img className='absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' src={image[0]} alt={name} />

            </div>
            <div className='px-3 py-3'>
                <p className='text-lg font-medium'>{name}</p>
                <p className='text-base font-medium'>{currency}{price}</p>
                <p className='text-base font-base'>{size.join(', ')}</p>
            </div>
        </NavLink>
    </div>
  )
}

export default ProductItem