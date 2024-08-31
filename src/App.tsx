import { Global } from '@emotion/react'
import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { Suspense, useEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { Layout, Loading } from '@components/organism'
import ErrorPage from '@pages/Error'
import { baseStyle } from '@styles/global'
import ScrollToTop from './utils/ScrollTop'

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const { reset } = useQueryErrorResetBoundary()

  useEffect(() => {
    const memberId = sessionStorage.getItem('memberId')

    if (!memberId) {
      // userId가 없으면 메인화면으로 리다이렉트
      navigate('/')
    }
  }, [navigate])

  return (
    // <ThemeProvider theme={theme}>
    <Layout>
      <ErrorBoundary resetKeys={[location.pathname]} onReset={reset} FallbackComponent={ErrorPage}>
        <Suspense fallback={<Loading />}>
          <Global styles={baseStyle} />
          <ScrollToTop />
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </Layout>
    // </ThemeProvider>
  )
}

export default App
