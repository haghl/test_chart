import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

interface IProps {
  children: ReactNode
}
const Layout: React.FC<IProps> = ({ children }) => {
  return <Wrap>{children}</Wrap>
}

const Wrap = styled.div`
  width: 100%;
`

export default Layout
