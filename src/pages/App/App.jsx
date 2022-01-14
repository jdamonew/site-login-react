import React from "react";
import { Route, Routes } from "react-router-dom";
import 'rsuite/styles/index.less';
import "./App.scss";

//Pages
import Login from "../Login"

const App = () => {

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;