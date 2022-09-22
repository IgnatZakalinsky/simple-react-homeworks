import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import s from "./Header.module.css"
import { PATH } from './Pages'
import PreJunior from './pages/PreJunior'

function Header() {

    const [collapsed, setCollapsed] = useState(true)

    const onClickHandler = () => {
        setCollapsed(!collapsed)
    }

    const classWrapper = collapsed ? s.WrapperNavLink : s.WrapperNavLink + " " + s.Active

    const nameButton= collapsed ? "Collapsed": "Uncollapsed"
    return (
        <div className={classWrapper}>
            <NavLink className={({isActive})=> isActive? s.NavLink + " " + s.ActiveNavLink : s.NavLink } 
             to={PATH.PRE_JUNIOR} >pre-junior</NavLink>
            <NavLink  className={({isActive})=> isActive? s.NavLink + " " + s.ActiveNavLink : s.NavLink } 
             to={PATH.JUNIOR} >junior</NavLink>
            <NavLink  className={({isActive})=> isActive? s.NavLink + " " + s.ActiveNavLink : s.NavLink }
             to={PATH.JUNIOR_PLUS} >junior-Plus </NavLink>
            <div className={s.OnOff} onClick={onClickHandler}>{nameButton}</div>
        </div>
    )
}

export default Header
