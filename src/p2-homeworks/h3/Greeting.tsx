import React, { ChangeEvent, KeyboardEvent } from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void// need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyDownTask: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    { name, setNameCallback, addUser, error, totalUsers, onKeyDownTask } // деструктуризация пропсов
) => {
    const inputClass = error ? s.input + ' ' + s.error : s.input// need to fix with (?:)
    return (
        <div className={s.firstWrapper}>
            <div className={s.wrapper}>
                <input placeholder={error}
                    value={name} onBlur={setNameCallback}
                    onChange={setNameCallback}
                    onKeyDown={onKeyDownTask}
                    className={inputClass} />
                {/* <div>{error}</div> */}
                <button onClick={addUser} className={s.button} >add</button>
                <div className={s.totalUsers}>{totalUsers}</div>
            </div>
        </div>
    )
}

export default Greeting
