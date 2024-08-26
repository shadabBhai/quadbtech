import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CircularGraph() {
    const data = {
        labels: ['Done', 'Pending'],
        datasets: [
            {
                label: 'Task Status',
                data: [50, 30],
                backgroundColor: ['#4CAF50', '#F44336'],
                hoverBackgroundColor: ['#66BB6A', '#EF5350'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <div className="w-64 h-64 mx-auto">
            <Doughnut data={data} options={options} />
        </div>
    );
}
