import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Router, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about_us/AboutUs.jsx'
import Contact from './components/contact_us/ContactUs.jsx'
import User from './components/user/User.jsx'
// import GitHub from './components/gitHub/GitHub.jsx'
import GitHub, { gitHubInfoLoader } from './components/gitHub/GitHub.jsx'

//1st method
const router=createBrowserRouter([
  {
    path:'',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },

      {
        path:"about",
        element:<About/>
      },

      {
      path:"contact",
      element:<Contact/>
      },

      {
        
        path:"github",
        element:<GitHub/>,
        loader: ({gitHubInfoLoader}) => 
        fetch('https://api.github.com/users/Sohail22515', {
            signal:gitHubInfoLoader,
          }),
        },

      {
        
        path:"user/:userid",
        element:<User/>
        },

  ]
  }
])


// 2nd Method
// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>
//       <Route path='' element={<Home/>}/>
//       <Route path='/about' element={<About/>}/>
//       <Route path='/about' element={<Contact/>}/>
//     </Route>
//   )
// )


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
