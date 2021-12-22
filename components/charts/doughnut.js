import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import 'chart.js/auto';


function DoughnutChart(props) {

    var innerCircle;
    if(props.circle){
        innerCircle = 65
    } else{
        innerCircle = 0
    }

    return (
        <div>
            <Doughnut 
            data ={{
                datasets: [
                    {
                        labels: ['Task Completed','Task Remaining'],
                        data: [props.completed, props.remaining],
                        backgroundColor: [props.covered, props.vacant]
                    }
                ]}}
                options= {{
                    cutout: props.cutout,
                    animation: {
                        animateScale: true
                    },
                    rotation: 180
                }
                }
                plugins = {[{
                    beforeDraw: function(chart) {
                     var width = chart.width,
                         height = chart.height,
                         x = chart.width / 2,
                         y = chart.height / 2,
                         ctx = chart.ctx;
                         ctx.beginPath();
                         ctx.arc(x,y,innerCircle,0,2*Math.PI);
                         ctx.fillStyle = '#fff';
                         ctx.fill();
                         ctx.closePath();
                         ctx.restore();
                         var fontSize = (height / 100).toFixed(2);
                         ctx.font = fontSize + "em poppins";
                         ctx.textBaseline = "top";
                         ctx.fillStyle = props.covered;
                         var text = props.completed + '%',
                         textX = Math.round((width - ctx.measureText(text).width) / 2),
                         textY = height / 2;
                         ctx.fillText(text, textX, textY);
                         ctx.save();
                    } 
                  }]}
             />
        </div>
    )


}

export default DoughnutChart
