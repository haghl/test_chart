import App from '@/App'
import HomePage from '@/pages/Home'
import QuestionPage from '@/pages/Question'
import ResultPage from '@/pages/Result'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/question', element: <QuestionPage /> },
        { path: '/result', element: <ResultPage /> },
      ],
    },
  ],
  { basename: 'https://haghl.github.io/test_chart' }
)

export default router
