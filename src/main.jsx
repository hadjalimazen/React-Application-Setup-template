import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'src/index.css'
import App from 'src/App.jsx'
import { Provider } from 'react-redux'
import store from 'src/store/index.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DASHBOARD, HOME, LOGIN, OVERVIEW } from 'src/routingpaths.js'
import Login from 'src/pages/login/index.jsx'
import NotFoundPage from './pages/notfound'
import './i18n/index.js'
import Dashboard from './dashboard'
import Overview from './pages/dashboard/overview'

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
    path: DASHBOARD,
    element: <Dashboard />,
    children: [
      {
        path: OVERVIEW,
        element: <Overview />,
      },
    ],
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
