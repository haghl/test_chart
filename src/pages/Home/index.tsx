import { Input } from '@/components/atoms'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import Header from './components/Header'
import { postData } from '@/apis/question'
import { useState } from 'react'

const HomePage = () => {
  const navigate = useNavigate()
  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<string>('')
  const [phone, setPhone] = useState<string>('')

  const onClick = async () => {
    postData({ name: '원동규', age: 20, phoneNumber: '010-9404-5037' })
    navigate('/question')
  }

  return (
    <div>
      <Header />
      <Main>
        <InputBox>
          <Input htmlForId="name" label="Name" width={320} value={name} onChange={(e) => setName(e.target.value)} />
          <Input htmlForId="age" label="Age" width={320} value={age} onChange={(e) => setAge(e.target.value)} />
          <Input htmlForId="phone" label="Phone" width={320} value={phone} onChange={(e) => setPhone(e.target.value)} />
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
  @media (max-width: 1000px) {
    width: 100%;
  }
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
