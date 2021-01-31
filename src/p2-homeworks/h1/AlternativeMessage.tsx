import React, {useState} from 'react'
import Message, {MessagePropsType} from './Message'
import s from './Message.module.css'

function AlternativeMessage() {
    const [arr, setArr] = useState<MessagePropsType[]>([{
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Neko',
        message: 'aaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaa ' +
            'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        time: new Date().toLocaleTimeString(),
    }])
    const [v, setV] = useState<string>('')

    return (
        <div>
            {arr.map((m, i) => (
                <>
                    <Message
                        key={m.message + i}
                        avatar={m.avatar}
                        name={m.name}
                        message={m.message}
                        time={m.time}
                    />
                    {/*<div key={m.message + i}>{m.message}</div>*/}
                </>
            ))}

            <div className={s.input}>
                <textarea className={s.textarea} value={v} onChange={e => setV(e.currentTarget.value)}/>
                <button
                    className={s.button}
                    onClick={() => {
                        setArr([
                            ...arr,
                            {
                                avatar: arr[0].avatar,
                                name: arr[0].name,
                                message: v,
                                time: new Date().toLocaleTimeString(),
                            },
                        ])
                        setV('')
                    }}
                >
                    send
                </button>
            </div>

        </div>
    )
}

export default AlternativeMessage
