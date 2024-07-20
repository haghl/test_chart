import request from '@/utils/network'

interface IKmptMember {
  id?: number
  name: string
  age: number
  phoneNumber: string
}

export const postData = async (requestData: IKmptMember) => {
  try {
    const { data } = await request<IKmptMember, IKmptMember>({
      method: 'post',
      url: `/kmpt/member`,
      requestBody: requestData,
    })

    return data
  } catch (error) {
    throw error
  }
}
