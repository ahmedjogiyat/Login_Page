import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
        label: 'My Second dataset',
        backgroundColor: 'rgba(25,85,80,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'red',
        hoverBorderColor: 'blue',
        data: [5, 25, 50, 41, 100, 80, 40]
      }
  ]
};

function BarChart(){
    return (
      <div>
       <center><h2>Bar Example (custom size)</h2></center> 
        <Bar
          data={data}
          width={100}
          height={250}
          
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
}

export default BarChart;
