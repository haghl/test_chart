import { Global } from '@emotion/react'
import CircularProgress from '@mui/material/CircularProgress'
import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Outlet, useLocation } from 'react-router-dom'

import { Layout } from '@components/organism'
import ErrorPage from '@pages/Error'
import { baseStyle } from '@styles/global'
import { ThemeProvider } from '@mui/material'

function App() {
  const location = useLocation()
  const { reset } = useQueryErrorResetBoundary()

  return (
    // <ThemeProvider theme={theme}>
    <Layout>
      <ErrorBoundary resetKeys={[location.pathname]} onReset={reset} FallbackComponent={ErrorPage}>
        <Suspense fallback={<CircularProgress />}>
          <Global styles={baseStyle} />
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </Layout>
    // </ThemeProvider>
  )
}

export default App
