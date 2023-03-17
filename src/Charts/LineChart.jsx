import React from 'react'

import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement
} from 'chart.js'

ChartJS.register(
    LineElement, CategoryScale, LinearScale, PointElement
)
function LineChart() {
    const data = {
        labels: [2, "", 3,"", 4, "",5,"", 6,"", 7, "",8,"", 9, 0],
        datasets: [{
            data: [8, 9, 7.8, 7.9, 6,7, 8, 6,7, 5, 6],
            backgroundColor: 'transparent',
            borderColor: '#4BC0C0',
            pointBorderColor: 'transparent',
            pointBorderWidth: 4,
            tension: 0.5
        }]
    }
    const options = {
        plugins: {
            legend: false
        },
        scales:{
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                min: 2,
                max: 10,
                ticks: {
                    stepSize: 2,
                    callback: (value) => value + '%'
                },
                grid: {
                    borderDash: [10]
                }
            }
        }
    }
    return (
        <>
            <div className='w-full h-[160px]'>
                <Line data={data} options={options}></Line>
            </div>
        </>
    )
}
export default LineChart