import React from 'react'
import Header from './Header'
import Pages from './Pages'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <Header/>

            <Pages/>

            </HashRouter>
        </div>
    )
}

export default HW5
