import React from 'react'
import styled from '@emotion/styled'
import HeaderImage from '@assets/image/header.png'
import HeaderMobileImage from '@assets/image/header_m.png'

const Header: React.FC = () => {
  return (
    <HeaderWrap>
      <HeaderContainer>
        <HeaderImg src={HeaderImage} />
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
`
const HeaderImg = styled.img`
  width: 100%;
`
export default Header