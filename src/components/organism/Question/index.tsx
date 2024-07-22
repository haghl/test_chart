import { AnswerRadio } from '@/components/molecules'
import styled from '@emotion/styled'
import React from 'react'

interface IProps {
  index: number
  question: string
  value: number | null
  onChange?: (value: number | null) => void
  disable?: boolean
}
const Question: React.FC<IProps> = ({ index, value, question, disable, onChange }) => {
  const handleChangeAnswer: (event: React.MouseEvent<HTMLElement>, value: any) => void = (_, value) => {
    if (onChange) {
      onChange(value)
    }
  }

  return (
    <QuestionBox>
      <QuestionTitle>
        {index.toString().padStart(2, '0')}. {question}
      </QuestionTitle>

      <AnswerRadio value={value} onChange={handleChangeAnswer} disabled={disable} />
    </QuestionBox>
  )
}

const QuestionBox = styled.div`
  width: 100%;
`
const QuestionTitle = styled.p`
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 22px;

  @media (max-width: 1000px) {
    margin-bottom: 20px;
    font-size: 18px;
  }
`

export default Question
