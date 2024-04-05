import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Personagens from './Personagens.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Personagens/:id',
    element:<Personagens />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
