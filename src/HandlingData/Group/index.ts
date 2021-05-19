interface People {
    _id: string
    balance: string
    age: number
    name: string
    gender: 'male' | 'female'
}

const peopleData: People[] = [
    {
        _id: '609f1646a8d6f4539f267031',
        balance: '$2,832.70',
        age: 36,
        name: 'Lynnette Salas',
        gender: 'female',
    },
    {
        _id: '609f16462526f0c32b04c973',
        balance: '$2,951.56',
        age: 40,
        name: 'Kathy Flynn',
        gender: 'female',
    },
    {
        _id: '609f164661786756ed02bff0',
        balance: '$3,904.11',
        age: 26,
        name: 'Webb Everett',
        gender: 'male',
    },
    {
        _id: '609f1646a87c4470aa84fcba',
        balance: '$2,764.67',
        age: 26,
        name: 'Erica Ayers',
        gender: 'female',
    },
    {
        _id: '609f1646c5adc66b3f86e754',
        balance: '$2,671.44',
        age: 20,
        name: 'Lavonne Morton',
        gender: 'female',
    },
    {
        _id: '609f1646210803b45ea96183',
        balance: '$2,591.27',
        age: 29,
        name: 'Tabatha Massey',
        gender: 'female',
    },
    {
        _id: '609f164666ab74e87a4b5f15',
        balance: '$3,918.58',
        age: 20,
        name: 'Reva Hull',
        gender: 'female',
    },
    {
        _id: '609f1646e67060b04d910b98',
        balance: '$2,731.59',
        age: 24,
        name: 'Benita Merritt',
        gender: 'female',
    },
    {
        _id: '609f1646e12a6595b0f9e3d4',
        balance: '$2,959.08',
        age: 35,
        name: 'Muriel Floyd',
        gender: 'female',
    },
    {
        _id: '609f1646053d86ec157e8656',
        balance: '$2,799.29',
        age: 32,
        name: 'Debora Byers',
        gender: 'female',
    },
    {
        _id: '609f16468aa25cdc698eb4f9',
        balance: '$3,586.52',
        age: 34,
        name: 'Blair Ward',
        gender: 'male',
    },
    {
        _id: '609f1646216b80f6c2bc2218',
        balance: '$2,270.82',
        age: 31,
        name: 'Sonya Bush',
        gender: 'female',
    },
    {
        _id: '609f1646ab8500d9d583c1c3',
        balance: '$1,339.20',
        age: 27,
        name: 'Maude Christian',
        gender: 'female',
    },
    {
        _id: '609f1646af820db1416b3522',
        balance: '$1,561.75',
        age: 39,
        name: 'Frances Coffey',
        gender: 'female',
    },
    {
        _id: '609f16465f078ef76de3187b',
        balance: '$3,978.75',
        age: 31,
        name: 'Edith Becker',
        gender: 'female',
    },
    {
        _id: '609f16462f01e3a59e455613',
        balance: '$1,450.20',
        age: 38,
        name: 'Waller Holden',
        gender: 'male',
    },
    {
        _id: '609f16460ac1725e60151f0f',
        balance: '$1,361.73',
        age: 33,
        name: 'Richard Cameron',
        gender: 'male',
    },
    {
        _id: '609f164682e6864311777543',
        balance: '$3,044.47',
        age: 24,
        name: 'Hopper Bates',
        gender: 'male',
    },
    {
        _id: '609f16466a7444b39381e3e1',
        balance: '$1,178.12',
        age: 24,
        name: 'Kelli Maxwell',
        gender: 'female',
    },
    {
        _id: '609f16460f3fe1044ac00029',
        balance: '$1,171.56',
        age: 21,
        name: 'Tillman Kim',
        gender: 'male',
    },
]

console.table(peopleData)

const getAgeInterval = (data: People[], groupLength: number) => {
    const max = data.reduce((acc, item) => (acc > item.age ? acc : item.age), 0)
    const min = data.reduce(
        (acc, item) => (acc > item.age ? item.age : acc),
        max
    )
    return Math.floor((max - min) / groupLength)
}

const getBalanceInterval = (data: People[], groupLength: number) => {
    const formatedData = data.map(people => {
        const newPeople = {
            ...people,
            balance: parseFloat(
                people.balance.replace('$', '2').replace(',', '')
            ),
        }
        return newPeople
    })
    const max = formatedData.reduce(
        (acc, item) => (acc > item.balance ? acc : item.balance),
        0
    )
    const min = formatedData.reduce(
        (acc, item) => (acc > item.balance ? item.balance : acc),
        max
    )

    return Math.floor((max - min) / groupLength)
}

const searchIndex = (arrIndex: number[][], index: number) =>
    arrIndex.some(arr => arr.includes(index))

const group = (data: People[]) => {
    const groupLength = Math.floor(Math.log2(data.length) + 1)
    const ageInterval = getAgeInterval(data, groupLength)
    const balanceInterval = getBalanceInterval(data, groupLength)
    const condition = (peopleA: any, peopleB: any) =>
        peopleA.age - peopleB.age <= ageInterval &&
        peopleA.age - peopleB.age >= 0 &&
        peopleA.balance - peopleB.balance <= balanceInterval &&
        peopleA.balance - peopleB.balance >= 0
    const groups: People[][] = []
    const groupsIndex: number[][] = []
    data.forEach((people, index, arr) => {
        if (!searchIndex(groupsIndex, index)) {
            const newPeople = {
                ...people,
                balance: parseFloat(
                    people.balance.replace('$', '2').replace(',', '')
                ),
            }
            const groupIndex = new Set<number>()
            groupIndex.add(index)
            arr.forEach((peopleInside, insideIndex) => {
                if (!searchIndex(groupsIndex, insideIndex)) {
                    const newPeopleInside = {
                        ...peopleInside,
                        balance: parseFloat(
                            people.balance.replace('$', '2').replace(',', '')
                        ),
                    }
                    if (condition(newPeople, newPeopleInside)) {
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
                groups[index].push(data[itemIndex])
            } else {
                groups[index] = [data[itemIndex]]
            }
        })
    })

    return groups
}

group(peopleData).forEach((data, index) => {
    console.group(`Группа ${index + 1}`)
    console.table(data)
    console.groupEnd()
})
