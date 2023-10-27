import {useNavigate, useParams} from "react-router-dom";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import {useEffect, useState} from "react";
import * as houseService from "../../../service/house_service";

export function UpdateHouse() {
    const navigate = useNavigate();
    const [house, setHouse] = useState();
    const {id} = useParams();
    const [types, setTypes] = useState([]);
    useEffect(() => {
        findById()
    }, [id]);
    const findById = async () => {
        const res = await houseService.findById(id);
        console.log(res)
        setHouse(res);
    }

    useEffect(() => {
        display()
    }, [])

    const display = async () => {
        const res = await houseService.getAllTypes();
        setTypes(res.data);
        console.log(types)
    }
    const update = async (house) => {
        console.log(house)
        house = {...house, typeRent: JSON.parse(house.typeRent)};
        const res = await houseService.updateHouse(house);
        if (res.status === 200) {
            toast("Sửa thành công!");
            navigate("/houses");
        } else {
            toast.error("Lỗi");
            navigate("/houses");
        }
    }
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
        floor: Yup.number()
            .required("Không để trống trường này!")
            .min(0, "Tầng > 0!")
    };
    const initialValues = house && {
        id: house.id,
        name: house.name,
        area: house.area,
        cost: house.cost,
        capacity: house.capacity,
        typeRent: JSON.stringify(house.typeRent),
        image: house.image,
        standard: house.standard,
        description: house.description,
        floor: house.floor
    }
    return (
        house &&
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    update(values)
                }}
                validationSchema={Yup.object(validateObject)}>
                <div className='container'>
                    <h1>Sửa villa</h1>
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
                            <label className='form-label'>Loại thuê</label>
                            <Field as="select" className='form-control' name="typeRent">
                                {
                                    types.map(type => (
                                        <option key={type.id} value={JSON.stringify(type)}>{type.name}</option>
                                    ))
                                }
                            </Field>
                            <ErrorMessage name="typeRent" component="span" style={{color: "red"}}></ErrorMessage>
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
                            <Field type='textarea' name="description" className='form-control' id='description'/>
                            <ErrorMessage name="description" component="span" style={{color: "red"}}></ErrorMessage>
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