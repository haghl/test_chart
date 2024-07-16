import styled from '@emotion/styled'
import { CategoryScale, Chart as ChartJS, ChartOptions, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js'
import React from 'react'
import { Line } from 'react-chartjs-2'

// Chart.js에 필요한 컴포넌트 등록
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const rawData = [5, 7, 6, 8, 7]

// 가장 많은 데이터가 분포된 값을 찾습니다.
const valueCounts: { [key: number]: number } = {}
rawData.forEach((value) => {
  valueCounts[value] = (valueCounts[value] || 0) + 1
})

const maxCount = Math.max(...Object.values(valueCounts))
const mostFrequentValue = +Object.keys(valueCounts).find((key) => valueCounts[+key] === maxCount)!

const data = {
  labels: ['1주', '2주', '3주', '4주', '5주'],
  datasets: [
    {
      label: '점수',
      data: rawData,
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
      tension: 0.4, // 곡선의 정도 조절
      pointBackgroundColor: rawData.map((value) => (value === mostFrequentValue ? 'red' : 'rgba(75, 192, 192, 1)')),
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: rawData.map((value) => (value === mostFrequentValue ? 'red' : 'rgba(75, 192, 192, 1)')),
      pointRadius: 5,
      pointHoverRadius: 7,
    },
  ],
}

// ChartOptions 타입을 사용하여 옵션의 타입을 명확하게 정의합니다.
const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: '각각 점수에 따른 왁싱 성실 선형 그래프',
      font: {
        size: 18,
        weight: 'bold',
      },
      padding: {
        top: 10,
        bottom: 30,
      },
      color: '#333',
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      titleColor: '#fff',
      bodyColor: '#fff',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 10,
      ticks: {
        color: '#333',
        font: {
          size: 14,
        },
      },
      grid: {
        color: 'rgba(200, 200, 200, 0.3)',
      },
    },
    x: {
      ticks: {
        color: '#333',
        font: {
          size: 14,
        },
      },
      grid: {
        color: 'rgba(200, 200, 200, 0.3)',
      },
    },
  },
}

const ResultPage: React.FC = () => {
  return (
    <ChartContainer>
      <Line data={data} options={options} />
    </ChartContainer>
  )
}

const ChartContainer = styled.div`
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

export default ResultPage
