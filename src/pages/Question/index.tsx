import { Question } from '@/components/organism'
import { Header } from '@/components/organism'
import styled from '@emotion/styled'
import questions from './data'
import { useEffect, useState } from 'react'
import { IQuestion, IScore } from '@/types'
import { useLocation, useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { Kmpt } from '@/apis/question'

const QuestionPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [questionList, setQuestionList] = useState<IQuestion[]>(questions)
  const [pagedQuestions, setPagedQuestions] = useState<IQuestion[][]>([])

  const params = new URLSearchParams(location.search)
  const currentPage = parseInt(params.get('page') || '1', 10) - 1
  const itemsPerPage = 10

  const { mutate } = useMutation({
    mutationFn: (scores: IScore[]) => {
      const memberId = sessionStorage.getItem('memberId') ?? ''
      return Kmpt.saveScore(Number(memberId), { scores })
    },
    onSuccess: (response) => {
      sessionStorage.setItem('scores', JSON.stringify(response))
      navigate('/result')
    },
    onError: (e: any) => {
      console.log('message:', e.message)
    },
  })

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

  const handleNext = async () => {
    const currentQuestions = pagedQuestions[currentPage]
    // 유효성 검사: 답변이 없는 문항이 있는지 확인
    const unansweredQuestions = currentQuestions.filter((q) => !q.value)
    if (unansweredQuestions.length > 0) {
      alert('모든 문항에 답변을 입력해주세요.')
      return
    }

    if (currentPage < pagedQuestions.length - 1) {
      navigate(`/question?page=${currentPage + 2}`)
      window.scrollTo(0, 0)
      console.log('currentQuestions', currentQuestions)
    } else {
      const scores = calculateScores()

      mutate(scores)
    }
  }

  const calculateScores = () => {
    const scoreMap = new Map()

    questionList.forEach((question) => {
      const { type, value } = question
      if (value) {
        const numericValue = parseInt(value.toString(), 10) // value가 숫자 문자열이라고 가정

        if (scoreMap.has(type)) {
          scoreMap.set(type, scoreMap.get(type) + numericValue)
        } else {
          scoreMap.set(type, numericValue)
        }
      }
    })

    const scores = Array.from(scoreMap.entries()).map(([type, value]) => ({
      testTypeId: type,
      number: value,
    }))

    return scores
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
