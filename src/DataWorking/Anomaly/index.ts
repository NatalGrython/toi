const clearOneMetric: number[] = [
    10, 13, 12, 22, 26, 17, 3, 14, 4, 23, 6, 5, 9, 25, 1,
]

const dirtyOneMetric: number[] = [
    10, 13, 12, 65, 26, 17, 3, 123, 4, 23, 6, 55, 9, 25, 1,
]

const clearTwoMetric: number[][] = [
    [3, 2],
    [5, 1],
    [2, 3],
    [4, 7],
    [9, 2],
    [7, 3],
    [4, 5],
    [8, 1],
    [2, 3],
    [4, 8],
]

const dirtyTwoMetric: [number, number][] = [
    [3, 2],
    [5, 1],
    [2, 3],
    [32, 7],
    [9, 2],
    [7, 3],
    [4, 21],
    [8, 1],
    [42, 3],
    [4, 8],
]

const parseDict = (
    data: {
        [key: string]: [number, number]
    }[][]
) => {
    const set = new Set<number>()
    const arrIndex: number[] = []
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            const dict = data[i][j]
            Object.values(dict).map(item => {
                set.add(item[0])
            })
        }
    }
    arrIndex.push(...set.keys())
    return arrIndex
}

const searhAnomalyOneMetric = (data: number[], d: number, p: number) => {
    const condition = (item1: number, item2: number) => item1 - item2 > d
    const dictArr: {
        [key: string]: [number, number]
    }[][] = []
    data.forEach((item, index, arr) => {
        const coincidenceArr: { [key: string]: [number, number] }[] = []
        arr.forEach((insideItem, insideIndex) => {
            if (condition(item, insideItem)) {
                coincidenceArr.push({
                    [`${item}-${insideItem}`]: [index, insideIndex],
                })
            }
        })
        if (coincidenceArr.length > p) {
            dictArr.push(coincidenceArr)
        }
    })
    const arrIndexAnomalyValue = parseDict(dictArr)
    return arrIndexAnomalyValue
}

const deleteAnomalyValueOneMetric = (data: number[]) => {
    const arrIndexAnomaly = searhAnomalyOneMetric(data, 30, 8)
    return data.filter((_, index) => !arrIndexAnomaly.includes(index))
}

const interpolationOneMetric = (data: number[]) => {
    const arrIndexAnomaly = searhAnomalyOneMetric(data, 30, 8)
    const neighbourIndexes: {
        [key: number]: { left: number; rigth: number }
    } = {}

    arrIndexAnomaly.forEach(item => {
        neighbourIndexes[item] = { left: item - 1, rigth: item + 1 }
    })

    const newData = data.map((item, index, arr) => {
        if (arrIndexAnomaly.includes(index)) {
            const left = arr.find(
                (_, indexFind) => indexFind === neighbourIndexes[index].left
            )
            const rigth = arr.find(
                (_, indexFind) => indexFind === neighbourIndexes[index].rigth
            )

            if (left && rigth) {
                const middle = Math.floor((left + rigth) / 2)
                return middle
            }
        }
        return item
    })
    return newData
}

const searhAnomalyTwoMetric = (
    data: [number, number][],
    d: number,
    p: number
) => {
    const condition = (item1: [number, number], item2: [number, number]) => {
        const range = Math.floor(
            Math.sqrt(
                Math.pow(item1[0] - item2[0], 2) +
                    Math.pow(item1[1] - item2[1], 2)
            )
        )
        return range > d
    }
    const dictArr: {
        [key: string]: [number, number]
    }[][] = []

    data.forEach((item, index, arr) => {
        const coincidenceArr: { [key: string]: [number, number] }[] = []
        arr.forEach((insideItem, insideIndex) => {
            if (condition(item, insideItem)) {
                coincidenceArr.push({
                    [`${item[0]}:${item[1]}-${insideItem[0]}:${insideItem[1]}`]:
                        [index, insideIndex],
                })
            }
        })
        if (coincidenceArr.length > p) {
            dictArr.push(coincidenceArr)
        }
    })
    const arrIndexAnomalyValue = parseDict(dictArr)
    return arrIndexAnomalyValue
}

const deleteAnomalyValueTwoMetric = (data: [number, number][]) => {
    const arrIndexAnomaly = searhAnomalyTwoMetric(data, 14, 6)
    return data.filter((_, index) => !arrIndexAnomaly.includes(index))
}

const interpolationTwoMetric = (data: [number, number][]) => {
    const arrIndexAnomaly = searhAnomalyTwoMetric(data, 14, 6)
    const neighbourIndexes: {
        [key: number]: { left: number; rigth: number }
    } = {}

    arrIndexAnomaly.forEach(item => {
        neighbourIndexes[item] = { left: item - 1, rigth: item + 1 }
    })

    const newData = data.map((item, index, arr) => {
        if (arrIndexAnomaly.includes(index)) {
            const left = arr.find(
                (_, indexFind) => indexFind === neighbourIndexes[index].left
            )
            const rigth = arr.find(
                (_, indexFind) => indexFind === neighbourIndexes[index].rigth
            )

            if (left && rigth) {
                const middle = [
                    Math.floor((left[0] + rigth[0]) / 2),
                    Math.floor((left[1] + rigth[1]) / 2),
                ]
                return middle
            }
        }
        return item
    })
    return newData
}

console.group('Одномерные данные')
console.log('Чистые данные', clearOneMetric)
console.log(
    'Удаление аномальных значений',
    deleteAnomalyValueOneMetric(dirtyOneMetric)
)
console.log(
    'Интерполяция примерных значений',
    interpolationOneMetric(dirtyOneMetric)
)
console.groupEnd()

console.group('Двумерные данные')
console.log('Чистые данные', clearTwoMetric)
console.log(
    'Удаление аномальных значений',
    deleteAnomalyValueTwoMetric(dirtyTwoMetric)
)
console.log(
    'Интерполяция примерных значений',
    interpolationTwoMetric(dirtyTwoMetric)
)
console.groupEnd()
