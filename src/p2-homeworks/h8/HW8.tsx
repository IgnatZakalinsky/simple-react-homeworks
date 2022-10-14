import React, { useState } from 'react'
import { homeWorkReducer, sortDownAC, sortForAgeAC, sortUpAC } from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from "./HW8.module.css"

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople:UserType[] = [
    { _id: 0, name: 'Кот', age: 3 },
    { _id: 1, name: 'Александр', age: 66 },
    { _id: 2, name: 'Коля', age: 16 },
    { _id: 3, name: 'Виктор', age: 44 },
    { _id: 4, name: 'Дмитрий', age: 16 },
    { _id: 5, name: 'Ирина', age: 55 },
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any

    const finalPeople = people.map((p: UserType) => (<>

        <table key={p._id} className={s.table}>

            <tr>  <td className={s.tdName}>{p.name}</td> <td className={s.tdAge}>{p.age}</td> </tr>
        </table>
    </>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortUpAC()));
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortDownAC()));
    const sortForAge = () => setPeople(homeWorkReducer(initialPeople, sortForAgeAC(18)))

    return (
        <div className={s.wrapperHomeWork}>
            <hr />
            homeworks 8
            {/*should work (должно работать)*/}
            <table className={s.table}><tr>  <th className={s.tdName}>name</th> <th className={s.tdAge}>age</th>  </tr></table>
            {finalPeople}
            <div className={s.buttonAllWrapper}>
                <div className={s.buttonWrapper}><SuperButton onClick={sortUp}  >sort up</SuperButton></div>
                <div className={s.buttonWrapper}><SuperButton onClick={sortDown} >sort down</SuperButton></div>
                <div className={s.buttonWrapper}><SuperButton onClick={sortForAge} >check 18</SuperButton></div>
            </div>
        </div>
    )
}

export default HW8
