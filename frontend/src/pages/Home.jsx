import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import Bestseller from '../components/Bestseller'
import winterWeb from '../assets/winter-web.avif'
import winterMob from '../assets/winter-mob.avif'
import Header from '../components/Header.jsx'

const Home = () => {
  return (
    <div>
        <Hero/>
        <LatestCollection/>
        <Header src={winterWeb} src2={winterMob}/>
        <Bestseller/>
    </div>
    
  )
}

export default Home