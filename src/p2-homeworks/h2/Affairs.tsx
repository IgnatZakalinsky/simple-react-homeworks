import React, { Dispatch, SetStateAction } from 'react'
import Affair from './Affair'
import { AffairType, FilterType } from './HW2'
import s from "./Affairs.module.css"

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: Dispatch<SetStateAction<FilterType>>
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType, index) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            id={a._id}
            affair={a.name}
            priority={a.priority}
            deleteAffairCallback={() => props.deleteAffairCallback(a._id)}
        />
    ))

    const setAll = () => { props.setFilter("all") } // need to fix
    const setHigh = () => { props.setFilter("high") }
    const setMiddle = () => { props.setFilter("middle") }
    const setLow = () => { props.setFilter("low") }

    return (
        <div className={s.firstWrapper}>

            {mappedAffairs}
            <div className={s.buttonWrapper}>
                <button className={s.filterButton } onClick={setAll}>All</button>
                <button className={s.filterButton} onClick={setHigh}>High</button>
                <button className={s.filterButton} onClick={setMiddle}>Middle</button>
                <button className={s.filterButton} onClick={setLow}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
