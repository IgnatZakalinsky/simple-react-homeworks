import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const change = (values: [number, number]) => {
        value1 !== values[0] && setValue1(values[0])
        value2 !== values[1] && setValue2(values[1])
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span style={{display: 'inline-block', width: 32}}>{value1}</span>
                <SuperRange
                    // сделать так чтоб value1 изменялось
                    value={value1}
                    onChangeRange={setValue1}
                />
            </div>

            <div>
                <span style={{display: 'inline-block', width: 32}}>{value1}</span>
                <SuperDoubleRange
                    value={[value1, value2]}
                    onChangeRange={change}
                />
                <span style={{display: 'inline-block', width: 32}}>{value2}</span>
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
