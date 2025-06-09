import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import Bestseller from '../components/Bestseller'
import Banner from '../assets/home_banner_1.png'
import Banner_2 from '../assets/home_banner_2.png'




const Home = () => {
  return (
    <div>
        <Hero/>
        <LatestCollection/>
        <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8'>
            <img src={Banner} alt="banner" className="w-full h-auto object-contain" />
        </div>
        <Bestseller/>

        <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8'>
          <img src={Banner_2} alt="banner" className="w-full h-auto object-contain" />
        </div>
        

    </div>
    
  )
}

export default Home