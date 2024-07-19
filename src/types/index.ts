export interface IQuestion {
  index: number
  type: number
  value: number | null
  question: string
}

export interface IAnswer {
  categoryId: number
  categoryName: string // 머리 가슴 배
  categorySubName: string // 탑 미들 베이스

  number: number // 유형 번호
  name: string // 유형의 이름
  subName: string // 서브타이틀()
  headerText: string // 헤더쪽 설명
  type: string // 유형
  character: string // 특징
  recomend: string // 추천
}
