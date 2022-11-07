import React from "react";
import { MessageData } from "./HW1";
import styles from "./Message.module.css";

function Message(props: MessageData) {
  return (
    <div className={styles.messageCloud}>
      <img className={styles.avatar} alt="avatar" src={props.avatar}></img>
      <div className={styles.messageCloudSpace}>
        <div>
          <div className={styles.nameAccount}>{props.name}</div>
          <div className={styles.messageText}>{props.message}</div>
        </div>
        <div className={styles.timeText}>{props.time}</div>
      </div>
    </div>
  );
}

export default Message;
