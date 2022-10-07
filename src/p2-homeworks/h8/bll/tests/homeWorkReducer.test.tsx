import { UserType } from '../../HW8'
import { homeWorkReducer, sortDownAC, sortForAgeAC, sortUpAC } from '../homeWorkReducer'

let initialState: Array<UserType> // need to fix any

beforeEach(() => {
    initialState = [
        { _id: 0, name: 'Кот', age: 3 },
        { _id: 1, name: 'Александр', age: 66 },
        { _id: 2, name: 'Коля', age: 16 },
        { _id: 3, name: 'Виктор', age: 44 },
        { _id: 4, name: 'Дмитрий', age: 40 },
        { _id: 5, name: 'Ирина', age: 55 },
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, sortUpAC("up"))

    // console.log(newState)
    expect(newState[0].name).toBe("Александр")
    expect(newState[newState.length - 1].name).toBe("Кот")
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, sortDownAC("down"))
    expect(newState[0].name).toBe('Кот')

})

test('check age 18', () => {

    const newState = homeWorkReducer(initialState, sortForAgeAC("age"))
    expect(newState[0].age > 18).toBe(true)
    expect(newState[newState.length - 1].age > 18).toBe(true)

    console.log(newState[newState.length - 1].age)
})
