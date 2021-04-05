import chartFabric from './ChartService'
import { ClearType, DirtyType } from './types'
import './style/index.css'

import {
    deleteDirtyData,
    ignoreDirtyData,
    linearRegrestion,
    middleData,
    nullValue,
    repeatLastvalue,
} from './utils'

const clearData: ClearType = [
    [2, 9, 2, 5, 9, 7, 5, 3, 3, 9],
    [0, 7, 0, 7, 7, 8, 7, 5, 4, 7],
    [5, 1, 3, 5, 2, 0, 2, 1, 7, 2],
]

const dirtyData: DirtyType = [
    [2, 9, 2, 5, 9, 7, 5, 3, 3, 9],
    [0, null, 0, null, 7, null, 7, 5, 4, null],
    [5, null, 3, 5, 2, null, 2, 1, null, 2],
]

const chart1 = chartFabric.createChart(clearData[0], 'canvas#myChart')
const chart2 = chartFabric.createChart(dirtyData[0], 'canvas#myChart2')
const chart3 = chartFabric.createChart(clearData[1], 'canvas#myChart3')
const chart4 = chartFabric.createChart(dirtyData[1], 'canvas#myChart4')
const chart5 = chartFabric.createChart(clearData[2], 'canvas#myChar5')
const chart6 = chartFabric.createChart(dirtyData[2], 'canvas#myChart6')
