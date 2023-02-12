import React from "react";
import css from './Main.page.module.scss'
import Directory from "../../components/Directory/Directory";


const MainPage = ()=>(
    <div className={css.main}>
        <Directory />
    </div>
)

export default MainPage;