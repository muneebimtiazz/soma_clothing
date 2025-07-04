import { useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';


const RelatedProducts = () => {
  const { products } = useContext(ShopContext);

  const [latestProduct,setLatestProduct]=useState([]);
  const [visibleCount, setVisibleCount] = useState(5);

  const loadMoreProducts = () => {
    setVisibleCount(prevCount => prevCount + 5);
  };

  useEffect(()=>{
    setLatestProduct(products.slice(0,visibleCount))
  },[products,visibleCount])



  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className='text-2xl sm:text-4xl text-center font-semibold uppercase'>Related Products</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-5 py-10'>
        {latestProduct.map((item)=>{
          return(
            <ProductItem key={item.id} id={item.__id} name={item.name} price={item.price} image={item.image} size={item.sizes}/>
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

export default RelatedProducts