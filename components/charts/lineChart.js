import React from 'react'
import {Line} from 'react-chartjs-2'
import barChart from './barChart.module.css'

function LineChart() {
    return (
        <div className={barChart.line}>
            <Line 
            data = {{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
                datasets: [
                    {
                        label: 'Recieved',
                        data:  [19,31, 23, 41, 24, 34],
                        backgroundColor: '#3954FF',
                        borderColor: '#3954FF',
                        barThickness: 10,
                        tension	:0.4                      
                    }
                ]
            }}
            height ={400}
            width = {600}
            options= {{
                plugins: {
                    legend: {
                      display: false
                    }
                  },
                responsive:true,
                maintainAspectRatio: false,
                scales: {
                    x: 
                    {
                  grid:{
                   display:false
                       }
                    },
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                            
                        },
                        
                    ]
                }
            }}
            />
        </div>
    )
}

export default LineChart
