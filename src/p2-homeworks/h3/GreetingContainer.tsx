import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({ users, addUserCallback }) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any
    const errorMessage = 'Please add name'

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        let valueInput = e.currentTarget.value.trim();
        if (valueInput) {
            setName(valueInput)
            error && setError('')
        } else {
            setError(errorMessage)
        }
    }
   
    const addUser = () => {
        if (name.length) {
            alert(`Hello ${name}!`)
            addUserCallback(name)
        }
        else {
            setError(errorMessage)
            alert(errorMessage)
        }
        setName('')// need to fix
    }

    const onKeyDownTask = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addUser()
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            onKeyDownTask={onKeyDownTask}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
