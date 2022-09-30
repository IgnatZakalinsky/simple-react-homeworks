import React, { useState } from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { restoreState, saveState } from './localStorage/localStorage'
import s from "./HW6.module.css"

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        let newValue = restoreState<string>('editable-span-value', value)
        setValue(newValue)
    }

    return (
        <div>
            <hr />
            homeworks 6
            <div className={s.wrapper}>
                {/*should work (должно работать)*/}
                <div className={s.wrapperSpan} >
                    <SuperEditableSpan
                        value={value}
                        onChangeText={setValue}
                        spanProps={{ children: value ? undefined : 'enter your text...)) ' }}
                    />
                </div>
                <div className={s.wrapperButton}>
                    <SuperButton onClick={save}>save</SuperButton>
                    <SuperButton onClick={restore}>restore</SuperButton>
                </div>
            </div>
            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr />
        </div>
    )
}

export default HW6
