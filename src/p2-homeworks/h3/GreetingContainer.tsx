import React, { useState } from "react";
import Greeting from "./Greeting";
import { UserType } from "./HW3";

type GreetingContainerPropsType = {
  users: Array<UserType>; // fixed
  addUserCallback: (name: string) => void; // fixed
};

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
  users,
  addUserCallback
}) => {
  // деструктуризация пропсов
  const [name, setName] = useState<string>(""); // fixed
  const [error, setError] = useState<string | null>(null); // fixed

  const setNameCallback = (name: string) => {
    // fixed
    setName(name); // fixed
    setError(null);
  };

  const addUser = () => {
    if (name.trim()) {
      addUserCallback(name);
      setName("");
      alert(`Hello ${name}!`);
    } else {
      setError("Please enter the name");
    }
  };

  let totalUsers = users.length;

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      error={error}
      totalUsers={totalUsers}
    />
  );
};

export default GreetingContainer;
