import React from 'react'
import s from "./Affairs.module.css"

type AffairPropsType = {
    id:number
    affair: string // need to fix any
    deleteAffairCallback: (_id:number) =>void
    priority:string
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        return props.deleteAffairCallback(props.id)
    }

    return (
        <div className={s.wrapper}>
            <span className={s.span}>{props.id }</span>
            <span>{props.affair}</span>
            {/* <span>{'  '}</span> */}
            <span>{props.priority + " "}</span>
            <button className={s.button} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
