import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
    className?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className, 
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = `${red ? s.red : s.default} ${s.button}`
    return (
        <div className={s.wrapperButton}>
            <button
                className={finalClassName}
                {...restProps}  // отдаём кнопке остальные пропсы если они есть (children там внутри)
            />
        </div>
    )
}

export default SuperButton
