import { NavLink } from 'react-router-dom'
const Login = () => {
  return (
    <div className='flex items-center bg-white mt-30 sm:mt-40'>
      <div className='w-[90%] md:w-[40%] px-5 sm:px-20 mx-auto text-center space-y-1'>
        <p>Welcome Back!</p>
        <p className='text-lg'>Get 50% off sale at soma clothing</p>
        <form className='flex flex-col gap-4'>
          <input type="text" placeholder='Email' className='w-full rounded bg-gray-100 px-4 py-3 text-sm text-black placeholder-[#201E1F] focus:outline-none focus:ring-2 focus:ring-[#201E1F]'/>
          <input type="password" placeholder='Password' className='w-full rounded bg-gray-100 px-4 py-3 text-sm text-black placeholder-[#201E1F] focus:outline-none focus:ring-2 focus:ring-[#201E1F]'/>
      <div className="flex justify-center">
          <button 
            className="py-2 w-full rounded text-black border-1 bg-white hover:bg-black hover:text-white transition-colors">
            Show More
          </button>
      </div>
        </form>

        <div className='text-left text-sm mt-3'>
          <p>Don't have a account?<span className='text-blue-800 underline'><NavLink to='/register'>Register</NavLink></span></p>
          <p>Forgot Password?<span className='text-blue-800 underline'><NavLink to='/reset'>Reset password</NavLink></span></p>
        </div>
      </div>
    </div>

  )
}

export default Login