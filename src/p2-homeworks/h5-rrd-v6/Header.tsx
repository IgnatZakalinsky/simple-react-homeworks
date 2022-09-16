import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import s from "./Header.module.css"

function Header() {

    const [collapsed, setCollapsed] = useState(true)

    const onClickHandler = () => {
        setCollapsed(!collapsed)
    }

    const classWrapper = collapsed ? s.WrapperNavLink : s.WrapperNavLink + " " + s.Active

    const nameButton= collapsed ? "Collapsed": "Uncollapsed"
    return (
        <div className={classWrapper}>
            <NavLink className={({isActive})=> isActive? s.NavLink + " " + s.ActiveNavLink : s.NavLink }  to={'/pre-junior'} >pre-junior</NavLink>
            <NavLink  className={({isActive})=> isActive? s.NavLink + " " + s.ActiveNavLink : s.NavLink }  to={'/junior'} >junior</NavLink>
            <NavLink  className={({isActive})=> isActive? s.NavLink + " " + s.ActiveNavLink : s.NavLink }  to={'/juniorPlus'} >junior-Plus </NavLink>
            <div className={s.OnOff} onClick={onClickHandler}>{nameButton}</div>
        </div>
    )
}

export default Header
