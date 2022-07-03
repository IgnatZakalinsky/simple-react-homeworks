import React from 'react'
import styles from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props:MessagePropsType) {
    return (
        <div>
            <div className={styles.message}>
                <img src={props.avatar} alt={'avatar'}/>
                <div className={styles.textContent}>
                    <h2>{props.name}</h2>
                    <div className={styles.messageText}>
                        <p>{props.message}</p>
                        <p>{props.time}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
