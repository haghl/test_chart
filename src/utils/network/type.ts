export type HttpMethodType = 'get' | 'post' | 'put' | 'delete'
export interface RequestParams<R> {
  method: HttpMethodType
  url: string
  requestBody?: R
  requestParams?: R
}

export interface ResponseType<T> {
  code: string
  value?: string
  content: T
}
