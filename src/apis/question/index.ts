import { IKmptMember } from '@/types'
import request from '@/utils/network'

export const Kmpt = {
  createMember: async (requestData: IKmptMember) => {
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
  },
}
