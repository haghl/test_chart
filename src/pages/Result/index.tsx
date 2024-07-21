import { Kmpt } from '@/apis/question'
import { IResult, IScore } from '@/types'
import PyramidImage from '@assets/image/pyramid.png'
import PyramidImageMobile from '@assets/image/pyramidMobile.png'
import styled from '@emotion/styled'
import { useMediaQuery } from '@mui/material'
import { useSuspenseQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { Header } from './components'
import ChartComponent from './components/Chart'
import Description from './components/Description'
import TypeBox from './components/TypeBox'

const ResultPage: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:420px)')
  const [active, setActive] = useState(1)
  const { data: score } = useSuspenseQuery({
    queryKey: ['getKmpt'],
    queryFn: async () => {
      const response = await Kmpt.getKmpt()

      return response
    },
    select: (response) => {
      const scores = sessionStorage.getItem('scores')
      const parseScores: IScore[] = scores ? JSON.parse(scores) : []
      const res: IResult[] = response.map((answer) => {
        const score: IResult = { ...answer, score: 0 }
        const myScore = parseScores.find((score) => score.testTypeId === answer.number)
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

  useEffect(() => {
    if (score?.hight) {
      setActive(score.hight.number)
    }
  }, [score.hight])

  return (
    <>
      <Header type={score.hight} />
      <Body>
        <ChartComponent scoreData={score.data} />
        <Description />
        <Pyramid src={isMobile ? PyramidImageMobile : PyramidImage} />
        <TypeWrap>
          {score.data.map((data, index) => {
            return (
              <TypeBox
                key={index}
                data={data}
                active={active === index}
                onClick={() => {
                  setActive(index)
                }}
              />
            )
          })}
        </TypeWrap>
      </Body>
    </>
  )
}
const Body = styled.div`
  max-width: 1120px;
  margin: 125px auto 0;
  padding-bottom: 100px;

  @media (max-width: 1000px) {
    margin-top: 40px;
    padding: 0 15px 50px;
  }

  @media (max-width: 420px) {
    margin-top: 40px;
  }
`
const Pyramid = styled.img`
  width: 100%;
  margin-top: 115px;
  @media (max-width: 1000px) {
    margin-top: 70px;
  }
  @media (max-width: 420px) {
    width: 90%;
    margin: 55px auto 0;
    display: block;
  }
`

const TypeWrap = styled.div`
  width: 100%;
  margin-top: 115px;
  display: flex;
  flex-wrap: wrap;
  gap: 90px 20px;

  @media (max-width: 1000px) {
    row-gap: 50px;
  }
  @media (max-width: 420px) {
    gap: 30px 10px;
  }
`

export default ResultPage
