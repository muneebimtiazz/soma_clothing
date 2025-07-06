import { useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';

const Bestseller = () => {
  const { products } = useContext(ShopContext);
  
    const [bestProduct,setBestProduct]=useState([]);
    const [visibleCount, setVisibleCount] = useState(15);
  
    const loadMoreProducts = () => {
      setVisibleCount(prevCount => prevCount + 5);
    };
  
    useEffect(()=>{
      const bestseller=products.filter((item)=>(item.bestseller));
      setBestProduct(bestseller.slice(0,visibleCount))
    },[products,visibleCount])
    
    return (
    <div className="mx-auto px-10 mt-10">

      {/* heading and paragraph */}
      <div className='pb-10'>
        <p className='text-sm sm:text-base text-center text-gray-500'>Trending styles</p>
        <h1 className='text-2xl sm:text-4xl text-center font-semibold uppercase'>#Men SS'25 Hot In</h1>
        <p className='text-sm sm:text-base text-center text-gray-500'>The season's boldest styles—engineered for heat, built for statement-making moments</p>
      </div>        
      
      {/* products display */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
        {bestProduct.map((item)=>{
          return(
            <ProductItem key={item._id} id={item._id} name={item.name} price={item.price} image={item.image} size={item.sizes} discount={item.discountPercentage} og={item.originalPrice}/>
          );
        })}
      </div>
      <div className="flex justify-center p-10">
          <button 
            onClick={loadMoreProducts}
            className="py-2 px-15 rounded text-black border-1 bg-white hover:bg-black hover:text-white transition-colors">
            Show More
          </button>
        </div>
    </div>
    )
}

export default Bestseller