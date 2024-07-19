import { Global } from '@emotion/react'
import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Outlet, useLocation } from 'react-router-dom'

import { Layout, Loading } from '@components/organism'
import ErrorPage from '@pages/Error'
import { baseStyle } from '@styles/global'

function App() {
  const location = useLocation()
  const { reset } = useQueryErrorResetBoundary()

  return (
    // <ThemeProvider theme={theme}>
    <Layout>
      <ErrorBoundary resetKeys={[location.pathname]} onReset={reset} FallbackComponent={ErrorPage}>
        <Suspense fallback={<Loading />}>
          <Global styles={baseStyle} />
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </Layout>
    // </ThemeProvider>
  )
}

export default App
