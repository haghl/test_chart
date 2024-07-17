import styled from '@emotion/styled'
import { CategoryScale, Chart as ChartJS, ChartOptions, Legend, LinearScale, LineElement, PointElement, Title, Chart } from 'chart.js'
import React from 'react'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'

const backgroundPlugin = {
  id: 'customCanvasBackgroundColor',
  beforeDraw: (chart: any) => {
    const ctx = chart.ctx
    const chartArea = chart.chartArea
    const scales = chart.scales

    // Define the background colors for each section
    const colors = ['rgba(255, 0, 0, 0.2)', 'rgba(0, 255, 0, 0.2)', 'rgba(0, 0, 255, 0.2)']
    const boundaries = [0, 2, 4, 6] // Define the boundaries for each section

    // Apply the background colors
    for (let i = 0; i < colors.length; i++) {
      ctx.fillStyle = colors[i]
      const startX = i === 0 ? chartArea.left : scales.x.getPixelForValue(boundaries[i])
      const endX = i === colors.length - 1 ? chartArea.right : scales.x.getPixelForValue(boundaries[i + 1])
      ctx.fillRect(startX, chartArea.top, endX - startX, chartArea.bottom - chartArea.top)
    }
  },
}

// Chart.js에 필요한 컴포넌트 등록
Chart.register(backgroundPlugin)

const ChartComponent: React.FC = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: 'rgba(75, 192, 192, 1)',
        pointBorderWidth: 2,
        pointRadius: 5,
      },
    ],
  }

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

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

export default ChartComponent
