import React from "react";
import MessageClasses from './Message.module.css';

type messageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messageType) {
    return (
        <div className={MessageClasses.message}>
            <img className={MessageClasses.avatar} src={props.avatar} alt="" />
            <div className={MessageClasses.textArea}>
                <div className={MessageClasses.name}>{props.name}</div>
                <div className={MessageClasses.info}>{props.message}</div>
                <div className={MessageClasses.time}>{props.time}</div>
            </div>
        </div>
    );
}

export default Message;
