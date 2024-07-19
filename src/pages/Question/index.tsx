import { Question } from '@/components/organism'
import { Header } from '@/components/organism'
import styled from '@emotion/styled'
import questions from './data'
import { useEffect, useState } from 'react'
import { IQuestion } from '@/types'
import { useNavigate } from 'react-router-dom'

const QuestionPage = () => {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(0)
  const [questionList, setQuestionList] = useState(questions)
  const [pagedQuestions, setPagedQuestions] = useState<IQuestion[][]>([])

  const itemsPerPage = 10
  // 2차원 배열로 분리된 데이터

  // useEffect를 사용하여 데이터를 미리 2차원 배열로 분리
  useEffect(() => {
    const totalPages = Math.ceil(questions.length / itemsPerPage)
    const newPagedQuestions: IQuestion[][] = []

    for (let i = 0; i < totalPages; i++) {
      const start = i * itemsPerPage
      const end = start + itemsPerPage
      newPagedQuestions.push(questions.slice(start, end))
    }

    // 마지막 페이지가 11개가 되도록 수정
    if (newPagedQuestions[totalPages - 1].length === 1) {
      newPagedQuestions[totalPages - 2] = newPagedQuestions[totalPages - 2].concat(newPagedQuestions[totalPages - 1])
      newPagedQuestions.pop()
    }

    setPagedQuestions(newPagedQuestions)
  }, [])

  // 다음 페이지로 이동 핸들러
  const handleNext = () => {
    if (currentPage < pagedQuestions.length - 1) {
      setCurrentPage(currentPage + 1)
    } else {
      navigate('/result')
    }
  }

  return (
    <>
      <Header />
      <QuestionBox>
        {pagedQuestions[currentPage]?.map((question) => {
          return (
            <Question
              key={question.question}
              index={question.index}
              question={question.question}
              value={question.value}
              onChange={(value) => {
                const arr = [...questionList]
                arr[question.index - 1].value = value
                setQuestionList(arr)
              }}
            />
          )
        })}
        <NextButton onClick={() => handleNext()}>{currentPage < pagedQuestions.length - 1 ? 'Next' : '결과보기'}</NextButton>
      </QuestionBox>
    </>
  )
}

const QuestionBox = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 50px auto 200px;
  display: flex;
  flex-direction: column;
  row-gap: 60px;
`
const NextButton = styled.div`
  width: 155px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #004c2f;
  border-radius: 15px;
  font-weight: 900;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
`

export default QuestionPage
