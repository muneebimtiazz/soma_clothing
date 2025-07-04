import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import RelatedProducts from "../components/RelatedProducts";
// import { NavLink } from 'react-router-dom';

const Product = () => {
  const { productId } = useParams(); //polo004
  const [count, setCount] = useState(0); //quantity
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const { currency, products, addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null); // size

  useEffect(() => {
    if (products && products.length > 0) {
      products.forEach((item) => {
        if (item.__id === productId) {
          setProductData(item);
          setImage(item.image[0]); // Set first image as default
        }
      });
    }
  }, [productId, products]);

  if (!productData)
    return (
      <div className="py-8 text-center animate-pulse text-lg">Loading...</div>
    );

  return (
    <div className="flex-col">
      {/* header */}
      <div className="w-full h-30 flex justify-center items-center p-0 m-0">
        <p>Home &gt; Product &gt; </p>
        <p className="pl-1 font-semibold">{productId} </p>
      </div>

      {/* main */}
      <div className="sm:flex sm:justify-center m-3 sm:space-y-10 space-x-10">
          <div className="flex sm:flex-col flex-row flex-wrap justify-center sm:justify-start gap-2 sm:gap-4 mt-4 sm:mt-0">
            {productData.image.map((item, index) => (
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#F4F5F7] relative group cursor-pointer">
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 "
                  onClick={() => setImage(item)}
                  src={item}
                  key={index}
                  alt="#"
                />
              </div>
            ))}
          </div>
          <div className="cursor-pointer">
            <img className="w-full h-auto max-h-[300px] md:max-h-[400px] lg:max-h-[500px] object-contain" src={image} />
          </div>
          
          <div className="mt-5 sm:mt-0 flex-col pl-3 pr-3 justify-center items-center space-y-8 ">
          <div className="space-y-2">
                    <h1 className='text-2xl sm:text-4xl font-semibold uppercase'>{productData.name}</h1>
              <p className={productData.stock > 5 ? "text-green-600" : "text-red-600"}>
                Stock : {productData.stock}
              </p>
              <p className="text-base">
                {currency}
                {productData.price}
              </p>
              <p className="pb-5 text-justify">{productData.description}</p>
              <hr />
          </div>


            {/* size  */}
            <div className="flex items-center space-x-3">
              <p>Size:</p>
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(item)}
                  className={`w-9 h-9 border rounded-md text-sm font-medium transition-colors duration-200  ${selectedSize === item? "bg-black text-white border-black" : "bg-white text-black border-gray-300 hover:bg-gray-100"}`}>
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between ">  
              <div className="flex items-center">
                {/* decr button */}
                <button className="w-11 h-11 border border-black rounded-l-md flex items-center justify-center text-xl font-medium 
               hover:bg-black hover:text-white transition-colors duration-200" onClick={() => count > 0 && setCount(count - 1)}>-</button>

                {/* display input field */}
                <input
                  type="text"
                  value={count}
                  className="w-16 h-11 text-center border-t border-b border-black outline-none text-base"
                  onChange={(e) => setCount(Number(e.target.value))}
                />

                {/*incr button */}
                <button
                  className="w-11 h-11 border border-black rounded-r-md flex items-center justify-center text-xl font-medium 
               hover:bg-black hover:text-white transition-colors duration-200"
                  onClick={() => setCount(count + 1)}>+
                </button>
              </div>

              <div>
                {/* add to cart button */}
                <button
                  className="py-2 px-10 rounded text-black border-1 bg-white hover:bg-black hover:text-white transition-colors"
                  onClick={() => addToCart(productId, selectedSize, count)}>Add to Cart
                </button> 
              </div>
           
            </div>

        
          </div>


      </div>
      <div>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default Product;
