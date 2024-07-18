import styled from '@emotion/styled'
import 'chart.js/auto'
import React, { useEffect, useRef } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js'

// 커스텀 플러그인 작성
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, Filler)
const ChartComponent: React.FC = () => {
  const backgroundColorPlugin = {
    id: 'backgroundColorPlugin',
    beforeDraw: (chart) => {
      const {
        ctx,
        chartArea: { top, bottom, left, right },
        scales: { y },
      } = chart
      ctx.save()
      const min = y.getPixelForValue(15)
      const max = y.getPixelForValue(30)
      ctx.fillStyle = 'rgba(0, 128, 0, 0.2)'
      ctx.fillRect(left, min, right - left, max - min)
      ctx.restore()
    },
  }

  const data: any = {
    labels: ['5 [관찰형]', '6 [충성형]', '7 [낙천형]', '4 [예술형]', '3 [성취형]', '2 [조력형]', '1 [개혁형]', '9 [중재형]', '8 [도전형]'],
    datasets: [
      {
        type: 'line',
        data: [20, 25, 20, 15, 13, 25, 30, 20, 10],
        borderColor: '#004d00',
        backgroundColor: 'rgba(0, 128, 0, 0.2)',
        pointBackgroundColor: '#004d00',
        pointBorderColor: '#004d00',
        borderWidth: 1,
        fill: false,
        tension: 0, // 각지게 설정
        borderSkipped: false, // 위아래 경계선을 없앱니다
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      backgroundColorPlugin: {},
    },
    scales: {
      x: {
        grid: {
          lineWidth: 0,
        },
        ticks: {
          display: false, // 기본 라벨 숨기기
        },
      },
      y: {
        grid: {
          lineWidth: 1,
        },
        border: {
          display: false, // y축의 경계선 제거
        },
        offset: true,
        max: 40,
        min: 0,
        ticks: {
          color: '#004d00',
          font: {
            size: 12,
          },
        },
      },
    },
  }

  return (
    <ChartContainer>
      <Bar data={data} options={options} plugins={[backgroundColorPlugin]} />
    </ChartContainer>
  )
}

const ChartContainer = styled.div`
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-top: 4px solid #004c2f;
  border-bottom: 4px solid #004c2f;
`

export default ChartComponent
