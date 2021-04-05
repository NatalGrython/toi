import regression from 'regression'

export const deleteDirtyData = (data: number[][]) => {
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
                insideArr.push(data[i][j])
            }
        }
        newArray.push(insideArr)
    }
    return newArray
}

export const ignoreDirtyData = (data: number[][]) => {
    return data.map(arr => arr.filter(item => item !== null))
}

export const middleData = (data: number[][]) => {
    let summ: number = 0
    const allItemLength: number = data.length * data[0].length

    data.forEach(arr =>
        arr.forEach(item => {
            summ = summ + item
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

export const repeatLastvalue = (data: number[][]) => {
    return data.map(arr =>
        arr.map((item, index, array) => {
            if (item === null) {
                return array[index - 1]
            }
            return item
        })
    )
}

export const nullValue = (data: number[][]) =>
    data.map(arr => arr.map(item => (item === null ? 0 : item)))

export const linearRegrestion = (data: number[][]) => {
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
