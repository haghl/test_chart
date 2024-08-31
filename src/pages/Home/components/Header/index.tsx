import styled from '@emotion/styled'
import { useMediaQuery } from '@mui/material'

const Header = () => {
  const isMobile = useMediaQuery('(max-width: 450px)')

  return (
    <HeaderWrap>
      <HeaderLeft>
        <BigText>Analysis of Niche</BigText>
        <SubDiv>
          <SubText>Propensity Test</SubText>
          <Flex>
            <Cir />
            <Line color="#fff" />
          </Flex>
        </SubDiv>
      </HeaderLeft>

      <HeaderRight>
        <Line color="#004C2F" style={{ marginTop: isMobile ? 154 : 198 }} />
      </HeaderRight>
    </HeaderWrap>
  )
}
const HeaderWrap = styled.div`
  height: 330px;
  display: flex;
  align-items: center;

  @media (max-width: 450px) {
    height: 220px;
  }
`
const HeaderLeft = styled.div`
  width: 90%;
  height: 100%;
  padding-left: 105px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 30px;
  background: #004c2f;
  color: #fff;

  @media (max-width: 450px) {
    width: 80%;
    padding-left: 30px;
  }
`
const BigText = styled.p`
  font-weight: bold;
  font-size: 70px;

  @media (max-width: 450px) {
    font-size: 40px;
  }
`

const SubDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 25px;
`
const SubText = styled.p`
  font-weight: lighter;
  font-size: 28px;

  @media (max-width: 450px) {
    font-size: 18px;
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

const HeaderRight = styled.div`
  width: 10%;
  height: 90%;
  background: #e4efe4;

  @media (max-width: 450px) {
    width: 20%;
  }
`

export default Header
