import mergedData, {
    RowPeopleData,
    SettingPeopleData,
    settingData,
} from '../Setting'

const normalAge = (data: SettingPeopleData[], age: number) => {
    const max = data.reduce((acc, item) => (item.age > acc ? item.age : acc), 0)
    const min = data.reduce(
        (acc, item) => (item.age > acc ? acc : item.age),
        max
    )

    return (age - min) / (max - min)
}

const normalBalance = (data: SettingPeopleData[], balance: number) => {
    const middle = Math.floor(
        data.reduce((acc, item) => acc + item.balance, 0) / data.length
    )
    let sum = 0
    data.forEach(item => {
        sum = sum + Math.pow(item.balance - middle, 2)
    })
    const disp = sum / data.length
    const otkl = Math.floor(Math.sqrt(disp))

    return parseFloat(((balance - middle) / otkl).toFixed(2))
}

const normalizationMinMax = (data: RowPeopleData[]) =>
    settingData(data).map((item, _, arr) => ({
        ...item,
        age: normalAge(arr, item.age),
        balance: normalBalance(arr, item.balance),
    }))

console.table(normalizationMinMax(mergedData))
