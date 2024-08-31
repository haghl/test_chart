import React from 'react'
import styled from '@emotion/styled'
import Character from '@assets/image/result_people.png'
import { IAnswer } from '@/types'

interface IProps {
  type: IAnswer
}
const Header: React.FC<IProps> = ({ type }) => {
  return (
    <HeaderWrap>
      <ResultType>{type.number}</ResultType>
      <HeaderContainer>
        <TypeTextBox>
          <TypeTitleBox>
            <TypeTitle>{type.name}</TypeTitle>
            <TypeSubTitle>{type.subName}</TypeSubTitle>
          </TypeTitleBox>
          <TypeDescription>{type.headerText}</TypeDescription>
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
  @media (max-width: 1000px) {
    margin-top: 45px;
  }
`
const ResultType = styled.p`
  width: 1120px;
  margin: 0 auto;
  position: relative;
  top: 25px;
  color: #004c2f;
  font-weight: bold;
  font-size: 163px;

  @media (max-width: 1000px) {
    width: 100%;
    padding-left: 15px;
    font-size: 100px;
    top: 16px;
  }

  @media (max-width: 450px) {
    font-size: 50px;
    top: 8px;
  }
`
const HeaderContainer = styled.div`
  padding-top: 90px;
  padding-bottom: 100px;
  position: relative;
  background-color: #004c2f;

  @media (max-width: 1000px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  @media (max-width: 450px) {
    padding-top: 35px;
    padding-bottom: 30px;
  }
`
const TypeTextBox = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  @media (max-width: 1000px) {
    padding-left: 20px;
  }
`
const TypeTitleBox = styled.div`
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  column-gap: 33px;
  color: #fff;

  @media (max-width: 1000px) {
    margin-bottom: 20px;
    column-gap: 20px;
  }
  @media (max-width: 450px) {
    margin-bottom: 15px;
    column-gap: 13px;
  }
`
const TypeTitle = styled.p`
  font-weight: bold;
  font-size: 70px;

  @media (max-width: 1000px) {
    font-size: 50px;
  }
  @media (max-width: 450px) {
    font-size: 18px;
  }
`
const TypeSubTitle = styled.p`
  font-size: 35px;
  @media (max-width: 1000px) {
    font-size: 25px;
  }
  @media (max-width: 450px) {
    font-size: 11px;
  }
`
const TypeDescription = styled.p`
  line-height: 30px;
  font-size: 22px;
  color: #fff;
  @media (max-width: 1000px) {
    line-height: 25px;
    font-size: 18px;
  }
  @media (max-width: 450px) {
    line-height: 12px;
    font-size: 8px;
  }
`
const CharacterImage = styled.img`
  width: 500px;
  position: absolute;
  bottom: 0px;
  right: 0;
  @media (max-width: 1000px) {
    width: 300px;
    right: 15px;
  }
  @media (max-width: 450px) {
    width: 180px;
  }
`

export default Header
