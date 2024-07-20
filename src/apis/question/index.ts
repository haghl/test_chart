import request from '@/utils/network'

interface IKmptMember {
  name: string
  age: number
  phoneNumber: string
}

export const postData = async (requestData: IKmptMember) => {
  try {
    const { data } = await request<IKmptMember, null>({
      method: 'post',
      url: `/kmpt/member`,
      requestBody: requestData,
    })

    return data
  } catch (error) {
    throw error
  }
}
