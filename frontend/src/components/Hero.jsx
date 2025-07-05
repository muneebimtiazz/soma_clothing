import web from '../assets/hero-web-1.png'
import mob from '../assets/hero-mob-1.png'

const Hero = () => {
  return (
        <div>
            <div className='hidden sm:block mx-auto w-full'>
              <img className=' w-full h-full object-cover' src={web} alt="section" />
            </div>

            <div className='block sm:hidden relative w-full mx-auto'>
              <img className='w-full h-full object-cover' src={mob} alt="section" />
            </div>
        </div>
  )
}

export default Hero