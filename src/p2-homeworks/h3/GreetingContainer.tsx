import React, { ChangeEvent, useState } from 'react'
import Greeting from './Greeting'

type GreetingContainerPropsType = {
    users: Array<string> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({ users, addUserCallback }) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any

        let valueInput = e.currentTarget.value
        let errorMessage = 'Please add name)'

        if (valueInput.length > 0) {
            setName(valueInput)
            setError(' ')
        } else {
            setError(errorMessage)
            setName(' ')
        }
    }

    const addUser = () => {

        addUserCallback(name)
        alert(`Hello ${name}!`)
        setName(' ')// need to fix
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
