import {
    Chart,
    LinearScale,
    LineController,
    LineElement,
    PointElement,
    Title,
    BarController,
    CategoryScale,
    BarElement,
    BubbleController,
} from 'chart.js'

Chart.register(
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    BarController,
    CategoryScale,
    BarElement,
    BubbleController
)

class ChartFabric {
    createChart(data: number[], element: string) {
        const canvas = document
            .querySelector<HTMLCanvasElement>(element)
            .getContext('2d')
        return new Chart(canvas, {
            type: 'line',
            data: {
                labels: [
                    'One',
                    'Two',
                    'Three',
                    'Fore',
                    'Five',
                    'Six',
                    'Seven',
                    'Eith',
                    'Nine',
                    'Ten',
                ],
                datasets: [{ borderWidth: 2, label: '# of Votes', data }],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
                responsive: false,
            },
        })
    }
}

const chartFabric = new ChartFabric()

export default chartFabric
