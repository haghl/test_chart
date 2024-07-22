import { IQuestion, IScore } from '@/types'

export const calculateScores = (questionList: IQuestion[]): IScore[] => {
  const scoreMap = new Map()

  questionList.forEach((question) => {
    const { type, value } = question
    if (value) {
      const numericValue = parseInt(value.toString(), 10) // value가 숫자 문자열이라고 가정

      if (scoreMap.has(type)) {
        scoreMap.set(type, scoreMap.get(type) + numericValue)
      } else {
        scoreMap.set(type, numericValue)
      }
    }
  })

  const scores = Array.from(scoreMap.entries()).map(([type, value]) => ({
    testTypeId: type,
    number: value,
  }))

  return scores
}
