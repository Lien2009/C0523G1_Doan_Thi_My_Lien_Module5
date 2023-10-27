import * as customerService from "../../service/customer_service";
import React, {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {DeleteCustomer} from "./DeleteCustomer";
import Page from "../common/Page";
import PageList from "../common/Page";
import {Field} from "formik";

export default function CustomerList() {
    const [customers, setCustomers] = useState([]);
    const [deleteCustomer, setDeleteCustomer] = useState({});
    const [isShowModal, setShowModal] = useState(false);
    const [name, setName] = useState("");
    const [typeCustomer, setTypeCustomer] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCustomers, setTotalCustomers] = useState(0);
    let sizePage = 5;
    const [types, setTypes] = useState([]);
    useEffect(() => {
        displayTypes()
    }, []);
    const displayTypes = async () => {
        const res = await customerService.getTypeCustomer();
        setTypes(res);
    }
    useEffect(() => {
        display()
    }, [name, typeCustomer, currentPage, sizePage]);
    const display = async () => {
        const res = await customerService.getAll(name, typeCustomer, currentPage, sizePage);
        setCustomers(res.data);
        setTotalCustomers(res.headers["x-total-count"])

    }
    const handleModal = async (value) => {
        setShowModal(true);
        setDeleteCustomer(value);
    }
    const closeModal = async () => {
        display();
        setShowModal(false);
        setDeleteCustomer(null);
    }

    return (

        <div className="container" style={{minHeight: "510px"}}>
            <h1>Danh sách khách hàng</h1>
            <NavLink to="/customers/create">
                <button className="btn btn-outline-primary mb-3">Thêm mới</button>
            </NavLink>
            <div>
                <input className="form-select-lg mb-3 w-25" type="text" placeholder="Nhập tên" onChange={(event) => setName(event.target.value)}/>
                <select style={{marginLeft: "485px"}} className="form-select form-select-lg mb-3 w-25" onChange={(event) => setTypeCustomer(event.target.value)}>
                    <option className="option" value="">--Loại khách--</option>
                    {
                        types.map(type => (
                            <option key={type.id} value={type.name}>{type.name}</option>
                        ))
                    }
                </select>
            </div>
            <table className="table table-striped" id="example">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Họ tên</th>
                    <th>Ngày sinh</th>
                    <th>Giới tính</th>
                    <th>Số CMND</th>
                    <th>Số điện thoại</th>
                    <th>Email</th>
                    <th>Loại khách</th>
                    <th>Địa chỉ</th>
                    <th>Thao tác</th>
                    <th>Thao tác</th>
                </tr>
                </thead>
                {customers.length > 0 ? (
                    <tbody>
                    {customers.map((customer, index) => (
                            <tr key={customer.id}>
                                <td>{index + 1}</td>
                                <td>{customer.name}</td>
                                <td>{customer.dateOfBirth}</td>
                                <td>{customer.gender === 0 ? "nữ" : 'nam'}</td>
                                <td>{customer.identity}</td>
                                <td>{customer.phone}</td>
                                <td>{customer.email}</td>
                                <td>{customer.typeCustomer.name}</td>
                                <td>{customer.address}</td>
                                <td>
                                    <Link className="btn btn-outline-primary"
                                          to={`/customers/update/${customer.id}`}>Sửa</Link>
                                </td>
                                <td>
                                    <button className="btn btn-outline-danger" onClick={() => handleModal(customer)}>Xóa
                                    </button>
                                </td>
                            </tr>
                        )
                    )}
                    </tbody>
                ) : (<td colSpan={11}>Không có DL</td>)}
            </table>
            <DeleteCustomer
                show={isShowModal}
                select={deleteCustomer}
                handleClose={closeModal}
            ></DeleteCustomer>
            <PageList
                currentPage={currentPage}
                totalItem={totalCustomers}
                onPageChange={setCurrentPage}
                sizePage={sizePage}
            ></PageList>
        </div>

    )
}
