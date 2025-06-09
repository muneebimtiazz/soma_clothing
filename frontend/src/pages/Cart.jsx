import {useState, useContext, useEffect } from "react"
import { ShopContext } from "../context/ShopContext"
import { MdDeleteOutline } from "react-icons/md";
import { NavLink } from 'react-router-dom'
import { BsCart4 } from "react-icons/bs";

// {
// polo003:{S:6}
// polo006:{L:1}
// }

const Cart = () => {

  let subtotal=null;
  const {cart,products,delivery_fee,currency,handleDelete}=useContext(ShopContext)
  const [cartData , setCartData]=useState([]);

  useEffect(()=>{
    const temp=[];
    for (const product in cart){
      for (const size in cart[product]){
        if(cart[product][size]>0){
          temp.push({
            __id:product,
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
          ?<div className="flex flex-col items-center justify-center min-h-screen w-full space-y-10 ">
            <BsCart4 className=" text-9xl w-full" />
            <p className="text-4xl">Your cart is empty</p>  
           </div>
          :<div className= "p-6 space-y-2.5 rounded-xl h-fit w-full lg:w-1/2">{cartData.map((cartItem) => {
              const matchedProduct = products.map(item=>{    //[{},{},{}]
                if(item.__id===cartItem.__id){
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
                  <div className="w-[30%] relative" >
                    <img className="w-full h-full object-cover object-center" src={matchedProduct.image} alt={cartItem.__id} />
                  </div>
                  <div className="w-[70%] pl-5 pr-5">
                    <p className="text-xl font-semibold">{matchedProduct.name}</p>
                    <p className="text-gray-400">Category: {matchedProduct.category}</p>
                    <p className="text-gray-400">Size: {cartItem.size}</p>
                    <p className="text-gray-400">Quantity:{cartItem.quantity}</p>
                    <p className="text-gray-400 font-semibold">Price:{(matchedProduct.sumUp).toFixed(2)}</p>
                    <MdDeleteOutline onClick={() => handleDelete(cartItem.__id, cartItem.size)} className="text-red-600 text-2xl mt-4 cursor-pointer" />
                  </div>
                </div>
                
              );
            })}</div>
      }

      {/* bill checkout */}
      {(cartData.length!=0) && <div className="bg-gray-100 p-6 space-y-2.5 rounded-xl h-fit w-full lg:w-1/4">
        <h1 className="font-semibold text-2xl">Order Summary</h1>
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
          <hr className="mt-5 mb-5 text-gray-200" />
          <p className="flex justify-between ">
            <span className="font-semibold text-xl">Total </span>
            <span className="font-semibold text-xl">{currency}{(subtotal + delivery_fee).toFixed(2)}</span>
          </p>
        </div>


        <NavLink to="/login">
          <button className="py-2 w-full text-black border-1 bg-white hover:bg-black hover:text-white transition-colors">Place Order</button>
        </NavLink>

      </div>  }


      </div>
    </div>
  )
}

export default Cart