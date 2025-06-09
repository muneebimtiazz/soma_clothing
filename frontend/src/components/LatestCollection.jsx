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
    <div className="container mx-auto py-10">

      {/* heading and paragraph */}
      <div className='p-10'>
      <h1 className='text-3xl text-gray-950 text-center font-bold'>
        Latest Collections
      </h1>
      <p className='text-center text-gray-600'>The season's boldest styles—engineered for heat, built for statement-making moments.</p>
      </div>
      {/* display products */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-5 py-5'>
        {latestProduct.map((item)=>{
          return(
            <ProductItem key={item.__id} id={item.__id} name={item.name} price={item.price} image={item.image} size={item.sizes}/>
          );
        })}
      </div>
      <div className="flex justify-center mt-8">

        {/* button show more */}
          <button 
            onClick={loadMoreProducts}
            className="py-2 px-20 text-black border-1 bg-white hover:bg-black hover:text-white transition-colors">
            Show More
          </button>
        </div>
    </div>
  )
}

export default LatestCollection