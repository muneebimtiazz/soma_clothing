import { GiTrophyCup } from "react-icons/gi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";
import somaLogo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div >
      <div className='hidden text-white bg-black md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 lg:gap-10 md:pl-25 lg:pl-35 py-10 '>
        <div>
          <GiTrophyCup className='text-4xl' />
          <p>High Quality</p>
          <p>Clothes are of best material</p>
        </div>
        <div>
          <AiOutlineSafety className='text-4xl' />
          <p>Warrenty Protection</p>
          <p>Over 2 Years</p>
        </div>
        <div>
          <MdOutlineLocalShipping className='text-4xl'/>
          <p>Free Shipping</p>
          <p>Order over 100$</p>
        </div>
        <div>
          <MdSupportAgent className='text-4xl'/>
          <p>24/7 support</p>
          <p>Dedicated Support</p>
        </div>
      </div>

      {/* footer */}

      <div className='text-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-10 p-20'>
        <div>
          <img src={somaLogo} alt="logo" />
          <p className='text-gray-600'>400 University Drive Suite 200 Coral Gables,</p>
          <p className='text-gray-600'>FL 33134 USA</p>
        </div>
        <div className='flex flex-col space-y-3'>
          <p className='text-gray-600'>Links</p>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/shop'>Shop</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </div>
        <div className='flex flex-col space-y-3'>
          <p className='text-gray-600'>Helps</p>
          <NavLink to='/'>Payment Options</NavLink>
          <NavLink to='/'>Return</NavLink>
          <NavLink to='/'>Privacy Policy</NavLink>
        </div>
        <div>
          <p className='text-gray-600'>Newsletter</p>
          <input type="text" placeholder='Enter Your Email Address' className='w-full py-2 px-0 border-b border-gray-200 focus:border-black outline-none transition-colors bg-transparent' />
          <button>SUBSCRIBE</button>
        </div>
      </div>

      {/* copyright */}

      <div className='py-2 border-t-1 border-gray-200 '>
          <p className='text-gray-500 text-sm text-center'>
            &copy; {new Date().getFullYear()} Soma Clothing. All rights reserved.
          </p>
      </div>
    </div>
  )
}

export default Footer