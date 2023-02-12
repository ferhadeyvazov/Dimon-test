import React from "react";
import { NavLink } from 'react-router-dom';

import css from './Signin.module.scss';
import Button from '../Button/Button';

const Signin = () => {
    return (
        <div className={`${css.signin}`}>
            <div className={css.login_box}>
                <p>Login</p>
                <form>
                    <div className={css.user_box}>
                        <input required name="" type="text" />
                        <label>Email</label>
                    </div>
                    <div className={css.user_box}>
                        <input required name="" type="password" />
                        <label>Password</label>
                    </div>
                    <Button>Daxil Ol</Button>
                </form>
                <p className="row">
                    Hesabınız yoxdur?
                    <NavLink to="./signup" className={css.signUp__Btn}>Sign up!</NavLink>
                </p>
            </div>
        </div>
    )
}

export default Signin;