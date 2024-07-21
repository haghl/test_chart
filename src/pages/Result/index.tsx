import styled from '@emotion/styled'
import React, { useState } from 'react'
import { Header } from './components'
import ChartComponent from './components/Chart'
import Description from './components/Description'
import PyramidImage from '@assets/image/pyramid.png'
import PyramidImageMobile from '@assets/image/pyramidMobile.png'
import TypeBox from './components/TypeBox'
import { IAnswer } from '@/types'
import { useMediaQuery } from '@mui/material'
import { useSuspenseQuery } from '@tanstack/react-query'

const ResultPage: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:420px)')
  const [active, setActive] = useState(1)
  const dummyArr: IAnswer[] = Array(9).fill(dummy)
  const {} = useSuspenseQuery({
    queryKey: [''],
  })
  return (
    <>
      <Header type={2} />
      <Body>
        <ChartComponent />
        <Description />
        <Pyramid src={isMobile ? PyramidImageMobile : PyramidImage} />
        <TypeWrap>
          {dummyArr.map((data, index) => {
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
