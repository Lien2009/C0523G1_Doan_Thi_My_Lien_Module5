import {useNavigate, useParams} from "react-router-dom";
import * as Yup from "yup"
import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import * as bookService from "../../src/service/bookService";

export function BookUpdate() {
    const navigate = useNavigate();
    const [book, setBook] = useState();
    const {id} = useParams();
    useEffect(() => {
        findById()
    }, [id]);

    const findById = async () => {
        const res = await bookService.findById(id);
        setBook(res)
        console.log(book)
    }

    const update = async (book) => {
        const res = await bookService.updateBook(book);
        console.log(res)
        if (res.status === 200) {
            toast("Sửa thành công");
            navigate("/");
        } else {
            toast.error("Lỗi");
            navigate("/");
        }
    }


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
    if (!book) return null;
    return (
        <>
            <Formik
                initialValues={book}
                onSubmit={(book) => {
                    update(book)
                }}
                validationSchema={Yup.object(validateObject)}
            >
                <div className='container'>
                    <h1>Sửa sách</h1>
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