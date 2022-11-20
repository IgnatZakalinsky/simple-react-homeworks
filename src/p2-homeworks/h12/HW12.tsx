import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some', 'blue', 'green'];

function HW12() {
    const theme = useSelector<AppStoreType, string>((state) => state.theme.theme)
    const dispatch = useDispatch()
    // useDispatch, onChangeCallback
    const onChangeOption = (theme: string) => {
        dispatch(changeThemeAC(theme))
    }
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <div>
                <SuperSelect options={themes}
                             value={theme}
                             onChangeOption={onChangeOption}
                />
            </div>
            <div>
                <SuperRadio
                    name={'radio'}
                    options={themes}
                    value={theme}
                    onChangeOption={onChangeOption}
                />
            </div>
            <hr/>
        </div>
    );
}

export default HW12;
