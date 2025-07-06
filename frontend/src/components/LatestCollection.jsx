import { useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);

  const [latestProduct,setLatestProduct]=useState([]);
  const [visibleCount, setVisibleCount] = useState(15);

  const loadMoreProducts = () => {
    setVisibleCount(prevCount => prevCount + 5);
  };

  useEffect(()=>{
    setLatestProduct(products.slice(0,visibleCount))
  },[products,visibleCount])

  return (
    <div className="mx-auto mb-10">
      <div className='p-10'>
        <h1 className='text-2xl sm:text-4xl text-center font-semibold uppercase'>Latest Collections</h1>
        <p className='text-sm sm:text-base text-center text-gray-500'>The season's boldest styles engineered for heat, built for statement-making moments.</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-10 pb-10'>
        {latestProduct.map((item)=>{
          return(
            <ProductItem key={item._id} id={item._id} name={item.name} price={item.price} image={item.image} size={item.sizes} discount={item.discountPercentage} og={item.originalPrice} />
          );
        })}
      </div>

      <div className="flex justify-center">
          <button 
            onClick={loadMoreProducts}
            className="py-2 px-15 rounded text-black border-1 bg-white hover:bg-black hover:text-white transition-colors">
            Show More
          </button>
      </div>
    </div>
  )
}

export default LatestCollection