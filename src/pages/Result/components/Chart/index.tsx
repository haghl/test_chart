import { IResult } from '@/types'
import styled from '@emotion/styled'
import { BarElement, CategoryScale, Chart as ChartJS, ChartOptions, Filler, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js'
import 'chart.js/auto'
import React from 'react'
import { Bar } from 'react-chartjs-2'

interface IProps {
  scoreData: IResult[]
}

// 커스텀 플러그인 작성
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, Filler)
const ChartComponent: React.FC<IProps> = ({ scoreData }) => {
  const typeList = [5, 6, 7, 4, 3, 2, 1, 9, 8]
  const chartData = typeList.map((type) => scoreData[type - 1])

  const backgroundColorPlugin = {
    id: 'backgroundColorPlugin',
    beforeDraw: (chart: any) => {
      const {
        ctx,
        chartArea: { left, right },
        scales: { y },
      } = chart
      ctx.save()
      const min = y.getPixelForValue(15)
      const max = y.getPixelForValue(30)
      ctx.fillStyle = '#E4EFE4'
      ctx.fillRect(left, min, right - left, max - min)
      ctx.restore()
    },
  }

  const data: any = {
    labels: chartData.map((type) => type.type),
    datasets: [
      {
        type: 'line',
        data: chartData.map((type) => type.score),
        borderColor: '#004C2F',
        backgroundColor: '#004C2F',
        pointBackgroundColor: '#004C2F',
        pointBorderColor: '#004C2F',
        borderWidth: 1,
        fill: false,
        tension: 0, // 각지게 설정
        borderSkipped: false, // 위아래 경계선을 없앱니다
      },
    ],
  }

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: '#004C2F',
          lineWidth: (context) => {
            if (context.index >= 0 && context.index <= 8) {
              return 2
            }
            return
          },
        },
        ticks: {
          display: false, // 기본 라벨 숨기기
        },
        border: {
          width: 0,
        },
      },
      y: {
        grid: {
          color: '#004C2F',
          lineWidth: (context) => {
            if (context.tick.value !== 45 && context.tick.value !== 0) {
              return 0.5
            }
            return 0
          },
        },
        max: 45,
        min: 0,
        ticks: {
          color: '#004C2F',
          font: {
            size: 12,
          },
          callback: (value) => {
            if (value === 0 || value === 45) {
              return ''
            }
            return value
          },
        },
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  }

  return (
    <ChartWrap>
      <ChartTop>
        <ChartLeft>
          <ChartLeftP>높음</ChartLeftP>
          <ChartLeftP>보통</ChartLeftP>
          <ChartLeftP>낮음</ChartLeftP>
        </ChartLeft>

        <ChartContainer>
          <Bar data={data} options={options} plugins={[backgroundColorPlugin]} />
        </ChartContainer>
      </ChartTop>

      <ChartBottom>
        <ChartBottomItems>
          <div>점수</div>
          <ChartBottomItem>
            {chartData.map((type) => {
              return <ChartBottomDiv key={`score_${type.name}`}>{type.score}</ChartBottomDiv>
            })}
          </ChartBottomItem>
        </ChartBottomItems>
        <ChartBottomItems>
          <div>성격유형</div>
          <ChartBottomItem>
            {chartData.map((type) => {
              return <ChartBottomDiv key={`name_${type.number}_${type.type}`}>{`${type.number} [${type.type}]`}</ChartBottomDiv>
            })}
          </ChartBottomItem>
        </ChartBottomItems>
        <ChartBottomItems>
          <div>힘의 중심</div>
          <ChartBottomDiv>머리 [탑]</ChartBottomDiv>
          <ChartBottomDiv>가슴 [미들]</ChartBottomDiv>
          <ChartBottomDiv>배 [베이스]</ChartBottomDiv>
        </ChartBottomItems>
      </ChartBottom>
    </ChartWrap>
  )
}

const ChartWrap = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-top: 4px solid #004c2f;
  border-bottom: 4px solid #004c2f;
`
const ChartContainer = styled.div`
  flex: 1;
  height: 445px;
  @media (max-width: 1000px) {
    height: 350px;
  }
  @media (max-width: 450px) {
    height: 215px;
  }
`
const ChartTop = styled.div`
  flex: 1;
  display: flex;
  height: 445px;
  @media (max-width: 1000px) {
    height: 350px;
  }
  @media (max-width: 450px) {
    height: 215px;
  }
`
const ChartLeft = styled.div`
  width: 100px;
  height: 445px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  & > p ~ p {
    border-top: 1px solid #004c2f;
  }
  @media (max-width: 1000px) {
    width: 50px;
    height: 350px;
  }

  @media (max-width: 450px) {
    width: 32px;
    height: 215px;
  }
`

const ChartLeftP = styled.p`
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 1000px) {
    font-size: 13px;
  }
  @media (max-width: 450px) {
    font-size: 10px;
  }
`
const ChartBottom = styled.div`
  position: relative;
  top: -2px;
  font-weight: 500;
  font-size: 16px;
  @media (max-width: 1000px) {
    font-size: 13px;
  }

  @media (max-width: 450px) {
    font-size: 10px;
  }
`
const ChartBottomItems = styled.div`
  display: flex;
  height: 60px;
  padding-right: 6px;
  border-top: 1px solid #004c2f;
  & > div:first-of-type {
    width: 126.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1000px) {
      width: 76.5px;
    }
    @media (max-width: 450px) {
      width: 58.5px;
      min-width: 56px;
    }
  }
  & div ~ div {
    border-left: 2px solid #004c2f;
    @media (max-width: 450px) {
      border-width: 1px;
    }
  }

  @media (max-width: 1000px) {
    padding-right: 5.5px;
  }
  @media (max-width: 450px) {
    height: 20px;
  }
`
const ChartBottomItem = styled.div`
  display: flex;
  flex: 1;
`
const ChartBottomDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`

export default ChartComponent
