import { useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';
import { TbFilterPause } from "react-icons/tb";
import { MdOutlineSort } from "react-icons/md";

const ShopItems = () => {
  const { products  } = useContext(ShopContext);  

  const [visibleCount, setVisibleCount] = useState(40); 
  const [category,setCategory]=useState('')
  const [sortby,setSortBy]=useState('')

  const handleCategory=(e)=>{
      setCategory(e.target.value)
  }
  const handleSortBy=(e)=>{
      setSortBy(e.target.value)
  }

  const processedProducts = products
    .filter(item => category === '' || item.Category === category)
    .sort((a, b) => {
      if (sortby === 'high to low') return b.price - a.price;
      if (sortby === 'low to high') return a.price - b.price;
      return 0;
    });

  const visibleProducts = processedProducts.slice(0, visibleCount);
  
  const loadMoreProducts = () => {
    setVisibleCount(prevCount => prevCount + 20);
  };
  useEffect(()=>{
    setVisibleCount(40)
  },[category,sortby])

return (
  <>
  {/* filter header */}
  <div className='bg-black text-white flex items-center justify-center text-sm space-x-5 sm:space-x-150 py-2'>
    
    <div className='flex items-center space-x-2'>
      <div className='flex items-center space-x-2'>
        <TbFilterPause className='text-base' />
        <p>Filter</p>
        {/* filter */}
        <select className='bg-white text-black rounded w-20' value={category} onChange={handleCategory}>
          <option  value="">Default</option>
          <option value="Polo">Polo</option>
          <option value="Shirts">Shirts</option>
          <option value="Jeans">Jeans</option>
        </select>
      </div>

      <div>
          <p className='hidden sm:block'>|&nbsp; Showing 1-{visibleProducts.length} of {processedProducts.length} results</p>
      </div>
    </div>

    <div className='flex items-center space-x-2'>
      <MdOutlineSort className='text-base'/>
      <p>Sortby</p>
      {/* sortby */}
      <select className='bg-white rounded text-black w-20' value={sortby} onChange={handleSortBy}>
        <option value="" className='text-xs'>Relavent</option>
        <option value="high to low" >High-to-Low</option>
        <option value="low to high">Low-to-High</option>
      </select>
    </div>
    
  </div>
      <div>
      <p className='flex sm:hidden text-sm justify-evenly mt-10'>&nbsp; Showing 1-{visibleProducts.length} of {processedProducts.length} results</p>
    </div>
      
  {/* shop items */}
  <div className="container mx-auto px-4 py-8">
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-5 py-5'>
      {visibleProducts.map((item)=>{
        return(
          <ProductItem key={item.__id} id={item.__id} name={item.name} price={item.price} image={item.image} size={item.sizes}/>
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
  </>
);
}

export default ShopItems