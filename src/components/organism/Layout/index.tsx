import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

interface IProps {
  children: ReactNode
}
const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <Wrap>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
`
const Header = styled.div`
  width: 100%;
`
const Body = styled.div`
  max-width: 1042px;
  width: 100%;
  margin: 0 auto;
`
const Footer = styled.div`
  width: 100%;
`

export default Layout
