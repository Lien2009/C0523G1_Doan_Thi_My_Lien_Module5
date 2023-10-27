import {useNavigate} from "react-router-dom";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {addCustomer, getTypeCustomer} from "../../service/customer_service";
import {toast} from "react-toastify";
import {useEffect, useState} from "react";

export function CreateCustomer() {
    const navigate = useNavigate();
    const [types, setTypes] = useState([]);
    useEffect(() => {
        display()
    }, []);
    const display = async () => {
        const res = await getTypeCustomer();
        setTypes(res);
    }
    const initValue = {
        name: "",
        dateOfBirth: "",
        gender: "",
        identity: "",
        phone: "",
        email: "",
        typeCustomer: JSON.stringify({
            id: 4,
            name: "MEMBER"
        }),
        address: ""
    };
    // validate tuổi > 18
    const d = new Date();
    const date = (d.getFullYear() - 18) + "-" + (d.getMonth() + 1) + "-" + d.getDate();

    const validateObject = {
        name: Yup.string()
            .required("Không để trống trường này!")
            .matches(/^[A-Za-z ]*$/, "Không đúng định dạng!"),
        dateOfBirth: Yup.date()
            .required("Không để trống trường này!")
            .max(date, "Your age must be greater than 18"),
        identity: Yup.string()
            .required("Không để trống trường này!"),
        phone: Yup.string()
            .required("Không để trống trường này!")
            .matches(/^090\d{7}$/,"Không đúng format!"),
        gender: Yup.string()
            .required("Không để trống trường này!"),
        email: Yup.string()
            .required("Không để trống trường này!")
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Không đúng định dạng!"),
        address: Yup.string()
            .required("Không để trống trường này!")
    };
    const add = async (customer) => {
        console.log(customer)
        const res = {...customer, typeCustomer: JSON.parse(customer.typeCustomer)};
        const newCustomer = await addCustomer(res);
        customer.gender = +customer.gender;
        if (newCustomer.status === 201) {
            toast("Thêm mới thành công!");
            navigate("/customers");
        } else {
            toast("Lỗi");
            navigate("/customers")
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
                    <h1>Thêm khách hàng</h1>
                    <Form>
                        <div className='mb-3'>
                            <label htmlFor='name' className='form-label'>Họ tên</label>
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
                            <ErrorMessage name="gender" component="span" style={{color: "red"}}></ErrorMessage>
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
                            <label style={{fontWeight: "bold"}}>Loại khách</label>
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
    )
}