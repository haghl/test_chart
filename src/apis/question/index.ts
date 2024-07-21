import { IKmptMember, IMemberScore } from '@/types'
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
  saveScore: async (requestData: IMemberScore) => {
    try {
      const { data } = await request<IMemberScore, any>({
        method: 'post',
        url: `/kmpt/save-score`,
        requestBody: requestData,
      })

      return data
    } catch (error) {
      throw error
    }
  },
}
