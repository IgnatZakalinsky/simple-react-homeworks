import React from "react";
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";
import styles from "./Message.module.css"

export type MessageData = {
    avatar: string
    name: string
    message: string
    time: string
}

const messageData = {
  avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq8SZ-OqgFeMKGUTsCI-Oa9RZ7iIF9k3xdeA&usqp=CAU",
  name: "John Wick",
  message: "Where is my car?",
  time: "22:00",
};

function HW1() {
  return (
    <div className={styles.block}>
      <hr />
      homeworks 1.
      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />
      <hr />
      {/*для личного творчества, могу проверить*/}
      <AlternativeMessage />
      <hr />
    </div>
  );
}

export default HW1;
