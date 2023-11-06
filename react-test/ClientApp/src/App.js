import React from 'react';

import Form from "./components/Form/Form";
import Users from "./components/Users/Users";
import {Route, Routes} from "react-router-dom";
import AppRoutes from "./AppRoutes";
const App = () => {
    return (
        <div>
            <Routes>
                {AppRoutes.map((route, index) => {
                    const { element, ...rest } = route;
                    return <Route key={index} {...rest} element={element} />;
                })}
            </Routes>
        </div>
    );
};

export default App;