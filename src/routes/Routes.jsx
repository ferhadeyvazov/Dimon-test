import React from "react";
import { Routes, Route } from 'react-router-dom';

import MainPage from '../pages/main/Main.page'
import SignIn from "../pages/signIn/SignIn.page";


const Routess = () => (
    <>
    
<Routes>
<Route path="/">
    <Route index element={<MainPage />} />
    <Route path="signin" element={<SignIn />} />
</Route>

</Routes>

    </>
)

export default Routess;