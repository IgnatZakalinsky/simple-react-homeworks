import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, onEnter, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : s.input // need to fix with (?:)

    return (
        <div className={s.greeting}>
            <div>
                <input
                    value={name}
                    onChange={setNameCallback}
                    className={inputClass}
                    onKeyDown={onEnter}
                    onBlur={setNameCallback}
                />
                <div className={s.error}>{error}</div>
            </div>

            <button onClick={addUser} className={s.button} disabled={!name}>add</button>
            <div className={s.count}>{totalUsers}</div>
        </div>
    )
}

export default Greeting
