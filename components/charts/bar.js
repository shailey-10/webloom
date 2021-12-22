import React from 'react'
import {Bar} from 'react-chartjs-2'
import barChart from './barChart.module.css'

function BarChart() {
    return (
        <div className={barChart.chart}>
            <Bar 
            data = {{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
                datasets: [
                    {
                        label: 'Recieved',
                        data:  [100,110, 130, 120, 75, 115],
                        backgroundColor: '#3954FF',
                        barThickness: 10,
                       
                    },
                    {
                        label: 'Completed',
                        data:  [50,90, 110, 100, 40, 100],
                        backgroundColor: '#FFD339',
                        barThickness: 10,
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

export default BarChart
