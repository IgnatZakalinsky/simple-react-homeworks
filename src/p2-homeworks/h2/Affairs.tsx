import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filterType:FilterType) => void
    deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

  const setFilter = (filter: FilterType) => {
        props.setFilter(filter)
  }

    return (
        <div>

            {mappedAffairs}

            <button onClick={()=>setFilter('all')}>All</button>
            <button onClick={()=>setFilter('high')}>High</button>
            <button onClick={()=>setFilter('middle')}>Middle</button>
            <button onClick={()=>setFilter('low')}>Low</button>
        </div>
    )
}

export default Affairs
