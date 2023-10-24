import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";
import ToDo from "./components/ToDo";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<ToDo/>}/>
                <Route path={"/user/add"} element={<ToDo/>}/>
            </Routes>
            <ToastContainer/>
        </>

    );
}

export default App;
