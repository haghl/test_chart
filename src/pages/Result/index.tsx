import { Kmpt } from '@/apis/question'
import Last from '@/components/organism/LastPage'
import { IQuestion, IResult, IScore } from '@/types'
import { calculateScores } from '@/utils/calculateScores'
import { useSuspenseQuery } from '@tanstack/react-query'
import React from 'react'

const ResultPage: React.FC = () => {
  const { data: score } = useSuspenseQuery({
    queryKey: ['getKmpt'],
    queryFn: async () => {
      const response = await Kmpt.getKmpt()
      return response
    },
    select: (response) => {
      const scores = sessionStorage.getItem('scores')
      const parseScores: IQuestion[] = scores ? JSON.parse(scores) : []
      const calculScores: IScore[] = calculateScores(parseScores)
      const res: IResult[] = response.map((answer) => {
        const score: IResult = { ...answer, score: 0 }
        const myScore = calculScores.find((score) => score.testTypeId === answer.number)
        if (myScore) {
          score.score = myScore.number
        }
        return score
      })

      const hightType = res.reduce((max, current) => {
        return current.score > max.score ? current : max
      }, res[0])

      return { hight: hightType, data: res }
    },
  })

  return <Last scores={score} />
}

export default ResultPage
