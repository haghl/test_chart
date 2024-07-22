import { Kmpt } from '@/apis/question'
import { Input } from '@/components/atoms'
import { IKmptMember } from '@/types'
import styled from '@emotion/styled'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './components/Header'

interface ErrorData {
  name: string
  age: string
  phone: string
}

const HomePage = () => {
  const navigate = useNavigate()
  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [errors, setErrors] = useState<Partial<ErrorData>>({})
  const { mutate } = useMutation({
    mutationFn: (request: IKmptMember) => {
      return Kmpt.createMember(request)
    },
    onSuccess: (response) => {
      sessionStorage.setItem('memberId', response?.toString() || '')
      navigate('/question')
    },
    onError: (e: any) => {
      console.log('message:', e.message)
    },
  })

  const { mutate: resultKmpt } = useMutation({
    mutationFn: (phoneNum: string) => {
      return Kmpt.getMember(phoneNum)
    },
    onSuccess: (response) => {
      if (response.content.id) {
        sessionStorage.setItem('memberId', response.content.id?.toString() || '')
        navigate('/myData')
      } else {
        alert('먼저는 테스트를 진행해주세요')
      }
    },
    onError: (e: any) => {
      console.log('message:', e.message)
      alert('먼저는 테스트를 진행해주세요')
    },
  })

  const validate = () => {
    const newErrors: Partial<ErrorData> = {}

    if (!name) {
      newErrors.name = '이름을 입력해주세요.'
    }

    if (!age) {
      newErrors.age = '나이를 입력해주세요.'
    } else if (!/^\d+$/.test(age) || Number(age) < 0 || Number(age) > 120) {
      newErrors.age = '0보다 커야합니다.'
    }

    if (!phoneNumber) {
      newErrors.phone = '핸드폰번호를 입력해주세요.'
    } else if (!/^\d{10,11}$/.test(phoneNumber)) {
      newErrors.phone = 'Phone number must be 10-11 digits long'
    }
    console.log('newErrors', newErrors)

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const formatPhoneNumber = (phone: string) => {
    if (phone.length === 10) {
      return phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
    } else if (phone.length === 11) {
      return phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
    }
    return phone
  }

  const handleSubmit = async (e: React.FormEvent) => {
    const isValidation = validate()
    e.preventDefault()
    if (isValidation) {
      const formattedData = { name, age: Number(age), phoneNumber: formatPhoneNumber(phoneNumber) }
      mutate(formattedData)
      // Do something with the formatted form data
    } else {
      console.log('전부 입력해주세요:', errors)
    }
  }

  const handleResult = async (e: React.FormEvent) => {
    const isValidation = validate()
    if (isValidation) {
      const phoneNum = formatPhoneNumber(phoneNumber)
      resultKmpt(phoneNum)
      // Do something with the formatted form data
    } else {
      console.log('전부 입력해주세요:', errors)
    }
  }

  return (
    <div>
      <Header />
      <Main>
        <form onSubmit={handleSubmit}>
          <InputBox>
            <Input htmlForId="name" style={{ borderColor: errors.name ? 'red' : '#004C2F' }} label="Name" width={320} value={name} onChange={(e) => setName(e.target.value)} />
            <Input htmlForId="age" style={{ borderColor: errors.name ? 'red' : '#004C2F' }} label="Age" width={320} value={age} onChange={(e) => setAge(e.target.value)} />
            <Input htmlForId="phone" style={{ borderColor: errors.name ? 'red' : '#004C2F' }} label="Phone" width={320} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </InputBox>
          <ButtonWrap>
            <Button type="submit">START</Button>
            <Button type="button" onClick={handleResult}>
              결과보기
            </Button>
          </ButtonWrap>
        </form>
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
    padding: 0 15px;
  }
`
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  align-self: flex-end;
`
const ButtonWrap = styled.div`
  display: flex;
  margin-top: 60px;
  column-gap: 20px;
  justify-content: center;
  align-self: center;
`
const Button = styled.button`
  width: 155px;
  height: 65px;
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
