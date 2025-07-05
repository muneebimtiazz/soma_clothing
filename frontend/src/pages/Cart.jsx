import {useState, useContext, useEffect } from "react"
import { ShopContext } from "../context/ShopContext"
import { MdDeleteOutline } from "react-icons/md";
import { NavLink } from 'react-router-dom'
import shoppingbag from '../assets/images/0507251.svg'

// {
// polo003:{S:6}
// polo006:{L:1}
// }

const Cart = () => {

  let subtotal=null;
  const {cart,products,delivery_fee,currency,handleDelete}=useContext(ShopContext)
  const [cartData ,setCartData]=useState([]);

  useEffect(()=>{
    const temp=[];
    for (const product in cart){
      for (const size in cart[product]){
        if(cart[product][size]>0){
          temp.push({
            _id:product,
            size:size,
            quantity:cart[product][size]
          })
        }
      }
    }
    setCartData(temp); //array
  },[cart])

  return (
    <div>

      <div className="flex justify-between flex-col lg:flex-row lg:items-start gap-10 sm:m-10 max-w-full">
      {
        cartData.length===0
          ?<div className="flex flex-col items-center h-full w-full mt-30 sm:mt-40">
            <img className="w-50 h-50" src={shoppingbag}/>
            <p className="text-base">Your cart is empty</p>  
           </div>
          :<div className= "p-6 space-y-2.5 rounded-xl h-fit w-full lg:w-1/2">{cartData.map((cartItem) => {
              const matchedProduct = products.map(item=>{    //[{},{},{}]
                if(item._id===cartItem._id){
                  return {
                    name:item.name,
                    price:item.price,
                    category:item.Category,
                    image:item.image[0],
                    sumUp:item.price*cartItem.quantity
                  }
                }else{
                  return null;
                }
                }).filter(Boolean)[0];
                
                subtotal += matchedProduct.sumUp;
        
            return (
            //  display cart items
                <div className="flex">
          <div className="flex flex-col sm:flex-row items-center gap-4 p-4">
            <div className="w-full sm:w-[30%] aspect-square relative">
              <img
                src={matchedProduct.image}
                alt={cartItem._id}
                className="w-full h-full object-cover object-center rounded-md"
              />
            </div>
            <div className="w-full sm:w-[70%] flex flex-col  px-1 sm:px-5">
              <p className="text-lg sm:text-xl font-semibold">{matchedProduct.name}</p>
              <p className="text-sm text-gray-600">Category: <span className="text-black">{matchedProduct.category}</span></p>
              <p className="text-sm text-gray-600">Size: <span className="text-black">{cartItem.size}</span></p>
              <p className="text-sm text-gray-600">Quantity: <span className="text-black">{cartItem.quantity}</span></p>
              <p className="text-base font-medium">Price: <span className="text-black">${matchedProduct.sumUp.toFixed(2)}</span></p>
              
              {/* Delete Icon */}
              <MdDeleteOutline
                onClick={() => handleDelete(cartItem._id, cartItem.size)}
                className="text-red-600 text-2xl mt-2 hover:scale-110 transition-transform duration-200 self-start cursor-pointer"
              />
            </div>
          </div>

                </div>
                
              );
            })}</div>
      }

      {/* bill checkout */}
      {(cartData.length!=0) && <div className="bg-gray-100 p-6 space-y-2.5 rounded-xl h-fit w-full lg:w-1/5">
        <h1 className="font-semibold text-2xl uppercase text-center">Order Summary</h1>
        <div className="space-y-2 text-sm">
          <p className="flex justify-between ">
            <span>Subtotal</span>
            <span>{currency}{(subtotal).toFixed(2)}</span>
          </p>
          <p className="flex justify-between ">
            <span>Delivery</span>
            <span>{currency}{delivery_fee}</span>
          </p>
          <p className="flex justify-between ">
            <span>Discount</span>
            <span>-</span>
          </p>
          <hr className="my-5 text-gray-200" />
          <p className="flex justify-between ">
            <span className="font-semibold text-xl">Total </span>
            <span className="font-semibold text-xl">{currency}{(subtotal + delivery_fee).toFixed(2)}</span>
          </p>
        </div>


        <NavLink to="/login" className="flex justify-center">
          <button className="py-2 w-full rounded text-black border-1 bg-white hover:bg-black hover:text-white transition-colors">Place Order</button>
        </NavLink>


      </div>  }


      </div>
    </div>
  )
}

export default Cart