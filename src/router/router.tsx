import App from '@/App'
import HomePage from '@/pages/Home'
import ResultPage from '@/pages/Result'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/result', element: <ResultPage /> },
    ],
  },
])

export default router
