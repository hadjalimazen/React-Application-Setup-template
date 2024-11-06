import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import index.css
import 'src/index.css'
import App from 'src/App.jsx'
import { Provider } from 'react-redux'
import store from 'src/store/index.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HOME, LOGIN } from 'src/routingpaths.js'
import Login from 'src/pages/login/index.jsx'
import NotFoundPage from './pages/notfound'
import './i18n/index.js'

const router = createBrowserRouter([
  {
    path: HOME,
    element: <Provider store={store}><App /> </Provider>,
  },
  {
    path: LOGIN,
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
