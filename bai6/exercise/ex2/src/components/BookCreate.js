import {useNavigate} from "react-router-dom";
import * as Yup from "yup"
import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import * as bookService from "../../src/service/bookService";

export function BookCreate() {
    const navigate = useNavigate();
    const initValue = {
        title: "",
        quantity: 0
    }
    const validateObject = {
        title: Yup.string()
            .required("Không để trống!"),
        quantity: Yup.number()
            .min(0, "Số lượng > 0!")
    };
    const add = async (book) =>{
        const res = await bookService.addBook(book);
        console.log(res)
        if(res.status === 201){
            toast("Thêm mới thành công");
            navigate("/");
        }else {
            toast("Lỗi");
            navigate("/");
        }
    }
    return (
        <>
            <Formik
                initialValues={initValue}
                onSubmit={(book) => {
                    add(book)
                }}
                validationSchema={Yup.object(validateObject)}
            >
                <div className='container'>
                    <h1>Thêm sách</h1>
                    <Form>
                        <div className='mb-3'>
                            <label htmlFor='title' className='form-label'>Title</label>
                            <Field type='text' name="title" className='form-control' id='title'/>
                            <ErrorMessage name="title" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='quantity' className='form-label'>Quantity</label>
                            <Field type='number' name="quantity" className='form-control' id='quantity'/>
                            <ErrorMessage name="quantity" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </Form>
                </div>
            </Formik>
        </>
    )
}