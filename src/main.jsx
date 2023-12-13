import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NetworkError from "./ErrorPage/NetworkError.jsx";
import Error404 from "./ErrorPage/Error404.jsx";

const routers = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <NetworkError/>,
        children: [
            {
                path: '/*',
                element: <Error404/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={routers} />
  </React.StrictMode>,
)
