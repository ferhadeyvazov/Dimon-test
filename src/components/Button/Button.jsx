import React from "react";

import css from './Button.module.scss'

const Button = ({children, ...otherProps})=>{
    console.log({otherProps});
    return(
    <button className={css.hero__shadowBtn}>
        {children}
    </button>
    // <button className={otherProps.className}>
    //     {children}
    // </button>
)}

export default Button