import { IAnswer, IKmptMember, IScore } from '@/types'
import request from '@/utils/network'
import { ResponseType } from '@/utils/network/type'

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
  saveScore: async (id: number, requestData: { scores: IScore[] }) => {
    try {
      const { data } = await request<{ scores: IScore[] }, { scores: { scores: IScore[] } }>({
        method: 'put',
        url: `/kmpt/${id}/scores`,
        requestBody: requestData,
      })

      return data.scores.scores
    } catch (error) {
      throw error
    }
  },

  getKmpt: async () => {
    try {
      const { data } = await request<null, ResponseType<{ content: IAnswer[] }>>({
        method: 'get',
        url: `/kmpt`,
      })

      return data.content.content
    } catch (error) {
      throw error
    }
  },
}
