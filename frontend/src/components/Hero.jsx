import web from '../assets/hero-web.avif'
import mob from '../assets/hero-mob.avif'

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