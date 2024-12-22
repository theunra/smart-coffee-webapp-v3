import React, { useEffect, useRef, useState } from 'react'

import { CChartLine } from '@coreui/react-chartjs'
import { getStyle } from '@coreui/utils'

const MainChart = () => {
  const chartRef = useRef(null)

  const [count, setCount] = useState(0);

  useEffect(() => {
    document.documentElement.addEventListener('ColorSchemeChange', () => {
      if (chartRef.current) {
        setTimeout(() => {
          chartRef.current.options.scales.x.grid.borderColor = getStyle(
            '--cui-border-color-translucent',
          )
          chartRef.current.options.scales.x.grid.color = getStyle('--cui-border-color-translucent')
          chartRef.current.options.scales.x.ticks.color = getStyle('--cui-body-color')
          chartRef.current.options.scales.y.grid.borderColor = getStyle(
            '--cui-border-color-translucent',
          )
          chartRef.current.options.scales.y.grid.color = getStyle('--cui-border-color-translucent')
          chartRef.current.options.scales.y.ticks.color = getStyle('--cui-body-color')
          chartRef.current.update()
        })
      }
    })

    const random = () => Math.round(Math.random() * 100)

    const randGraphInterval = setInterval(() => {
      if(count > 100) {
        setCount(0)
      } else{
        setCount(count + random())
      }

      // setMyData(myData);
      const now = new Date();
      const min = now.getMinutes();
      const sec = now.getSeconds();

      chartRef.current.data.labels.shift();
      chartRef.current.data.labels.push(min + ":" + sec);
      chartRef.current.data.datasets[0].data.shift();
      chartRef.current.data.datasets[0].data.push(count + random());

      chartRef.current.data.datasets[1].data.shift();
      chartRef.current.data.datasets[1].data.push(count + random());

      chartRef.current.data.datasets[2].data.shift();
      chartRef.current.data.datasets[2].data.push(count + random());
      
      chartRef.current.update()
    }, 1000);

    return () => clearInterval(randGraphInterval);
  }, [chartRef, count])
  

  return (
    <>
      <CChartLine
        ref={chartRef}
        style={{ height: '300px', marginTop: '40px' }}
        data={{
          labels: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00'],
          datasets: [
            {
              label: 'My First dataset',
              backgroundColor: `rgba(${getStyle('--cui-info-rgb')}, .1)`,
              borderColor: getStyle('--cui-info'),
              pointHoverBackgroundColor: getStyle('--cui-info'),
              borderWidth: 2,
              data: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
              ],
              fill: true,
            },
            {
              label: 'My Second dataset',
              backgroundColor: 'transparent',
              borderColor: getStyle('--cui-success'),
              pointHoverBackgroundColor: getStyle('--cui-success'),
              borderWidth: 2,
              data: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
              ],
            },
            {
              label: 'My Third dataset',
              backgroundColor: 'transparent',
              borderColor: getStyle('--cui-danger'),
              pointHoverBackgroundColor: getStyle('--cui-danger'),
              borderWidth: 1,
              borderDash: [8, 5],
              data: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
              ],
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                color: getStyle('--cui-border-color-translucent'),
                drawOnChartArea: false,
              },
              ticks: {
                color: getStyle('--cui-body-color'),
              },
            },
            y: {
              beginAtZero: true,
              border: {
                color: getStyle('--cui-border-color-translucent'),
              },
              grid: {
                color: getStyle('--cui-border-color-translucent'),
              },
              max: 250,
              ticks: {
                color: getStyle('--cui-body-color'),
                maxTicksLimit: 5,
                stepSize: Math.ceil(250 / 5),
              },
            },
          },
          elements: {
            line: {
              tension: 0.4,
            },
            point: {
              radius: 0,
              hitRadius: 10,
              hoverRadius: 4,
              hoverBorderWidth: 3,
            },
          },
        }}
      />
    </>
  )
}

export default MainChart
