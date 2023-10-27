import {useNavigate} from "react-router-dom";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import {useEffect, useState} from "react";
import * as roomService from "../../../service/room_service";

export function CreateRoom() {
    const navigate = useNavigate();
    const [types, setTypes] = useState([]);
    useEffect(() => {
        display()
    }, []);
    const display = async () => {
        const res = await roomService.getAllTypes();
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
        service: ""
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
        service: Yup.string()
            .required("Không để trống trường này!")
    };
    const add = async (room) => {
        const res = {...room, typeRent: JSON.parse(room.typeRent)};
        const newRoom = await roomService.addRoom(res);
        if (newRoom.status === 201) {
            toast("Thêm mới thành công!");
            navigate("/rooms");
        } else {
            toast("Lỗi");
            navigate("/rooms")
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
                    <h1>Thêm room</h1>
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
                            <label htmlFor='service' className='form-label'>Dịch vụ đi kèm</label>
                            <Field type='text' name="service" className='form-control' id='service'/>
                            <ErrorMessage name="service" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>

                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </Form>
                </div>
            </Formik>
        </>
    )
}