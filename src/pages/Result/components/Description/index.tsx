import styled from '@emotion/styled'
import React from 'react'

const Description: React.FC = () => {
  return (
    <DescriptionWrap>
      <div>
        <DescriptionTitle>[ 균형있는 내 모습 살펴보기 ]</DescriptionTitle>
        <DescriptionText>
          타고난 욕구를 얼마나 골고루 발휘하고 있는가를 살펴볼 수 있습니다.
          <br />
          전체적으로 25-35점에 가까울수록 타고난 욕구를 균형적으로 쓰는 것으로 보입니다.
        </DescriptionText>
      </div>
      <div>
        <DescriptionTitle>[ 점수의 범위에 따른 성향 ]</DescriptionTitle>
        <DescriptionText>
          36-50점 : 지나치게 성향이 드러나 돌출된 모습을 보일 수 있습니다.
          <br />
          21-35점 : 안정적인 성향을 보이며 원만한 모습을 보입니다.
          <br />
          11-20점 : 소극적인 성향을 보이며 불안한 경향을 보일 수 있습니다.
          <br />
          10점 이하 : 극도로 위축된 성향일 수 있습니다.
        </DescriptionText>
      </div>
    </DescriptionWrap>
  )
}

const DescriptionWrap = styled.div`
  margin-top: 42px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 450px) {
    width: 90%;
    margin: 33px auto 0;
    flex-direction: column;
    justify-content: center;
    row-gap: 40px;
  }
`

const DescriptionTitle = styled.p`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
  color: #004c2f;
  @media (max-width: 450px) {
    margin-bottom: 10px;
    font-size: 12px;
  }
`
const DescriptionText = styled.p`
  line-height: 18px;
  font-weight: 500;
  font-size: 14px;
  @media (max-width: 450px) {
    line-height: 14px;
    font-size: 10px;
  }
`

export default Description
