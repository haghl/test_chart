import React from 'react'
import styled from '@emotion/styled'
import { IAnswer } from '@/types'

interface IProps {
  data: IAnswer
  active: boolean
  onClick: () => void
}

const TypeBox: React.FC<IProps> = ({ data, active, onClick }) => {
  return (
    <TypeWrap onClick={() => onClick()}>
      <TypeTop active={active}>
        {data.number} [{data.type}]
      </TypeTop>
      <TypeMid active={active}>
        <TypeText>{data.character}</TypeText>
      </TypeMid>
      <TypeBottom active={active}>
        <TypeText>{data.recomend}</TypeText>
      </TypeBottom>
    </TypeWrap>
  )
}

const TypeWrap = styled.div`
  flex: 1 1 calc(33.333% - 40px);
  cursor: pointer;
  @media (max-width: 450px) {
    flex-basis: calc(33.333% - 10px);
  }
`
const TypeTop = styled.p<{ active: boolean }>`
  text-align: center;
  font-size: 37px;
  color: ${(prop) => (prop.active ? '#004C2F' : '#B7B7B7')};

  @media (max-width: 450px) {
    font-size: 13px;
  }
`
const TypeMid = styled.div<{ active: boolean }>`
  height: 300px;
  margin-top: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${(prop) => (prop.active ? '#004C2F' : '#F7F7F7')};
  color: ${(prop) => (prop.active ? '#fff ' : '#B7B7B7')};
  border-radius: 15px;
  @media (max-width: 1000px) {
    height: 250px;
    margin-top: 45px;
  }

  @media (max-width: 450px) {
    margin-top: 25px;
    height: 105px;
  }
`
const TypeBottom = styled.div<{ active: boolean }>`
  height: 400px;
  margin-top: 15px;
  padding: 50px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${(prop) => (prop.active ? '#E4EFE4' : '#F7F7F7')};
  color: ${(prop) => (prop.active ? '#000 ' : '#B7B7B7')};
  border-radius: 15px;

  @media (max-width: 1000px) {
    padding: 30px 20px;
  }

  @media (max-width: 450px) {
    height: 150px;
    padding: 25px 10px;
  }
`
const TypeText = styled.p`
  line-height: 33px;
  font-weight: 500;
  font-size: 22px;

  @media (max-width: 450px) {
    line-height: 13px;
    font-size: 10px;
  }
`

export default TypeBox
