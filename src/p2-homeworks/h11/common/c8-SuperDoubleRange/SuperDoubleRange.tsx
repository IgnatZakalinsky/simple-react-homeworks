import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import SuperRange from '../c7-SuperRange/SuperRange'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperDoubleRangePropsType = Omit<DefaultInputPropsType, 'value'> & {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
        ...restProps
    }
) => {
    // сделать самому, можно подключать библиотеки
    const [value1, value2] = value || [-1, -1]

    const change1 = (n: number) => {
        if (n <= value2) onChangeRange?.([n, value2])
    }
    const change2 = (n: number) => {
        if (value1 <= n) onChangeRange?.([value1, n])
    }

    return (
        <div style={{position: "relative", display: "inline-block", width: 176}}>
            <SuperRange style={{position: "absolute", top: -12}} value={value?.[0]} onChangeRange={change1} {...restProps}/>
            <SuperRange style={{position: "absolute", top: -12}} value={value?.[1]} onChangeRange={change2} {...restProps}/>
        </div>
    )
}

export default SuperDoubleRange
