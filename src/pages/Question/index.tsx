import { Question } from '@/components/organism'
import { Header } from '@/components/organism'
import styled from '@emotion/styled'
import questions from './data'
import { useEffect, useState } from 'react'
import { IQuestion } from '@/types'
import { useLocation, useNavigate } from 'react-router-dom'

const QuestionPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [questionList, setQuestionList] = useState<IQuestion[]>(questions)
  const [pagedQuestions, setPagedQuestions] = useState<IQuestion[][]>([])

  const params = new URLSearchParams(location.search)
  const currentPage = parseInt(params.get('page') || '1', 10) - 1
  const itemsPerPage = 10

  useEffect(() => {
    const totalPages = Math.ceil(questionList.length / itemsPerPage)
    const newPagedQuestions: IQuestion[][] = []

    for (let i = 0; i < totalPages; i++) {
      const start = i * itemsPerPage
      const end = start + itemsPerPage
      newPagedQuestions.push(questionList.slice(start, end))
    }

    // 마지막 페이지가 11개가 되도록 수정
    if (newPagedQuestions[totalPages - 1].length === 1) {
      newPagedQuestions[totalPages - 2] = newPagedQuestions[totalPages - 2].concat(newPagedQuestions[totalPages - 1])
      newPagedQuestions.pop()
    }

    setPagedQuestions(newPagedQuestions)
  }, [])

  const handleNext = () => {
    if (currentPage < pagedQuestions.length - 1) {
      navigate(`/question?page=${currentPage + 2}`)
      window.scrollTo(0, 0)
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
  @media (max-width: 1000px) {
    margin: 30px auto 100px;
    padding: 0 15px;
    row-gap: 25px;
  }
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
  @media (max-width: 1000px) {
    width: 100px;
    height: 40px;
    border-radius: 10px;
    font-size: 14px;
  }
`

export default QuestionPage
