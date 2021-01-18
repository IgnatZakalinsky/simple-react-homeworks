import React from "react";
import s from "./Greeting.module.css";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
  name: string; // fixed
  setNameCallback: (name: string) => void; // fixed
  addUser: () => void; // fixed
  error: string | null; // fixed
  totalUsers: number; // fixed
};

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  { name, setNameCallback, addUser, error, totalUsers } // деструктуризация пропсов
) => {
  const inputClass = error ? s.error : ""; // fixed

  return (
    <div className={s.container}>
      <div>
        <SuperInputText
          value={name}
          onChange={(e) => {
            setNameCallback(e.currentTarget.value);
          }}
          className={inputClass}
        />{" "}
        <button onClick={addUser}>add</button>
        <span className={s.counter} title="Total users">
          Total users: {totalUsers}
        </span>
        <div className={s.errorText}>{error}</div>
      </div>
    </div>
  );
};

export default Greeting;
