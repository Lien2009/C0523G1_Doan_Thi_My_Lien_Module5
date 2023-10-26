import {useNavigate, useParams} from "react-router-dom";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as customerService from "../../service/customer_service";
import {toast} from "react-toastify";
import {useEffect, useState} from "react";

export function UpdateCustomer() {
    const navigate = useNavigate();
    const [customer, setCustomer] = useState();
    const {id} = useParams();
    const [types, setTypes] = useState([]);
    useEffect(() => {
        findById()
    }, [id]);
    const findById =async () => {
        const res = await customerService.findById(id);
        console.log(res)
        setCustomer(res);
    }

    useEffect(() =>{
        display()
    },[])

    const display = async () => {
        const res = await customerService.getTypeCustomer();
        setTypes(res);
    }
    const update = async (customer) =>{
        console.log(customer)
        customer = {...customer, typeCustomer: JSON.parse(customer.typeCustomer)};
        const res = await customerService.updateCustomer(customer);
        if(res.status === 200){
            toast("Sửa thành công!");
            navigate("/customers");
        }else {
            toast.error("Lỗi");
            navigate("/customers");
        }
    }
    const validateObject = {
        name: Yup.string()
            .required("Không để trống trường này!"),
        dateOfBirth: Yup.string()
            .required("Không để trống trường này!"),
        identity: Yup.string()
            .required("Không để trống trường này!"),
        phone: Yup.string()
            .required("Không để trống trường này!"),
        email: Yup.string()
            .required("Không để trống trường này!")
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Không đúng định dạng!"),
        // typeCustomer: Yup.string()
        //     .required("Không để trống trường này!"),
        address: Yup.string()
            .required("Không để trống trường này!")
    };
    const initialValues = customer && {
        id: customer.id,
        name: customer.name,
        dateOfBirth: customer.dateOfBirth,
        gender: customer.gender,
        identity: customer.identity,
        phone: customer.phone,
        email: customer.email,
        typeCustomer: JSON.stringify(customer.typeCustomer),
        address: customer.address
    }
    return (
        customer ? (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    update(values)
                }}
                validationSchema={Yup.object(validateObject)}>
                <div className='container'>
                    <h1>Sửa khách hàng</h1>
                    <Form>
                        <div className='mb-3'>
                            <label htmlFor='name' className='form-label' >Họ tên</label>
                            <Field type='text' name="name" className='form-control' id='name'/>
                            <ErrorMessage name="name" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='dateOfBirth' className='form-label'>Ngày sinh</label>
                            <Field type='date' name="dateOfBirth" className='form-control' id='dateOfBirth'/>
                            <ErrorMessage name="dateOfBirth" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Gender</label>
                            <Field as="select" className='form-control' name="gender">
                                <option className="option" value>--Gender--</option>
                                <option className="option" value="0">Nữ</option>
                                <option className="option" value="1">Nam</option>

                            </Field>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='identity' className='form-label'>Số CMND/CCCD</label>
                            <Field type='text' name="identity" className='form-control' id='identity'/>
                            <ErrorMessage name="identity" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='phone' className='form-label'>Số điên thoại</label>
                            <Field type='text' name="phone" className='form-control' id='phone'/>
                            <ErrorMessage name="phone" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='email' className='form-label'>Email</label>
                            <Field type='text' name="email" className='form-control' id='email'/>
                            <ErrorMessage name="email" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Loại khách</label>
                            <Field as="select" className='form-control' name="typeCustomer">
                                {
                                    types.map(type => (
                                        <option key={type.id} value={JSON.stringify(type)}>{type.name}</option>
                                    ))
                                }
                            </Field>
                            <ErrorMessage name="typeCustomer" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='address' className='form-label'>Địa chỉ</label>
                            <Field type='text' name="address" className='form-control' id='address'/>
                            <ErrorMessage name="address" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </Form>
                </div>
            </Formik>
        </>
        ) : ("Không có KH")
    )
}