import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import {SuperDoubleRange} from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './common/c7-SuperRange/SuperRange.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.wrapper}>
                <span className={s.span}>{value1}</span>
                <SuperRange
                    onChangeRange={setValue1} value = {value1} className={s.inputRange}
                />
            </div>

            <div className={s.wrapperforDoubleRange}>
                <span className={s.span}>{value1}</span>
                <SuperDoubleRange value={[value1, value2]} onChangeRange={([value1, value2])=>{
                    setValue1(value1);
                    setValue2(value2);
                }}

                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
