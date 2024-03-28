import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Graph = ({ expenses, budget }) => {
    const chartRef = useRef(null);

    // Function to calculate total expenses for each day
    const calculateDailyExpenses = () => {
        const dailyExpenses = {};

        expenses.forEach((expense) => {
            const date = new Date(expense.date).toLocaleDateString();
            if (dailyExpenses[date]) {
                dailyExpenses[date] += expense.cost;
            } else {
                dailyExpenses[date] = expense.cost;
            }
        });

        return dailyExpenses;
    };

    // Function to render or update the chart
    const renderChart = () => {
        const dailyExpenses = calculateDailyExpenses();
        const dates = Object.keys(dailyExpenses);
        const costs = Object.values(dailyExpenses);

        if (chartRef.current) {
            // If chart instance exists, destroy it
            chartRef.current.destroy();
        }

        const ctx = document.getElementById('expenseChart');

        chartRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: dates,
                datasets: [
                    {
                        label: 'Expenses',
                        data: costs,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Budget',
                        data: Array(dates.length).fill(budget),
                        type: 'line',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 2,
                        fill: false
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 500,
                            max: 2000,
                            min: 0
                        }
                    }
                }
            }
        });
    };

    // Render or update the chart when component mounts or expenses/budget change
    useEffect(() => {
        renderChart();

        // Cleanup function to destroy the chart when component unmounts
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [expenses, budget]);

    return (
        <div style={{ width: '100%', height: '400px' }}>
            <canvas id='expenseChart' style={{ width: '100%', height: '100%' }}></canvas>
        </div>
    );
};

export default Graph;
