import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
// import { FaRegHeart } from "react-icons/fa";

const ProductItem = ({id,name,price,image,size,discount,og}) => {
    const {currency}=useContext(ShopContext)
  return (
    <div className='rounded cursor-pointer bg-[#F4F5F7] group transition-all duration-300 hover:shadow-lg overflow-hidden'>
        <NavLink to={`/product/${id}`} className="relative">
            <div className='overflow-hidden relative pt-[110%]'>
                <img className='absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' src={image[0]} alt={name} />
            </div>
            {discount!=0&&<span className='absolute top-4 left-4 bg-black text-white rounded-full w-10 h-10 flex justify-center items-center text-sm font-semibold shadow-lg'>
                {discount}%
            </span>}
            
            <div className='px-3 py-3'>
                
                <p className='text-base font-semibold'>{name}</p>
                <div className='flex items-center gap-3'>
                    <p className='text-sm'>{currency}{price}</p>
                    {discount>0&& <p className='text-sm line-through'>{currency}{og}</p>}
                </div>
                <p className='text-sm'>{size.join(', ')}</p>
            </div>
        </NavLink>
    </div>
  )
}

export default ProductItem