import {useNavigate} from "react-router-dom";
import * as Yup from "yup";
import {addContract} from "../../service/contract_service";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";

export function CreateContract() {
    const navigate = useNavigate();
    const initValue = {
        contractNumber: "",
        startDate: "",
        endDate: "",
        deposit: 0,
        cost: 0
    }
    const validateObject = {
        contractNumber: Yup.string()
            .required("Không để trống trường này!")
            .matches(/^HD-[0-9]+$/,"Không đúng định dạng!"),
        startDate: Yup.string()
            .required("Không để trống trường này!"),
        endDate: Yup.string()
            .required("Không để trống trường này!"),
        deposit: Yup.number()
            .required("Không để trống trường này!")
            .min(1, "Số tiền > 0!"),
        cost: Yup.number()
            .required("Không để trống trường này!")
            .min(1, "Số tiền > 0!"),
    }
    const add = async (contract)=>{
        const res = await addContract(contract);
        if(res.status === 201){
            toast("Thêm mới thành công!");
            navigate("/contracts");
        }else {
            toast("Lỗi");
            navigate("/contracts");
        }
    }
    return(
        <>
            <Formik
                initialValues={initValue}
                onSubmit={(values) => {
                    add(values)
                }}
                validationSchema={Yup.object(validateObject)}>
                <div className='container'>
                    <h1>Thêm hợp đồng</h1>
                    <Form>
                        <div className='mb-3'>
                            <label htmlFor='contractNumber' className='form-label'>Số hợp đồng</label>
                            <Field type='text' name="contractNumber" className='form-control' id='contractNumber'/>
                            <ErrorMessage name="contractNumber" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='startDate' className='form-label'>Ngày bắt đầu</label>
                            <Field type='date' name="startDate" className='form-control' id='startDate'/>
                            <ErrorMessage name="startDate" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='endDate' className='form-label'>Ngày kết thúc</label>
                            <Field type='date' name="endDate" className='form-control' id='endDate'/>
                            <ErrorMessage name="endDate" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='deposit' className='form-label'>Tiền cọc</label>
                            <Field type='number' name="deposit" className='form-control' id='deposit'/>
                            <ErrorMessage name="deposit" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='cost' className='form-label'>Tổng thanh toán</label>
                            <Field type='number' name="cost" className='form-control' id='cost'/>
                            <ErrorMessage name="cost" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </Form>
                </div>
            </Formik>
        </>
    )
}