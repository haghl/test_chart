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

const dummy: IAnswer = {
  categoryId: 1,
  categoryName: '머리', // 머리 가슴 배
  categorySubName: '탑', // 탑 미들 베이스

  number: 2, // 유형 번호
  name: '배려자', // 유형의 이름
  subName: '공감능력 · 헌신', // 서브타이틀()
  headerText: `1번줄입니다1번줄입니다1번줄입니다1번줄입니다1번줄입니다\n1번줄입니다1번줄입니다1번줄입니다1번줄입니다1번줄입니다\n1번줄입니다1번줄입니다1번줄입니다1번줄입니다1번줄입니다`, // 헤더쪽 설명
  type: '조력형', // 유형
  character: `과일향\n상큼하고 귀여운\n느낌을 주는 향`, // 특징
  recomend: `2(조력형)은 사람간의 소통을 좋아하는 통통튀는 성향. 다양한 매력을 가지고 있고 다양한 사람들과 어우러짐.\n여러가지 향이 믹스되어있고, 다양한 종류를 전개하는 프루티 계열의 향수를 추천합니다.`, // 추천
}

const ResultPage: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:420px)')
  const [active, setActive] = useState(1)
  const dummyArr: IAnswer[] = Array(9).fill(dummy)
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
