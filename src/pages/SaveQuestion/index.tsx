import { Kmpt } from '@/apis/question'
import { Header, Question } from '@/components/organism'
import Last from '@/components/organism/LastPage'
import { IQuestion, IResult, IScore } from '@/types'
import { calculateScores } from '@/utils/calculateScores'
import styled from '@emotion/styled'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useNavigate } from 'react-router-dom'
import 'swiper/css'

const SaveQuestion = () => {
  const id = sessionStorage.getItem('memberId')
  const navigate = useNavigate()

  const logicScore = (dataScores: IQuestion[] | IScore[]) => {
    let scores: IQuestion[]
    let calculScores: IScore[]
    const isBool = dataScores.length > 0 && (dataScores[0] as IScore).testTypeId !== undefined
    if (isBool) {
      const jsonScore = sessionStorage.getItem('scores')
      scores = jsonScore ? JSON.parse(jsonScore) : []
      calculScores = calculateScores(scores)
    } else {
      scores = data.content.scores as IQuestion[]
      calculScores = calculateScores(scores)
    }

    return calculScores
  }

  const { data } = useSuspenseQuery({
    queryKey: ['getResultScore', id],
    queryFn: async () => {
      const parseId: number = JSON.parse(id!)
      const response = await Kmpt.getMemberScores(parseId)

      return response
    },
  })

  const { data: score } = useSuspenseQuery({
    queryKey: ['getScoreLast'],
    queryFn: async () => {
      const response = await Kmpt.getKmpt()
      return response
    },
    select: (response) => {
      const calculScores = logicScore(data.content.scores!!)
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

  const handleClickReset = () => {
    sessionStorage.clear()
    navigate('/', { replace: true })
  }

  return (
    <Swiper
      onActiveIndexChange={(swiper) => {
        console.log('swiper', swiper.activeIndex)
        if (swiper.activeIndex === 0) {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }}
    >
      <SwiperSlide>
        <Last scores={score} />
      </SwiperSlide>

      {data.content.scores && (data.content.scores[0] as IQuestion).question !== undefined && (
        <SwiperSlide>
          <Box>
            <Header />
            <Button onClick={handleClickReset}>처음으로</Button>
          </Box>
          <QuestionBox>
            {(data.content.scores as IQuestion[]).map((question) => {
              return <Question key={question.question} index={question.index} question={question.question} value={question.value} disable={true} />
            })}
          </QuestionBox>
        </SwiperSlide>
      )}
    </Swiper>
  )
}

const Box = styled.div`
  position: relative;
`
const QuestionBox = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 50px auto 200px;
  display: flex;
  flex-direction: column;
  row-gap: 60px;
  @media (max-width: 1000px) {
    margin: 30px auto 100px;
    padding: 0 15px;
    row-gap: 25px;
  }
`
const Button = styled.div`
  width: 155px;
  height: 65px;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #004c2f;
  border-radius: 15px;
  font-weight: 900;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  @media (max-width: 1000px) {
    width: 100px;
    height: 40px;
    border-radius: 10px;
    font-size: 14px;
  }
`

export default SaveQuestion
