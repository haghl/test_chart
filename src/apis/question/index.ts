import { IAnswer, IKmptMember, IQuestion } from '@/types'
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
  saveScore: async (id: number, requestData: { scores: IQuestion[] }) => {
    try {
      const { data } = await request<{ scores: IQuestion[] }, { scores: { scores: IQuestion[] } }>({
        method: 'put',
        url: `/kmpt/${id}/scores`,
        requestBody: requestData,
      })

      return data.scores.scores
    } catch (error) {
      throw error
    }
  },

  getMember: async (phoneNumber: string) => {
    try {
      const { data } = await request<{ phoneNumber: string }, ResponseType<{ id: number }>>({
        method: 'get',
        url: `/kmpt/member`,
        requestParams: { phoneNumber },
      })

      return data
    } catch (error) {
      throw error
    }
  },
  getMemberScores: async (id: number) => {
    try {
      const { data } = await request<null, ResponseType<IKmptMember>>({
        method: 'get',
        url: `/kmpt/${id}/scores`,
      })

      return data
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
