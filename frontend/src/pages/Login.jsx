
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex items-center justify-center px-10 sm:px-0 py-10 sm:py-15'>
      <div className=' w-full max-w-sm space-y-5 mt-10 mb-10 sm:mt-15 sm:mb-15'>
        <div>
          <p className='text-center'>Welcome Back!</p>
          <p className='text-2xl font-semibold text-center mb-6'>Login</p>
          <div className='space-y-4 mb-4'>
            <input className='w-full px-4 py-3 bg-gray-100 ' type="email" placeholder='Email' />
            <input className='w-full px-4 py-3 bg-gray-100 ' type="password" placeholder='Password' />
          </div>
          <button className="w-full px-4 py-3 text-black border-1 bg-white hover:bg-black hover:text-white transition-colors">
            Sign in
          </button>
        </div>

        <div>
          <div className='flex'>
            <p>Don't have a account? </p>
            <NavLink to='signup'><p className='text-blue-600 underline'>Sign up</p></NavLink>
          </div>
          <div className='flex'>
            <p>Forgot Password? </p>
            <NavLink to='/reset'><p className='text-blue-600 underline'>Reset password</p></NavLink>
          </div>
        </div>

        
        
      </div>
    </div>

  )
}

export default Login