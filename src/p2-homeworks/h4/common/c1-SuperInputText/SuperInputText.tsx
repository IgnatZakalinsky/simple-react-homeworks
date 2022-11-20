import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent, } from 'react'
import s from './SuperInputText.module.css'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperInputTextPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
    // onChange?:(e: ChangeEvent<HTMLInputElement>)=>void
}

const SuperInputText: React.FC<SuperInputTextPropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        className, spanClassName,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {

        onChange // если есть пропс onChange
            && onChange(e) // то передать ему е (поскольку onChange не обязателен)
        onChangeText && onChangeText(e.currentTarget.value)
    }

    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);

        onEnter // если есть пропс onEnter
            && e.key === 'Enter' // и если нажата кнопка Enter
            && onEnter() // то вызвать его
    }

    const finalSpanClassName = error ? s.error + " " + s.span : s.span
    const finalInputClassName = error ? `${s.errorInput} ${className ? className : " "}`
        : `${s.superInput} ${className ? className : " "}`
        // need to fix with (?:) and s.superInput
// console.log("nrp",restProps)
    return (<>
        <div className={s.wrapperForInput}>
            <input
                type={'text'}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalInputClassName}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
             { error && <span className={finalSpanClassName}>{error}</span> }
        </div>
           
       </>
    )
}

export default SuperInputText
