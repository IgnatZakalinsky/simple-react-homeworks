import React, { ChangeEvent, InputHTMLAttributes, DetailedHTMLProps } from 'react'
import  s  from "../../HW7.module.css"

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    console.log("radioValue", value)
    const mappedOptions: JSX.Element[] = options ? options.map((o, i) => ( // map options with key
        <label key={name + '-' + i}>
            <input
                className={s.inputRadio}
                type={'radio'}
                onChange={onChangeCallback}
                value={o}
                checked={value === o}
                name={name}
            />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
