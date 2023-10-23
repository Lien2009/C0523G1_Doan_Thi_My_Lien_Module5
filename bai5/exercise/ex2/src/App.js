import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {Formik} from "formik";
import * as Yup from "yup";
import {ToKhai} from "./components/ToKhai";
import "react-toastify/dist/ReactToastify.css"
import {ToastContainer} from "react-toastify";

function App() {

    return (
        <>
            <ToKhai/>
            <ToastContainer/>
        </>
    );
}

export default App;
