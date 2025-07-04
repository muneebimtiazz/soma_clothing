import { useState,useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { MdOutlineAccountCircle } from "react-icons/md";
// import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import somaLogo from '../assets/soma_logo.png';
import { ShopContext } from '../context/ShopContext';



const NavBar = () => {
  const [MenuOpen,setMenuOpen]=useState(false);
  const {getCartCount}=useContext(ShopContext)

  const toggle=()=>{
    setMenuOpen(!MenuOpen)
  }

  return (
    <nav className='h-15 text-sm w-auto flex items-center justify-between px-10 sticky top-0 z-50 bg-white shadow-2xs'>
      <div className='flex items-center'>
        <NavLink><img src={somaLogo} className='w-15 md:w-25' alt="logo" /></NavLink>
      </div>
      <div >
         <ul className='hidden md:flex space-x-6 item-center w-auto '>
          <li><NavLink to='/' className={({isActive}) => isActive? 'font-medium text-black border-b-2 border-black ':'text-gray-500 hover:text-black transition-colors'}>Home</NavLink></li>
          <li><NavLink to='/shop' className={({isActive}) => isActive? 'font-medium text-black border-b-2 border-black ':'text-gray-500 hover:text-black transition-colors'}>Shop</NavLink></li>
          <li><NavLink to='/about' className={({isActive}) => isActive? 'font-medium text-black border-b-2 border-black ':'text-gray-500 hover:text-black transition-colors'}>About</NavLink></li>
          <li><NavLink to='/contact' className={({isActive}) => isActive? 'font-medium text-black border-b-2 border-black ':'text-gray-500 hover:text-black transition-colors'}>Contact</NavLink></li>
       </ul>
      </div>
      
      <div className='flex items-center space-x-6'>
        <NavLink to='/login'><MdOutlineAccountCircle className='hidden md:block text-2xl cursor-pointer'/></NavLink>
        <NavLink to='/cart' className="relative"><AiOutlineShoppingCart className='text-2xl cursor-pointer'/><span className="absolute -top-1 -right-2 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">{getCartCount()}</span> </NavLink> 
        
        <button onClick={toggle}>
        {MenuOpen ? <RxCross1 className='text-2xl cursor-pointer block md:hidden'/> :<RxHamburgerMenu className='text-2xl cursor-pointer block md:hidden' />}
        </button>
      </div>

      {/* mobile */}
      {MenuOpen && (
        <div className='md:hidden absolute top-10 left-0 right-0 bg-white shadow-xs py-4 px-6 z-50'>
        <div>
        <ul className='flex flex-col space-y-5 py-5'>
        <li><NavLink to='/' className={({isActive})=>isActive?'font-medium text-black border-b-2 border-black ':'text-gray-500 hover:text-black transition-colors'}>Home</NavLink></li>
        <li><NavLink to='/shop' className={({isActive})=>isActive?'font-medium text-black border-b-2 border-black ':'text-gray-500 hover:text-black transition-colors'}>Shop</NavLink></li>
        <li><NavLink to='/about' className={({isActive})=>isActive?'font-medium text-black border-b-2 border-black ':'text-gray-500 hover:text-black transition-colors'}>About</NavLink></li>
        <li><NavLink to='/contact' className={({isActive})=>isActive?'font-medium text-black border-b-2 border-black ':'text-gray-500 hover:text-black transition-colors'}>Contact</NavLink></li>
        </ul>
        </div>
        <div className='flex justify-around pt-4 border-t border-gray-200'>
            <NavLink to='/login'><MdOutlineAccountCircle className='text-2xl cursor-pointer'/></NavLink>
        </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar