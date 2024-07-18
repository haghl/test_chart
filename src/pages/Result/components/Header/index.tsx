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
        <TypeTextBox>
          <TypeTitleBox>
            <TypeTitle>배려자</TypeTitle>
            <TypeSubTitle>공감능력 · 헌신</TypeSubTitle>
          </TypeTitleBox>
          <TypeDescription>
            1번줄입니다1번줄입니다1번줄입니다1번줄입니다1번줄입니다
            <br />
            1번줄입니다1번줄입니다1번줄입니다1번줄입니다1번줄입니다
            <br />
            1번줄입니다1번줄입니다1번줄입니다1번줄입니다1번줄입니다
          </TypeDescription>
        </TypeTextBox>
        <CharacterImage src={Character} alt="캐릭터" />
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
  width: 1120px;
  margin: 0 auto;
  position: relative;
  top: 25px;
  color: #004c2f;
  font-weight: bold;
  font-size: 163px;
`
const HeaderContainer = styled.div`
  padding-top: 90px;
  padding-bottom: 100px;

  position: relative;
  background-color: #004c2f;
`
const TypeTextBox = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`
const TypeTitleBox = styled.div`
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  column-gap: 33px;
  color: #fff;
`
const TypeTitle = styled.p`
  font-weight: bold;
  font-size: 70px;
`
const TypeSubTitle = styled.p`
  font-size: 35px;
`
const TypeDescription = styled.p`
  line-height: 30px;
  font-size: 22px;
  color: #fff;
`
const CharacterImage = styled.img`
  width: 500px;
  position: absolute;
  bottom: 0px;
  right: 0;
  @media (max-width: 1000px) {
    width: 350px;
  }
`

export default Header
