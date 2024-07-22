import { useEffect, useState } from 'react'

import { Header } from '@/pages/Result/components'
import ChartComponent from '@/pages/Result/components/Chart'
import Description from '@/pages/Result/components/Description'
import TypeBox from '@/pages/Result/components/TypeBox'
import { IResult } from '@/types'
import PyramidImage from '@assets/image/pyramid.png'
import PyramidImageMobile from '@assets/image/pyramidMobile.png'
import styled from '@emotion/styled'
import { useMediaQuery } from '@mui/material'

interface IProps {
  scores: {
    hight: IResult
    data: IResult[]
  }
}

const Last = ({ scores }: IProps) => {
  const isMobile = useMediaQuery('(max-width:420px)')
  const [active, setActive] = useState(1)

  useEffect(() => {
    if (scores?.hight) {
      setActive(scores.hight.number)
    }
  }, [scores.hight])

  return (
    <div>
      <Header type={scores.hight} />
      <Body>
        <ChartComponent scoreData={scores.data} />
        <Description />
        <Pyramid src={isMobile ? PyramidImageMobile : PyramidImage} />
        <TypeWrap>
          {scores.data.map((data, index) => {
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
    </div>
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
export default Last
