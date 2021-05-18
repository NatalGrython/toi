interface Person {
    id: number
    surname: string
    name: string
    balance: number
    costCredit: number
}

const clear: Person[] = [
    {
        id: 0,
        costCredit: 3245.74,
        balance: 1951.73,
        name: 'Wilcox',
        surname: 'Juarez',
    },
    {
        id: 1,
        costCredit: 3568.86,
        balance: 3818.11,
        name: 'Willie',
        surname: 'Wiley',
    },
    {
        id: 2,
        costCredit: 3960.71,
        balance: 2702.82,
        name: 'Yesenia',
        surname: 'Parks',
    },
    {
        id: 3,
        costCredit: 3130.38,
        balance: 1170.98,
        name: 'Addie',
        surname: 'Hoffman',
    },
    {
        id: 4,
        costCredit: 1776.44,
        balance: 3194.1,
        name: 'Mcneil',
        surname: 'Carr',
    },
    {
        id: 5,
        costCredit: 1184.61,
        balance: 2478.83,
        name: 'Davis',
        surname: 'Moreno',
    },
    {
        id: 6,
        costCredit: 3909.94,
        balance: 2647.93,
        name: 'Audra',
        surname: 'Ball',
    },
    {
        id: 7,
        costCredit: 1249.75,
        balance: 2052.67,
        name: 'Hunter',
        surname: 'Boyle',
    },
    {
        id: 8,
        costCredit: 2765.28,
        balance: 1537.39,
        name: 'Pat',
        surname: 'Craig',
    },
    {
        id: 9,
        costCredit: 3570.48,
        balance: 3964.31,
        name: 'Blanche',
        surname: 'Cruz',
    },
    {
        id: 10,
        costCredit: 2455.59,
        balance: 3696.95,
        name: 'Daisy',
        surname: 'Meadows',
    },
    {
        id: 11,
        costCredit: 3859.48,
        balance: 1343.69,
        name: 'May',
        surname: 'Fletcher',
    },
    {
        id: 12,
        costCredit: 1308.78,
        balance: 1674.56,
        name: 'Jeanette',
        surname: 'Ortega',
    },
    {
        id: 13,
        costCredit: 3591.58,
        balance: 2934.15,
        name: 'Vaughan',
        surname: 'Garza',
    },
    {
        id: 14,
        costCredit: 1934.09,
        balance: 3016.61,
        name: 'Luisa',
        surname: 'Ashley',
    },
]

console.table(clear)

const dirty: Person[] = [
    {
        id: 0,
        costCredit: 3245.74,
        balance: 1951.73,
        name: 'Willie',
        surname: 'Wiley',
    },
    {
        id: 1,
        costCredit: 3568.86,
        balance: 3818.11,
        name: 'Willie',
        surname: 'Wiley',
    },
    {
        id: 2,
        costCredit: 3960.71,
        balance: 2702.82,
        name: 'Yesenia',
        surname: 'Parks',
    },
    {
        id: 3,
        costCredit: 3130.38,
        balance: 1170.98,
        name: 'Addie',
        surname: 'Hoffman',
    },
    {
        id: 4,
        costCredit: 1776.44,
        balance: 3194.1,
        name: 'Addie',
        surname: 'Hoffman',
    },
    {
        id: 5,
        costCredit: 1184.61,
        balance: 2478.83,
        name: 'Davis',
        surname: 'Moreno',
    },
    {
        id: 6,
        costCredit: 3909.94,
        balance: 2647.93,
        name: 'Audra',
        surname: 'Ball',
    },
    {
        id: 7,
        costCredit: 1249.75,
        balance: 2052.67,
        name: 'Hunter',
        surname: 'Boyle',
    },
    {
        id: 8,
        costCredit: 2765.28,
        balance: 1537.39,
        name: 'Pat',
        surname: 'Craig',
    },
    {
        id: 10,
        costCredit: 2455.59,
        balance: 3696.95,
        name: 'Daisy',
        surname: 'Meadows',
    },
    {
        id: 10,
        costCredit: 2455.59,
        balance: 3696.95,
        name: 'Daisy',
        surname: 'Meadows',
    },
    {
        id: 11,
        costCredit: 3859.48,
        balance: 1343.69,
        name: 'May',
        surname: 'Fletcher',
    },
    {
        id: 12,
        costCredit: 1308.78,
        balance: 1674.56,
        name: 'Jeanette',
        surname: 'Ortega',
    },
    {
        id: 13,
        costCredit: 3591.58,
        balance: 2934.15,
        name: 'Vaughan',
        surname: 'Garza',
    },
    {
        id: 13,
        costCredit: 3591.58,
        balance: 2934.15,
        name: 'Vaughan',
        surname: 'Garza',
    },
]

console.table(dirty)

const isEqual = (val1: Person, val2: Person) => {
    const condition =
        val1.id === val2.id &&
        val1.name === val2.name &&
        val1.surname === val2.surname &&
        val1.balance === val2.balance &&
        val1.costCredit === val2.costCredit
    return condition
}

const isEqualInputFields = (val1: Person, val2: Person) => {
    const condition = val1.name === val2.name && val1.surname === val2.surname
    return condition
}

const clearDuplicates = (data: Person[]) => {
    const indexArr: number[] = []
    data.reduce(
        (prevPerson, person, index) => {
            if (isEqual(prevPerson, person)) {
                indexArr.push(index - 1)
                indexArr.push(index)
            }
            return person
        },
        { id: -1, name: '', balance: -1, surname: '', costCredit: -1 }
    )
    return data.filter((_, index) => !indexArr.includes(index))
}

const saveUngique = (data: Person[]) => {
    const indexArr: number[] = []
    data.reduce(
        (prevPerson, person, index) => {
            if (isEqual(prevPerson, person)) {
                indexArr.push(index)
            }
            return person
        },
        { id: -1, name: '', balance: -1, surname: '', costCredit: -1 }
    )
    return data.filter((_, index) => !indexArr.includes(index))
}

const clearContradictions = (data: Person[]) => {
    const indexArr: number[] = []
    data.reduce(
        (prevPerson, person, index) => {
            if (isEqualInputFields(prevPerson, person)) {
                indexArr.push(index - 1)
                indexArr.push(index)
            }
            return person
        },
        { id: -1, name: '', balance: -1, surname: '', costCredit: -1 }
    )
    return data.filter((_, index) => !indexArr.includes(index))
}

const unionContradictions = (data: Person[]) => {
    const arrUnion: Person[] = []
    data.reduce(
        (prevPerson, person, index) => {
            if (isEqualInputFields(prevPerson, person)) {
                arrUnion.push({
                    ...prevPerson,
                    id: Math.ceil((prevPerson.id + person.id) / 2),
                    costCredit: Math.ceil(
                        (prevPerson.costCredit + person.costCredit) / 2
                    ),
                    balance: Math.ceil(
                        (prevPerson.balance + person.balance) / 2
                    ),
                })
            }
            return person
        },
        { id: -1, name: '', balance: -1, surname: '', costCredit: -1 }
    )

    return [...clearContradictions(data), ...arrUnion].sort(
        (first, second) => first.id - second.id
    )
}

console.group('Удаление дубликатов')
console.table(clearDuplicates(dirty))
console.groupEnd()
console.group('Сохранение уникального значения')
console.table(saveUngique(dirty))
console.groupEnd()
console.group('Удаление противоречий')
console.table(clearContradictions(dirty))
console.groupEnd()
console.group('Объединение противоречий')
console.table(unionContradictions(dirty))
console.groupEnd()
