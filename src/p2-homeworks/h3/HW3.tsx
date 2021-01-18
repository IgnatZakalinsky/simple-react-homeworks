import React, { useState } from "react";
import GreetingContainer from "./GreetingContainer";
import AlternativeGreeting from "./AlternativeGreeting";
import { v1 } from "uuid";

// types
export type UserType = {
  _id: string; // fixed
  name: string; // fixed
};

export type PropsType = {
  users: Array<UserType>;
};

// уровень работы с глобальными данными
function HW3() {
  const [users, setUsers] = useState<Array<UserType>>([]); // fixed

  const addUserCallback = (name: string) => {
    // need to fix any
    setUsers([...users, { _id: v1(), name: name }]); // fixed
  };
  console.log(users);

  return (
    <div>
      <hr />
      <header>Homework 3{/*should work (должно работать)*/}</header>
      <GreetingContainer users={users} addUserCallback={addUserCallback} />
      <hr />
      {/*для личного творчества, могу проверить*/}
      <AlternativeGreeting users={users} />
      <hr />
    </div>
  );
}

export default HW3;
