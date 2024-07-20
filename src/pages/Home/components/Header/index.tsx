import styled from '@emotion/styled'

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderLeft>
        <BigText>KMPT</BigText>
        <SubDiv>
          <SubText>Profile Psychology Test</SubText>
          <Flex>
            <Cir />
            <Line color="#fff" />
          </Flex>
        </SubDiv>
      </HeaderLeft>

      <HeaderRight>
        <Line color="#004C2F" style={{ marginTop: 198 }} />
      </HeaderRight>
    </HeaderWrap>
  )
}
const HeaderWrap = styled.div`
  height: 330px;
  /* margin-top: 50px; */
  display: flex;
  align-items: center;
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
`
const BigText = styled.p`
  letter-spacing: 25px;
  font-weight: bold;
  font-size: 70px;
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
`

export default Header
