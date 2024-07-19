import React from 'react'
import Header from '../Header'
import styled from '@emotion/styled'
import { CircularProgress } from '@mui/material'

const Loading: React.FC = () => {
  return (
    <>
      <Header />

      <Text>가끔은 눈에 보이지 않는 것이 가장 강렬한 기억을 깨우는 법이다.</Text>
      <Flex>
        <LoadingProgress size={80} />
      </Flex>
    </>
  )
}

const Text = styled.p`
  margin-top: 225px;
  font-size: 26px;
  font-weight: 900;
  text-align: center;
  color: #004c2f;
`

const Flex = styled.div`
  margin-top: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LoadingProgress = styled(CircularProgress)`
  color: #004c2f;
`

export default Loading
