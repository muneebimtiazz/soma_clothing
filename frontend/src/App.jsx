import './App.css'
import {lazy, Suspense  } from 'react';

// import Home from './pages/Home'
// import Shop from './pages/Shop'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Product from './pages/Product'
// import Cart from './pages/Cart'
// import Login from './pages/Login'
// import NotFound from './pages/NotFound'
// import Checkout from './pages/Checkout'
import { ToastContainer} from 'react-toastify';
import Layout from './components/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

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

const Loading = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);


  const router=createBrowserRouter(
    // [{
    // element:<Layout/>,
    // children:[
    // {path:'/',element: <Home/>},
    // {path:'/shop',element:<Shop/>},
    // {path:'/about',element:<About/>},
    // {path:'/contact',element:<Contact/>},
    // {path: '/product/:productId',element:<Product /> },
    // {path: '/cart',element:<Cart /> },
    // {path: '/login',element:<Login /> },
    // {path: '/checkout',element:<Checkout /> },
    // {path:'*',element:<NotFound/>}]
    // }]

    
    [{
    element:<Layout/>,
    children:[
    {path:'/',element: <Suspense fallback={<loading />}><Home/></Suspense> },
    {path:'/shop',element:<Suspense fallback={<loading />}><Shop/></Suspense>},
    {path:'/about',element:<Suspense fallback={<loading/>}> <About/></Suspense>},
    {path:'/contact',element:<Suspense fallback={<loading/>}> <Contact/></Suspense>},
    {path: '/product/:productId',element:<Suspense fallback={<loading/>}> <Product/></Suspense> },
    {path: '/cart',element:<Suspense fallback={<loading/>}> <Cart/></Suspense> },
    {path: '/login',element:<Suspense fallback={<loading/>}> <Login/></Suspense> },
    {path: '/checkout',element:<Suspense fallback={<loading/>}> <Checkout/></Suspense> },
    {path:'*',element:<Suspense fallback={<loading/>}> <NotFound/></Suspense>}]
    }]
  )

function App() {
  return (
    <div>
        <ToastContainer/>
        <RouterProvider router={router}/>
    </div>
  
  )
}

export default App
