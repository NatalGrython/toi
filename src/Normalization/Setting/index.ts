export interface RowPeopleData {
    _id: string
    age: number
    gender: 'male' | 'female'
    profession: string
    balance: string
}

export interface SettingPeopleData {
    _id: string
    age: number
    gender: 1 | 0
    profession: number
    balance: number
}

const rowData: RowPeopleData[] = [
    {
        _id: '60a572d4fccadaac8a9d6245',
        balance: '$1,389.45',
        age: 24,
        gender: 'male',
        profession: 'Врач',
    },
    {
        _id: '60a572d4b042505a1059bac0',
        balance: '$1,901.76',
        age: 20,
        gender: 'female',
        profession: 'Архитектор',
    },
    {
        _id: '60a572d4b28b03c80465a7d9',
        balance: '$3,534.56',
        age: 30,
        gender: 'female',
        profession: 'Программист',
    },
    {
        _id: '60a572d4f10876baf9bb1c68',
        balance: '$1,712.17',
        age: 26,
        gender: 'female',
        profession: 'Военный',
    },
    {
        _id: '60a572d4a4034a6bdf6ba546',
        balance: '$3,087.69',
        age: 40,
        gender: 'male',
        profession: 'Строитель',
    },
    {
        _id: '60a572d4efe8c1426e67fbad',
        balance: '$2,258.05',
        age: 39,
        gender: 'female',
        profession: 'Архитектор',
    },
    {
        _id: '60a572d43d7106a2e0d71144',
        balance: '$3,094.15',
        age: 36,
        gender: 'male',
        profession: 'Учитель',
    },
    {
        _id: '60a572d46089a5319d91a147',
        balance: '$3,583.70',
        age: 35,
        gender: 'male',
        profession: 'Врач',
    },
    {
        _id: '60a572d4865dd48c9985f4b6',
        balance: '$2,180.66',
        age: 38,
        gender: 'male',
        profession: 'Программист',
    },
    {
        _id: '60a572d4863a5953352ebb7f',
        balance: '$3,321.93',
        age: 29,
        gender: 'female',
        profession: 'Военный',
    },
    {
        _id: '60a572d4fd0bdf6eaaace8ac',
        balance: '$1,795.52',
        age: 26,
        gender: 'male',
        profession: 'Врач',
    },
    {
        _id: '60a572d407787f7a769328f0',
        balance: '$2,504.05',
        age: 28,
        gender: 'male',
        profession: 'Архитектор',
    },
    {
        _id: '60a572d42a056b3f2cfe92c8',
        balance: '$2,117.97',
        age: 31,
        gender: 'male',
        profession: 'Строитель',
    },
    {
        _id: '60a572d46f7e779be8b17a73',
        balance: '$3,438.91',
        age: 34,
        gender: 'female',
        profession: 'Учитель',
    },
    {
        _id: '60a572d4ce6055ae1f5ffbd8',
        balance: '$3,501.95',
        age: 29,
        gender: 'female',
        profession: 'Строитель',
    },
    {
        _id: '60a572d4f413569361431fdb',
        balance: '$3,782.65',
        age: 31,
        gender: 'female',
        profession: 'Учитель',
    },
    {
        _id: '60a572d49e9d3ab3029f2b05',
        balance: '$3,229.61',
        age: 27,
        gender: 'female',
        profession: 'Программист',
    },
    {
        _id: '60a572d420f2390f057f8ff1',
        balance: '$2,114.45',
        age: 25,
        gender: 'male',
        profession: 'Архитектор',
    },
    {
        _id: '60a572d44747004808d55199',
        balance: '$1,096.48',
        age: 39,
        gender: 'female',
        profession: 'Программист',
    },
    {
        _id: '60a572d44bb85ad8444a4dfc',
        balance: '$3,575.97',
        age: 21,
        gender: 'female',
        profession: 'Военный',
    },
    {
        _id: '60a572d4aca7bfbef7c09af4',
        balance: '$3,627.32',
        age: 22,
        gender: 'female',
        profession: 'Строитель',
    },
    {
        _id: '60a572d4d67985ab2456bf4e',
        balance: '$3,906.90',
        age: 21,
        gender: 'male',
        profession: 'Учитель',
    },
    {
        _id: '60a572d4c1905f5fd85e95a2',
        balance: '$3,877.50',
        age: 39,
        gender: 'female',
        profession: 'Врач',
    },
    {
        _id: '60a572d4b21c6dbce77f07f8',
        balance: '$2,854.38',
        age: 39,
        gender: 'male',
        profession: 'Программист',
    },
    {
        _id: '60a572d417f29b563b04b473',
        balance: '$2,811.02',
        age: 28,
        gender: 'female',
        profession: 'Учитель',
    },
    {
        _id: '60a572d443e0e7eb19c4c9a0',
        balance: '$2,926.14',
        age: 31,
        gender: 'female',
        profession: 'Архитектор',
    },
    {
        _id: '60a572d4405b0313dd4ab93b',
        balance: '$1,202.91',
        age: 23,
        gender: 'male',
        profession: 'Врач',
    },
    {
        _id: '60a572d426e03df868fea916',
        balance: '$1,064.86',
        age: 32,
        gender: 'male',
        profession: 'Военный',
    },
    {
        _id: '60a572d42d9c8033bc0784e5',
        balance: '$2,915.35',
        age: 36,
        gender: 'male',
        profession: 'Строитель',
    },
    {
        _id: '60a572d4178b218453fee49e',
        balance: '$2,724.96',
        age: 28,
        gender: 'female',
        profession: 'Архитектор',
    },
]

