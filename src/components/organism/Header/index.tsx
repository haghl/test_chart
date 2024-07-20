import styled from '@emotion/styled'
import React from 'react'

const Header: React.FC = () => {
  return (
    <HeaderWrap>
      <HeaderContainer>
        <BigText>Analysis of Niche</BigText>
        <SubDiv>
          <SubText>Propensity Test</SubText>
          <Flex>
            <Cir />
            <Line color="#fff" />
          </Flex>
        </SubDiv>
      </HeaderContainer>
    </HeaderWrap>
  )
}

const HeaderWrap = styled.div`
  width: 100%;
  background: #004c2f;
`
const HeaderContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 75px 0;
  display: flex;
  align-items: center;
  column-gap: 10px;
  color: #fff;
  @media (max-width: 1000px) {
    padding: 30px 0 30px 15px;
  }
`
const BigText = styled.p`
  font-weight: bold;
  font-size: 70px;
  @media (max-width: 1000px) {
    font-size: 30px;
  }
`
const SubDiv = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  column-gap: 10px;
`
const SubText = styled.p`
  font-weight: lighter;
  font-size: 28px;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`
const Cir = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 5px;
  background: #fff;
`
const Line = styled.div<{ color: string }>`
  width: 100%;
  height: 1px;
  background: ${({ color }) => color};
`
export default Header
