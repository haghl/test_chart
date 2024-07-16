import axios, { AxiosResponse } from 'axios'
import { RequestParams } from './type'

export const client = axios.create({
  // baseURL: `https://test-api.ootdkorea.com`,
})

client.interceptors.request.use(async (config) => {
  return config
})

client.interceptors.response.use(
  async (response) => {
    // const { headers } = response;

    // if (headers.authorization) {
    //   await setSessionToken(headers.authorization);
    // }
    return response
  },
  async (error: unknown) => {
    // const { response } = error as AxiosError<ErrorResponseType>;
    // const { code } = error as AxiosError<ErrorResponseType>;

    // if (response?.data?.statusCode && response?.data?.statusCode > 499) {
    //   serverError();
    // }

    return Promise.reject(error)
  }
)

const request = async <R, T>({ method, url, requestParams, requestBody }: RequestParams<R>): Promise<AxiosResponse<T>> => {
  const headers = {}

  switch (method) {
    case 'get':
      return client.get(url, { params: requestParams, headers })
    case 'post':
      return client.post(url, requestBody, {
        params: requestParams,
        headers,
      })
    case 'put':
      return client.put(url, requestBody, { params: requestParams, headers })
    case 'delete':
      return client.delete(url, { data: requestBody, params: requestParams })
    default:
      return Promise.reject(new Error('Invalid HttpMethod'))
  }
}

export default request
