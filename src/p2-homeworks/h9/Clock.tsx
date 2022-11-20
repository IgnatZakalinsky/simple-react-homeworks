import React, { useState } from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from "./Clock.module.css"

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)
    const [firstTime, setFirsTime]=useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = +setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
        setFirsTime(true)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }
    const stringTime = firstTime && date.toTimeString().slice(0,8)// fix with date
    const stringDate = date.toISOString().slice(0, 10)  // fix with date

    return (
        <div className={show ? s.wrapper + " " + s.wrapperShow :s.wrapper}>
           <div className={s.wrapperForOclockAndDate}>
            <div className={s.wrapperForOclock} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
                {stringTime}
            </div>

            {show && (
                <div className={s.wrapperForOclock}>
                    {stringDate}
                </div>
            )}
            </div>
            <div className={s.wrapperButton}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock
