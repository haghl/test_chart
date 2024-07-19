import { Question } from '@/components/organism'
import { Header } from '@/components/organism'
import styled from '@emotion/styled'
import questions from './data'
import { useState } from 'react'

const QuestionPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [questionList, setQuestionList] = useState(questions)
  // 페이지당 아이템 수
  const itemsPerPage = 10

  // 현재 페이지에 해당하는 데이터 계산
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  let currentItems = questionList.slice(indexOfFirstItem, indexOfLastItem)

  // 마지막 페이지는 11개의 아이템 표시
  if (currentPage === Math.ceil(questionList.length / itemsPerPage)) {
    currentItems = questionList.slice(indexOfFirstItem, questionList.length)
  }

  // 페이지 번호 배열 계산
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(questionList.length / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  // 페이지 변경 핸들러
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <>
      <Header />
      <QuestionBox>
        {currentItems.map((question, index) => {
          return (
            <Question
              key={question.question}
              index={question.index}
              question={question.question}
              value={question.value}
              onChange={(value) => {
                const arr = [...questionList]
                arr[index].value = value
                setQuestionList(arr)
              }}
            />
          )
        })}
        <NextButton onClick={() => paginate(currentPage + 1)}>Next</NextButton>
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
`

export default QuestionPage
