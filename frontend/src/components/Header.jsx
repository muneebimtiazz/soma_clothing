import main from '../assets/home_banner_1.png'

const Header = (props) => {
  return (
    <div className='w-full relative'>
      <img src={main} alt="banner" className="w-full h-full object-contain" />
      <div className='absolute inset-0 flex flex-col items-center justify-center '>
          <p className='text-white text-3xl pb-3 md:text-6xl'>{props.title}</p>
      </div>
      
    </div>
  )
}

export default Header