import web from '../assets/images/0507256.avif'
import mob from '../assets/images/0507253.avif'

const Hero = () => {
  return (
    <div className='text-center leading-none space-y-5'>

        <div className='hidden sm:block relative w-full mx-auto'>
          <img className='w-full h-full object-cover' src={web} alt="section" />
          <div className='absolute top-10 text-center '>
            <p className='font-extrabold px-5 text-9xl text-white uppercase '>New Styles Added Upto 50% Off</p>
            <p className='font-extrabold text-sx px-2 text-white  uppercase'>New Arrivals Not Included</p>
          </div>
        </div>
        
        <div className='block sm:hidden relative w-full mx-auto'>
          <img className='w-full h-full object-cover' src={mob} alt="section" />
          <div className='absolute top-10 text-center '>
            <p className='font-extrabold px-5 text-5xl text-white uppercase '>New Styles Added Upto 50% Off</p>
            <p className='font-extrabold text-sx px-2 text-white  uppercase'>New Arrivals Not Included</p>
          </div>
        </div>

    </div>
  )
}

export default Hero