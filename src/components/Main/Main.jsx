import React from "react";
import { Link } from "react-router-dom";

import css from './Main.module.scss'
import Button from "../Button/Button";

const Main = ()=> (
    <main className="section">
        <div className={`container row ${css.main}`}>
            <div className={css.hero}>
                <h1 className={`primaryText ${css.hero__text}`}>
                    Azad musiqidən həzz al
                </h1>
                <p className={`secondaryText ${css.hero__description}`}>
                    100-dən çox mahni olan bu platformada səndə öz sevdiyin mahnılara qulaq as və tərzini yarat
                </p>
                <Link to="/signin">
                    <Button className={css.hero__shadowBtn}>
                        Daxil Ol
                    </Button>
                </Link>
            </div>
        </div>
        
    </main>
)

export default Main;