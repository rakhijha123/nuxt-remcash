import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PieController, ArcElement, DoughnutController } from 'chart.js'
export default defineNuxtPlugin(() => {
    Chart.register(CategoryScale, LinearScale, BarElement, ArcElement,DoughnutController, PieController, Title, Tooltip, Legend)
})