import React from "react";
import { UserType, PropsType } from "./HW3";

function AlternativeGreeting(props: PropsType) {
  return (
    <div>
      <h3>Users in state:</h3>
      {props.users.map((i: UserType) => (
          <div key={i._id}>{i.name}</div>
      ))}
    </div>
  );
}

export default AlternativeGreeting;
