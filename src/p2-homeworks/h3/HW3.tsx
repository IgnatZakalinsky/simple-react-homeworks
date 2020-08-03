import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";

// types
export type UserType = {
    _id: any // need to fix any
    name: any // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<any>([]); // need to fix any

    const addUserCallback = (name: any) => { // need to fix any
        setUsers([]); // need to fix
    }

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    );
}

export default HW3;
