
const Header = (props) => {
  return (

    <div className='text-center leading-none my-10'>

        <div className='hidden sm:block relative w-full mx-auto'>
          <img className='w-full h-full object-cover' src={props.src}/>
          <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-5'>
            <p className='font-extrabold text-4xl sm:text-6xl lg:text-8xl text-white uppercase'>{props.title}</p>
            <p className='font-extrabold text-sm sm:text-base text-white uppercase mt-2'>{props.subtitle}</p>
          </div>
        </div>
        <div className='block sm:hidden relative w-full mx-auto'>
          <img className='w-full h-full object-cover' src={props.src2}/>
          <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-5'>
            <p className='font-extrabold text-4xl sm:text-6xl lg:text-8xl text-white uppercase'>{props.title}</p>
            <p className='font-extrabold text-sm sm:text-base text-white uppercase mt-2'>{props.subtitle}</p>
          </div>
        </div>

    </div>
      
  )
}

export default Header