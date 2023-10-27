import {useNavigate} from "react-router-dom";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import {useEffect, useState} from "react";
import {addVilla, getAllTypes} from "../../../service/villa_service";

export function CreateVilla() {
    const navigate = useNavigate();
    const [types, setTypes] = useState([]);
    useEffect(() => {
        display()
    }, []);
    const display = async () => {
        const res = await getAllTypes();
        setTypes(res.data);
    }
    const initValue = {
        name: "",
        area: 0,
        cost: 0,
        capacity: 0,
        typeRent: JSON.stringify({
            "id": 4,
            "name": "giờ"
        }),
        image: "",
        standard: "",
        description: "",
        poolArea: 0,
        floor: 0
    };
    const validateObject = {
        name: Yup.string()
            .required("Không để trống trường này!"),
        area: Yup.number()
            .required("Không để trống trường này!")
            .min(0, "Diện tích > 0!"),
        cost: Yup.number()
            .required("Không để trống trường này!")
            .min(0, "Gía > 0!"),
        capacity: Yup.number()
            .required("Không để trống trường này!")
            .min(0, "Chứa > 0 người!"),
        image: Yup.string()
            .required("Không để trống trường này!"),
        standard: Yup.string()
            .required("Không để trống trường này!"),
        poolArea: Yup.number()
            .required("Không để trống trường này!")
            .min(0, "Diện tích hồ > 0!"),
        floor: Yup.number()
            .required("Không để trống trường này!")
            .min(0, "Tầng > 0!")
    };
    const add = async (villa) => {
        const res = {...villa, typeRent: JSON.parse(villa.typeRent)};
        const newVilla = await addVilla(res);
        if (newVilla.status === 201) {
            toast("Thêm mới thành công!");
            navigate("/villas");
        } else {
            toast("Lỗi");
            navigate("/villas")
        }
    }
    return (
        <>
            <Formik
                initialValues={initValue}
                onSubmit={(values) => {
                    add(values)
                }}
                validationSchema={Yup.object(validateObject)}>
                <div className='container'>
                    <h1>Thêm villa</h1>
                    <Form>
                        <div className='mb-3'>
                            <label htmlFor='name' className='form-label'>Tên</label>
                            <Field type='text' name="name" className='form-control' id='name'/>
                            <ErrorMessage name="name" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='area' className='form-label'>Diện tích</label>
                            <Field type='number' name="area" className='form-control' id='area'/>
                            <ErrorMessage name="area" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='cost' className='form-label'>Gía</label>
                            <Field type='number' name="cost" className='form-control' id='cost'/>
                            <ErrorMessage name="cost" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='capacity' className='form-label'>Sức chứa</label>
                            <Field type='number' name="capacity" className='form-control' id='capacity'/>
                            <ErrorMessage name="capacity" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label style={{fontWeight: "bold"}}>Loại thuê</label>
                            <Field as="select" className='form-control' name="typeRent">
                                {
                                    types.map(type => (
                                        <option key={type.id} value={JSON.stringify(type)}>{type.name}</option>
                                    ))
                                }
                            </Field>
                            <ErrorMessage name="typeCustomer" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='image' className='form-label'>Link hình ảnh</label>
                            <Field type='text' name="image" className='form-control' id='image'/>
                            <ErrorMessage name="image" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='standard' className='form-label'>Hạng</label>
                            <Field type='text' name="standard" className='form-control' id='standard'/>
                            <ErrorMessage name="standard" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='description' className='form-label'>Mô tả</label>
                            <Field as='textarea' name="description" className='form-control' id='description'/>
                            <ErrorMessage name="description" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='poolArea' className='form-label'>Diện tích hồ bơi</label>
                            <Field type='number' name="poolArea" className='form-control' id='poolArea'/>
                            <ErrorMessage name="poolArea" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='floor' className='form-label'>Tầng</label>
                            <Field type='number' name="floor" className='form-control' id='floor'/>
                            <ErrorMessage name="floor" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </Form>
                </div>
            </Formik>
        </>
    )
}