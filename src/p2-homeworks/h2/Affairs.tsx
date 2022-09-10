import React, { Dispatch, SetStateAction } from 'react'
import Affair from './Affair'
import { AffairType, FilterType } from './HW2'
import s from "./Affairs.module.css"

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: Dispatch<SetStateAction<FilterType>>
    // setFilter:(filter: FilterType)=>void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
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

    // const setAll = () => { props.setFilter("all") } // need to fix
    // const setHigh = () => { props.setFilter("high") }
    // const setMiddle = () => { props.setFilter("middle") }
    // const setLow = () => { props.setFilter("low") }


    const onCLickHandler = (title: FilterType) => {
        return () => props.setFilter(title)
    }

    const setClass = (filter: FilterType) => {
        return s.filterButton + ' ' + (props.filter === filter ? ' ' + s.active : '')
    }

    return (
        <div className={s.firstWrapper}>
            {mappedAffairs}
            <div className={s.buttonWrapper}>
                <button className={setClass('all')} onClick={onCLickHandler('all')}>All</button>
                <button className={setClass('high')} onClick={onCLickHandler('high')}>High</button>
                <button className={setClass('middle')} onClick={onCLickHandler('middle')}>Middle</button>
                <button className={setClass('low')} onClick={onCLickHandler('low')}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
