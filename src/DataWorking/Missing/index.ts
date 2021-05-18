const regression = require('regression')

type ClearType = number[][]

type DirtyType = (number | null)[][]

const deleteDirtyData = (data: DirtyType) => {
    const arrIndex: Set<number> = new Set()
    data.forEach(arr =>
        arr.forEach((item, index) => {
            if (item === null) {
                arrIndex.add(index)
            }
        })
    )
    const newArray: number[][] = []
    for (let i = 0; i < data.length; i++) {
        const insideArr: number[] = []
        for (let j = 0; j < data[0].length; j++) {
            if (!arrIndex.has(j)) {
                const value = data[i][j]
                if (value) {
                    insideArr.push(value)
                }
            }
        }
        newArray.push(insideArr)
    }
    return newArray
}

const ignoreDirtyData = (data: DirtyType) => {
    return data.map(arr => arr.filter(item => item !== null))
}

const middleData = (data: DirtyType) => {
    let summ: number = 0
    const allItemLength: number = data.length * data[0].length

    data.forEach(arr =>
        arr.forEach(item => {
            if (item) {
                summ = summ + item
            }
        })
    )

    const middleNumber = Math.floor(summ / allItemLength)

    return data.map(arr =>
        arr.map(item => {
            if (!item) {
                return middleNumber
            }
            return item
        })
    )
}

const repeatLastvalue = (data: DirtyType) => {
    return data.map(arr =>
        arr.map((item, index, array) => {
            if (item === null) {
                return array[index - 1]
            }
            return item
        })
    )
}

const nullValue = (data: DirtyType) =>
    data.map(arr => arr.map(item => (item === null ? 0 : item)))

const linearRegrestion = (data: DirtyType) => {
    const { points } = regression.linear(data)

    return data.map(arr =>
        arr.map(item => {
            if (item === null) {
                return points[Math.floor(Math.random() * points.length)][
                    Math.floor(Math.random() * points[0].length)
                ]
            }
            return item
        })
    )
}

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

const middleValue = (data: any[][]) => {
    const sum = data.reduce(
        (acc, item) =>
            acc +
            item.reduce((insideAcc, insideItem) => insideAcc + insideItem, 0),
        0
    )
    console.log(sum)
    const length = data.reduce((acc, item) => acc + item.length, 0)
    console.log(length)
    return sum / length
}
console.group('Удаление')

console.log('Удаление пропусков', deleteDirtyData(dirtyData))
console.log('Чистые данные', clearData)
console.groupEnd()

console.group('Игнорирование пропусков')
console.log('Игнорирование пропусков', ignoreDirtyData(dirtyData))
console.log('Чистые данные', clearData)
console.groupEnd()

console.group('Среднее значение')
console.log('Среднее значение', middleData(dirtyData))
console.log('Чистые данные', clearData)
console.groupEnd()

console.group('Ноль значение')
console.log('Ноль значение', nullValue(dirtyData))
console.log('Чистые данные', clearData)
console.groupEnd()

console.group('Повторение')
console.log('Повторение последнего значения', repeatLastvalue(dirtyData))
console.log('Чистые данные', clearData)
console.groupEnd()

console.group('Линейная регрессия')
console.log('Линейная регрессия', linearRegrestion(dirtyData))
console.log('Чистые данные', clearData)
console.groupEnd()

console.table({
    Чистые: middleValue(clearData) - middleValue(clearData),
    Удаление: middleValue(clearData) - middleValue(deleteDirtyData(dirtyData)),
    Игнорирование:
        middleValue(clearData) - middleValue(ignoreDirtyData(dirtyData)),
    'Среднее значение':
        middleValue(clearData) - middleValue(middleData(dirtyData)),
    'Ноль значение': middleValue(clearData) - middleValue(nullValue(dirtyData)),
    Повторение:
        middleValue(clearData) - middleValue(repeatLastvalue(dirtyData)),
    'Линейная регрессия':
        middleValue(clearData) - middleValue(linearRegrestion(dirtyData)),
})
