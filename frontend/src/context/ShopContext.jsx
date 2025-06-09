import {createContext,useState} from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";


//creating context
const ShopContext = createContext();
export { ShopContext };

//creating provider
export const ShopProvider=({children})=>{

    const [cart,setCart]=useState({})

    //add to cart 
    const addToCart=async(id,size,quantity)=>{

        if(!size){
            toast.error('Select Your Size')
        }
        if(!quantity){
            toast.error('Select Number of Products')
        }

        let cartData=structuredClone(cart);
        if(cartData[id]){
            if(cartData[id][size]){
                cartData[id][size]=cartData[id][size]+quantity
            }else{
                cartData[id][size]=quantity
            }
        }else{
            cartData[id]={}
            cartData[id][size]=quantity
        }
        setCart(cartData);
    }

    //delete from cart
    const handleDelete = (productId, size) => {
        const updatedCart = { ...cart };
        if (updatedCart[productId]) {
            // Remove that size entry
            delete updatedCart[productId][size];
            // If the product has no more sizes, remove the product key too
            if (Object.keys(updatedCart[productId]).length === 0) {
            delete updatedCart[productId];
            }
        }
        setCart(updatedCart);
        
        };

        //total count
        const getCartCount = () => {
        let count = 0;
        for (const productId in cart) {
            for (const size in cart[productId]) {
            count += cart[productId][size];
            }
        }
        return count;
        }


    const currency='$';
    const delivery_fee=10;

    return(
        <ShopContext.Provider value={{currency,delivery_fee,products,cart,addToCart,handleDelete,getCartCount}} >
            {children}
        </ShopContext.Provider>
    );
}
