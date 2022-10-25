import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { loadingAC } from './bll/loadingReducer';
import { AppStoreType } from './bll/store';
import s from "./bll/HW10.module.css"

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)
    const dispatch = useDispatch()
    console.log("load", loading)

    const setLoading = () => {
        dispatch(loadingAC())
        setTimeout(() => {
            dispatch(loadingAC())
        }, 3000)
        console.log('loading...')
    };

    return (
        <div>
            <hr />
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (<div className={s.wrapperForImg}>
                    <img className={s.image} src=" https://i.gifer.com/VAyR.gif" alt="img" />
                </div>
                ) : (
                    <div className={s.wrapperForButton}>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr />
        </div >
    )
}

export default HW10
