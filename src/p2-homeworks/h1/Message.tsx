import React from 'react'
import { TMessageData } from './HW1'
import s from "./Message.module.css"


function Message(props: TMessageData) {
    return (
        <div className={s.wrapper}>
            <div className={s.item}>
                <div className={s.itemAvatar} >
                <img src ={props.avatar} className={s.itemImage} ></img>
                </div>
                <div className={s.itemDialog}>
                    <div className={s.itemName}>
                        {props.name}
                    </div>
                    <div className={s.itemPost}>
                        {props.message}
                    </div>
                    <div className={s.itemTime}> {props.time}</div>
                </div>
            </div>
        </div >
    )
}

export default Message
