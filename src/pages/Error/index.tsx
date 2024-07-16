import { FallbackProps } from 'react-error-boundary'

const ErrorPage = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div>
      <p>{error.message}</p>

      <button className="btn btn-danger" onClick={() => resetErrorBoundary()}>
        새로고침
      </button>
    </div>
  )
}

export default ErrorPage
