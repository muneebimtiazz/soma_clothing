import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import loader from './assets/images/Spinner-2.gif'
import Layout from './components/Layout'


// lazy loading
const Home=lazy(()=>import('./pages/Home'))
const Shop=lazy(()=>import('./pages/Shop'))
const About=lazy(()=>import('./pages/About'))
const Contact=lazy(()=>import('./pages/Contact'))
const Product=lazy(()=>import('./pages/Product'))
const Cart=lazy(()=>import('./pages/Cart'))
const Login=lazy(()=>import('./pages/Login'))
const NotFound=lazy(()=>import('./pages/NotFound'))
const Checkout=lazy(()=>import('./pages/Checkout'))

    const router=createBrowserRouter( 
      [{
      element:<Layout/>,
      children:[
      {path:'/',element:<Home/>},
      {path:'/shop',element:<Shop/>},
      {path:'/about',element:<About/>},
      {path:'/contact',element:<Contact/>},
      {path: '/product/:productId',element:<Product/> },
      {path: '/cart',element:<Cart/>},
      {path: '/login',element:<Login/>},
      {path: '/checkout',element: <Checkout/>},
      {path:'*',element: <NotFound/>}]
      }]
    )

  function App() {
    return (
      <div className='min-h-screen'>
        <Suspense fallback={<div className="h-screen w-full flex justify-center items-center"><img className='w-20 h-20 object-contain' src={loader} alt="loading" /></div>}>
          <RouterProvider router={router} />
        </Suspense>
      </div>
    
    )
  }
  export default App
