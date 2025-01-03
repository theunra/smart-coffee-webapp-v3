import React, { useContext, useEffect, useRef, useState } from 'react'

import { CChartLine } from '@coreui/react-chartjs'
import { getStyle } from '@coreui/utils'
import SensorContext from '../../contexts'

const MainChart = () => {
  const chartRef = useRef(null);
  const [chartHovered, setChartHovered] = useState(false);

  const defaultData = [];
  const defaultLabels = [];

  for(let i = 0 ; i < 30; i++){
    defaultData.push(0);
    defaultLabels.push("0:00");
  }

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

  }, [chartRef])

  const {sensorData} = useContext(SensorContext);

  useEffect(() => {
    const now = new Date();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    chartRef.current.data.labels.shift();
    chartRef.current.data.labels.push(min + ":" + sec);
    chartRef.current.data.datasets[0].data = sensorData.mq135;
    chartRef.current.data.datasets[1].data = sensorData.mq136;
    chartRef.current.data.datasets[2].data = sensorData.mq137;
    chartRef.current.data.datasets[3].data = sensorData.mq138;
    chartRef.current.data.datasets[4].data = sensorData.mq2;
    chartRef.current.data.datasets[5].data = sensorData.mq3;
    chartRef.current.data.datasets[6].data = sensorData.tgs822;
    chartRef.current.data.datasets[7].data = sensorData.tgs2620;

    if(!chartHovered) chartRef.current.update()

    },[sensorData]);
  

  return (
    <>
      <CChartLine
        onMouseEnter={()=>{setChartHovered(true)}}
        onMouseLeave={()=>{setChartHovered(false)}}
        ref={chartRef}
        style={{ height: '300px', marginTop: '40px' }}
        data={{
          labels: defaultLabels,
          datasets: [
            {
              label: 'MQ135',
              backgroundColor: `rgba(${getStyle('--cui-info-rgb')}, .1)`,
              borderColor: getStyle('--cui-primary'),
              pointHoverBackgroundColor: getStyle('--cui-primary'),
              borderWidth: 2,
              data: defaultData,
              fill: true,
            },
            {
              label: 'MQ136',
              backgroundColor: 'transparent',
              borderColor: getStyle('--cui-info'),
              pointHoverBackgroundColor: getStyle('--cui-info'),
              borderWidth: 2,
              data: defaultData,
            },
            {
              label: 'MQ137',
              backgroundColor: 'transparent',
              borderColor: getStyle('--cui-success'),
              pointHoverBackgroundColor: getStyle('--cui-success'),
              borderWidth: 1,
              // borderDash: [8, 5],
              data: defaultData,
            },
            {
              label: 'MQ138',
              backgroundColor: 'transparent',
              borderColor: getStyle('--cui-warning'),
              pointHoverBackgroundColor: getStyle('--cui-warning'),
              borderWidth: 1,
              // borderDash: [8, 5],
              data: defaultData,
            },
            {
              label: 'MQ2',
              backgroundColor: 'transparent',
              borderColor: getStyle('--cui-primary'),
              pointHoverBackgroundColor: getStyle('--cui-primary'),
              borderWidth: 1,
              borderDash: [8, 5],
              data: defaultData,
            },
            {
              label: 'MQ3',
              backgroundColor: 'transparent',
              borderColor: getStyle('--cui-info'),
              pointHoverBackgroundColor: getStyle('--cui-info'),
              borderWidth: 1,
              borderDash: [8, 5],
              data: defaultData,
            },
            {
              label: 'TGS822',
              backgroundColor: 'transparent',
              borderColor: getStyle('--cui-success'),
              pointHoverBackgroundColor: getStyle('--cui-success'),
              borderWidth: 1,
              borderDash: [8, 5],
              data: defaultData,
            },
            {
              label: 'TGS2620',
              backgroundColor: 'transparent',
              borderColor: getStyle('--cui-warning'),
              pointHoverBackgroundColor: getStyle('--cui-warning'),
              borderWidth: 1,
              borderDash: [8, 5],
              data: defaultData,
            },
          ],
        }}
        options={{
          animation: false,
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
