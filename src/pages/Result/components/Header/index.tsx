import React from 'react'
import styled from '@emotion/styled'
import Character from '@assets/image/result_people.png'

interface IProps {
  type: number
}
const Header: React.FC<IProps> = ({ type }) => {
  return (
    <HeaderWrap>
      <ResultType>{type}</ResultType>
      <HeaderContainer>
        <div>
          <p>배려자</p>
          <p>공감능력 · 헌신</p>
        </div>
        <p>
          1번줄입니다1번줄입니다1번줄입니다1번줄입니다1번줄입니다{'\n'}
          1번줄입니다1번줄입니다1번줄입니다1번줄입니다1번줄입니다{'\n'}
          1번줄입니다1번줄입니다1번줄입니다1번줄입니다1번줄입니다
        </p>
        <img src={Character} alt="캐릭터" />
      </HeaderContainer>
    </HeaderWrap>
  )
}

const HeaderWrap = styled.div`
  margin-top: 75px;
  display: flex;
  flex-direction: column;
`
const ResultType = styled.p`
  padding-left: 143px;
  position: relative;
  top: 25px;
  color: #004c2f;
  font-weight: 900;
  font-size: 163px;
`

const HeaderContainer = styled.div`
  background-color: #004c2f;
`

export default Header
