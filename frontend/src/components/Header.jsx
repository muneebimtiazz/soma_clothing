
const Header = (props) => {
  return (

      <div className="py-10">
        <div className='hidden sm:block mx-auto w-[90%]'>
          <img className=' w-full h-full object-cover' src={props.src} alt="section" />
        </div>

        <div className='block sm:hidden relative w-full mx-auto'>
          <img className='w-full h-full object-cover' src={props.src2} alt="section" />
        </div>
      </div>
      
  )
}

export default Header