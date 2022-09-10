import React, { useImperativeHandle, useState } from 'react'
import GreetingContainer from './GreetingContainer'
// import s from "./Greeting.module.css"
import { v1 } from 'uuid'

// types
export type UserType = {
    _id: string // need to fix any
    name: string// need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string) => {
        // need to fix any
        // setUsers([name, ...users]) // need to fix

        const user = {
            _id: v1(),
            name
        }
        const arrName = [...users]
        arrName.push(user)
        setUsers(arrName)
    }

    return (
        <div>
            <hr />
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback} />

            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr />
        </div>
    )
}

export default HW3
