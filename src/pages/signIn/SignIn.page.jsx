import React from "react";

import css from './SignIn.page.module.scss';
import Signin from '../../components/signin/Signin';

const SignIn = ()=> (
    <div className={`section ${css.signIn}`}>
        <div className={`container flexCenter ${css.signIn__container}`}>
            <Signin />
        </div>
    </div>
)

export default SignIn;