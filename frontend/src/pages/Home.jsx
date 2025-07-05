import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import Bestseller from '../components/Bestseller'
import webH1 from '../assets/images/05072512.avif'
import mobH1 from '../assets/images/05072511.avif'
import Header from '../components/Header.jsx'
import webH2 from '../assets/images/05072510.avif'
import mobH2 from '../assets/images/0507254.avif'


const Home = () => {
  return (
    <div>
        <Hero/>
        <LatestCollection/>
        <Header src={webH1} src2={mobH1} title={'Winter Clearance Sale'} subtitle={'Up to 50% Off Last Chance to Grab Cold-Weather Favorites!'}/>
        <Bestseller/>
        <Header src={webH2} src2={mobH2} title={'New Summer Collection'} subtitle={'Dive into the Season with Our Hottest New Arrivals'}/>
    </div>
    
  )
}

export default Home