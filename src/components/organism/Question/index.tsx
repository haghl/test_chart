import { AnswerRadio } from '@/components/molecules'
import styled from '@emotion/styled'
import React, { useState } from 'react'

interface IProps {
  index: number
  question: string
}
const Question: React.FC<IProps> = ({ index, question }) => {
  const [answer, setAnswer] = useState<null | number>()

  const handleChangeAnswer: (event: React.MouseEvent<HTMLElement>, value: any) => void = (_, value) => {
    setAnswer(value)
  }

  return (
    <QuestionBox>
      <QuestionTitle>
        {index.toString().padStart(2, '0')}. {question}
      </QuestionTitle>

      <AnswerRadio value={answer} onChange={handleChangeAnswer} />
    </QuestionBox>
  )
}

const QuestionBox = styled.div`
  width: 100%;
`
const QuestionTitle = styled.p`
  margin-bottom: 27px;
  font-weight: bold;
  font-size: 22px;
`

export default Question
