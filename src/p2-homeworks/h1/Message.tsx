import React from 'react'
import s from './Message.module.css'

export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

const Message: React.FC<MessagePropsType> = ({avatar, name, message, time}) => {
    return (
        <div className={s.message}>
            <img src={avatar} alt={'avatar'} className={s.avatar}/>

            <div className={s.angle}/>

            <div className={s.content}>
                <div className={s.name}>{name}</div>
                <div className={s.text}>{message}</div>
                <div className={s.time}>{time}</div>
            </div>
        </div>
    )
}

export default Message
