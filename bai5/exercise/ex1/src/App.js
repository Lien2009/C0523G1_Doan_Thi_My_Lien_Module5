import './App.css';
import React, {useState} from "react";
import {Formik} from "formik";

function App() {
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };
    const [form, setForm] = useState({});
    const handleChange = (event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    })
    const handleValidate = (() => {
        const errors = {};
        if (!form.email) {
            errors.email = "Required";
        } else if (!REGEX.email.test(form.email)) {
            errors.email = "Invalid email address";
        }
        if (!form.name) {
            errors.name = "Required";
        }
        if (!form.phone) {
            errors.phone = "Required";
        }
        return errors;
    })
    const handleSubmit = (() => {
        alert("Add contact successfully!!!")
    })
    return (
        <div className="App">
            <h1>Contact form</h1>
            <Formik
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}>
                {({errors,handleSubmit}) =>(
                    <form onSubmit={handleSubmit}>
                        <div
                            className={`custom-input ${
                                errors.name ? "custom-input-error" : ""
                            }`}
                        >
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name || ""}
                                onChange={handleChange}/>
                            <p className="error">{errors.name}</p>
                        </div>
                        <div
                            className={`custom-input ${
                                errors.email ? "custom-input-error" : ""
                            }`}
                            >
                            <label>Email</label>
                            <input
                            type="text"
                            name="email"
                            value={form.email || ""}
                            onChange={handleChange}/>
                            <p className="error">{errors.email}</p>
                        </div>
                        <div
                            className={`custom-input ${
                                errors.phone ? "custom-input-error" : ""
                            }`}
                        >
                            <label>Phone</label>
                            <input
                                type="text"
                                name="phone"
                                value={form.phone || ""}
                                onChange={handleChange}/>
                            <p className="error">{errors.phone}</p>
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea value={form.message} name="message" onChange={handleChange}/>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default App;
