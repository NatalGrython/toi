const data = [
    'Хлеб',
    '2',
    '2.3',
    '3',
    '4',
    'Магазин',
    'Дневник',
    '3.1',
    '42.3',
    '5',
    '10',
    'Пряник',
    '29',
    'Человек',
    'Машина',
    '32.1',
    '17',
    'Компьютер',
    '20',
    '123',
    'Стол',
    'Стул',
    '0.2',
    '55',
    'Число',
    'Десять',
    '25',
    'Программа',
    '65.2',
    '22',
]

const divisionByTypes = (data: string[]) => {
    const words: string[] = []
    const integers: number[] = []
    const floats: number[] = []
    data.forEach(item => {
        if (item.includes('.')) {
            floats.push(parseFloat(item))
        } else if (parseInt(item)) {
            integers.push(parseInt(item))
        } else {
            words.push(item)
        }
    })

    return {
        words: words
            .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
            .join(' '),
        integers: integers.sort((a, b) => (a > b ? 1 : -1)).join(' '),
        floats: floats.sort((a, b) => (a > b ? 1 : -1)).join(' '),
    }
}

const { words, integers, floats } = divisionByTypes(data)
console.group('Задание 1')
console.log('Изначальный набор данных', data)
console.log('Слова', words)
console.log('Натуральные числа', integers)
console.log('Вещественные числа', floats)
console.groupEnd()

const dateArr = [
    '11:28:22',

    '11:55:17',

    '04:21:47',

    '10:45:05',

    '01:48:55',

    '12:16:22',

    '05:26:29',

    '06:29:59',

    '11:20:28',

    '04:17:37',

    '12:14:51',

    '12:30:09',

    '06:03:16',

    '04:01:50',

    '07:25:07',

    '08:25:57',

    '09:34:10',

    '01:48:02',

    '05:36:40',

    '02:40:22',
]

const dateSorter = (data: string[]) =>
    data.sort((itemA, itemB) => {
        const [hhA, mmA, ssA] = itemA.split(':')
        const [hhB, mmB, ssB] = itemB.split(':')
        if (hhA > hhB) {
            return 1
        }
        if (hhA === hhB) {
            if (mmA > mmB) {
                return 1
            }
            if (mmA === mmB) {
                if (ssA > ssB) {
                    return 1
                }
            }
        }

        return -1
    })
console.group('Задание 2')
console.log('Изначальные данные', dateArr)
console.log('Отсортированнные данные', dateSorter(dateArr))
console.groupEnd()