console.group('Начальный набор данных')
console.table(rowData)
console.groupEnd()

const mapProfession = (data: RowPeopleData[]) => {
    const professionSet = new Set<string>()
    data.forEach(item => {
        professionSet.add(item.profession)
    })
    const professionArray = Array.from(professionSet)
    const professionDict: { [key: string]: number } = {}
    professionArray.forEach((item, index) => {
        professionDict[item] = index + 1
    })
    return professionDict
}

const mapBalance = (balance: string) =>
    parseFloat(balance.replace('$', '').replace(',', ''))

export const settingData = (data: RowPeopleData[]): SettingPeopleData[] => {
    const professionDict = mapProfession(data)

    return data.map(item => ({
        ...item,
        gender: item.gender === 'male' ? 1 : 0,
        profession: professionDict[item.profession],
        balance: mapBalance(item.balance),
    }))
}

console.group('Преобразованные данные')
console.table(settingData(rowData))
console.groupEnd()

const getInterval = (data: SettingPeopleData[], groupLength: number) => {
    const max = data.reduce(
        (acc, item) => (item.balance > acc ? item.balance : acc),
        0
    )
    const min = data.reduce(
        (acc, item) => (item.balance > acc ? acc : item.balance),
        max
    )
    return Math.floor((max - min) / groupLength)
}

const searchIndexs = (arrIndex: number[][], index: number) =>
    arrIndex.some(arr => arr.includes(index))

const groupData = (data: SettingPeopleData[], rowData: RowPeopleData[]) => {
    const groupLength = Math.floor(Math.log2(data.length) + 1)
    const balanceInterval = getInterval(data, groupLength)
    const condition = (
        peopleA: SettingPeopleData,
        peopleB: SettingPeopleData
    ) =>
        peopleA.balance - peopleB.balance <= balanceInterval &&
        peopleA.balance - peopleB.balance >= 0

    const groups: RowPeopleData[][] = []
    const groupsIndex: number[][] = []
    data.forEach((people, index, arr) => {
        if (!searchIndexs(groupsIndex, index)) {
            const groupIndex = new Set<number>()
            groupIndex.add(index)
            arr.forEach((peopleInside, insideIndex) => {
                if (!searchIndexs(groupsIndex, insideIndex)) {
                    if (condition(people, peopleInside)) {
                        groupIndex.add(insideIndex)
                    }
                }
            })
            groupsIndex.push(Array.from(groupIndex))
        }
    })

    groupsIndex.forEach((arrIndex, index) => {
        arrIndex.forEach(itemIndex => {
            if (groups[index]) {
                groups[index].push(rowData[itemIndex])
            } else {
                groups[index] = [rowData[itemIndex]]
            }
        })
    })
    groups
    return groups
}

const mergeData = (data: RowPeopleData[][]) => {
    const arr: RowPeopleData[] = []
    data.forEach(item => item.forEach(insideItem => arr.push(insideItem)))
    return arr
}

console.group('Сгруппированные данные')
groupData(settingData(rowData), rowData).forEach((data, index) => {
    console.group(index + 1)
    console.table(data)
    console.groupEnd()
})
console.groupEnd()

console.group('Слияение данных')
console.table(mergeData(groupData(settingData(rowData), rowData)))
console.groupEnd()

const mergedData: RowPeopleData[] = mergeData(
    groupData(settingData(rowData), rowData)
)

export default mergedData
