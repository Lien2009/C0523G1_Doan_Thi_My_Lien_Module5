import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

function App() {
    // khởi tạo biến error
    const MESSAGE_ERROR = {
        username: "Username error",
        email: "Email error",
        password: "Password error",
        confirmPassword: "Password must be the same"
    };
    // Khởi tạo biến REGEX
    const REGEX = {
        username: /^[a-zA-Z]{2,}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
    };
    const [form, setForm] = useState({});
    const handleChange = (event) => {
        let error = "";
        if (event.target.name === "password") {
            if (form.confirmPassword && form.confirmPassword.value) {
                error = event.target.value === form.confirmPassword.value
                    ? ""
                    : MESSAGE_ERROR[event.target.name];
            } else{
                error = REGEX[event.target.name].test(event.target.value)
                    ? ""
                    : MESSAGE_ERROR[event.target.name];
            }
        } else if (event.target.name === "confirmPassword") {
        error =
            event.target.value === form.password.value
                ? ""
                : MESSAGE_ERROR[event.target.name];
    } else {
        error = REGEX[event.target.name].test(event.target.value)
            ? ""
            : MESSAGE_ERROR[event.target.name];
    }
        setForm({
            ...form,

        })
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
