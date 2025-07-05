import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import RelatedProducts from "../components/RelatedProducts";
import { FaRegStar } from "react-icons/fa";


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
        if (item._id === productId) {
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
    <div className="w-[90%] mx-auto mt-10 sm:mt-5">
      <div className="flex flex-col sm:flex-row justify-center">
        <div className="space-y-4 w-full sm:p-10">

          <div className="overflow-hidden relative pt-[110%] group rounded">
            <img
              src={image}
              alt="Selected"
              className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="flex gap-1 sm:gap-3 flex-wrap items-center justify-between sm:justify-center">
            {productData.image.map((item, index) => (
              <div
                key={index}
                onClick={() => setImage(item)}
                className="overflow-hidden w-20 cursor-pointer group rounded"
              >
                <img
                  src={item}
                  alt={`thumb-${index}`}
                  className=" w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full p-5 sm:p-10">
          <p>Home / {productData.Category} / {productData._id}</p>
          {productData.stock>5?<p className="text-sm">Stock: <span className="text-green-500">{productData.stock}</span> avaliable</p>:<p className="text-sm">Stock: <span className="text-red-500">{productData.stock}</span> avaliable</p>}
          
          <p className="text-3xl font-bold">{productData.name}</p>
          <p className="font-semibold">Price: {productData.price}{currency}</p>
          <p className="text-sm">Material: {productData.material}</p>
          <p className="text-sm text-justify">{productData.description}</p>
          <div className="flex items-center gap-2 mb-10">
            <span><FaRegStar/></span>
            <span>{productData.rating}</span>
            <span>({productData.reviews})</span>
          </div>
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(item)}
                  className={`w-11 h-11 border rounded text-sm transition-colors duration-200  ${selectedSize === item? "bg-black text-white border-black" : "bg-white text-black hover:bg-gray-100"}`}>
                  {item}
                </button>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-5 sm:space-y-0  ">  
              <div className="flex items-center">
                <button className="w-11 h-11 border border-black rounded-l-md flex items-center justify-center text-xl font-medium 
               hover:bg-black hover:text-white transition-colors duration-200" onClick={() => count > 0 && setCount(count - 1)}>-</button>
                <input
                  type="text"
                  value={count}
                  className="w-16 h-11 text-center border-t border-b border-black outline-none text-base"
                  onChange={(e) => setCount(Number(e.target.value))}
                />
                <button
                  className="w-11 h-11 border border-black rounded-r-md flex items-center justify-center text-xl font-medium 
               hover:bg-black hover:text-white transition-colors duration-200"
                  onClick={() => setCount(count + 1)}>+
                </button>
              </div>
              
              <button
                className="py-2 px-10 rounded text-black border-1 bg-white hover:bg-black hover:text-white transition-colors"
                onClick={() => addToCart(productId, selectedSize, count)}>Add to Cart
              </button>

            </div>

            <div className="text-justify text-xs">
              <p><span className="underline">Customers may return items within 30 days of delivery for a full refund or exchange.</span> Items must be unused, in their original condition, and returned with all original packaging. Return shipping costs may apply unless the item was received damaged or incorrect.</p>
              <p><span className="underline">We offer free standard shipping on all orders over $100 (excluding taxes and discounts).</span>Orders below $100 will incur a standard shipping fee based on location. This offer applies to domestic shipping only.</p>
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