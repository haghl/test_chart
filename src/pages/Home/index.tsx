import { Input } from '@/components/atoms'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import Header from './components/Header'
import { postData } from '@/apis/question'

const HomePage = () => {
  const navigate = useNavigate()

  const onClick = async () => {
    postData({ name: '원동규', age: 20, phoneNumber: '010-9404-5037' })
    navigate('/question')
  }

  return (
    <div>
      <Header />
      <Main>
        <InputBox>
          <Input htmlForId="name" label="이름" width={320} />
          <Input htmlForId="age" label="나이" width={320} />
          <Input htmlForId="phone" label="연락처" width={320} />
        </InputBox>

        <Button onClick={onClick}>START</Button>
      </Main>
    </div>
  )
}

const Main = styled.div`
  width: 1120px;
  margin: 65px auto 0;
  display: flex;
  flex-direction: column;
`
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  align-self: flex-end;
`
const Button = styled.div`
  width: 155px;
  height: 65px;
  margin-top: 60px;
  border-radius: 15px;
  background: #004c2f;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`

export default HomePage
