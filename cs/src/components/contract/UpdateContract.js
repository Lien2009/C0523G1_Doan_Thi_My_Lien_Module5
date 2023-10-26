import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as contractService from "../../service/contract_service";
import {toast} from "react-toastify";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";

export function UpdateContract(){
    const navigate = useNavigate();
    const [contract, setContract] = useState();
    const {id} = useParams();
    useEffect(()=>{
        findById()
    },[]);
    const findById = async () =>{
        const res = await contractService.findById(id);
        setContract(res);
    }
    const update = async (contract) =>{
        const res = await contractService.updateContract(contract);
        if(res.status === 200){
            toast("Sửa thành công!");
            navigate("/contracts");
        }else{
            toast.error("Lỗi");
            navigate("/contracts");
        }
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
    const initValue = contract ? {
        id: contract.id,
        contractNumber: contract.contractNumber,
        startDate: contract.startDate,
        endDate: contract.endDate,
        deposit: contract.deposit,
        cost: contract.cost
    } :{
        id: "",
        contractNumber: "",
        startDate: "",
        endDate: "",
        deposit: 0,
        cost: 0
    }


    return (
        contract ? (
            <>
                <Formik
                    initialValues={initValue}
                    onSubmit={(values) => {
                        update(values)
                    }}
                    validationSchema={Yup.object(validateObject)}>
                    <div className='container'>
                        <h1>Sửa hợp đồng</h1>
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
        ) : ("Không có HĐ này")
    )
}