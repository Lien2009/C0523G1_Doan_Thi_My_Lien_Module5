import * as customerService from "../../service/customer_service";
import React, {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {DeleteCustomer} from "./DeleteCustomer";
import Page from "../common/Page";
import PageList from "../common/Page";

export default function CustomerList() {
    const [customers, setCustomers] = useState([]);
    const [deleteCustomer, setDeleteCustomer] = useState({});
    const [isShowModal, setShowModal] = useState(false);
    const [name, setName] = useState("");
    const [typeCustomer, setTypeCustomer] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCustomers, setTotalCustomers] = useState(0);

    useEffect(() => {
        display()
    }, [name, typeCustomer, currentPage]);
    const display = async () => {
        const res = await customerService.getAll(name, typeCustomer, currentPage);
        setCustomers(res.data);
        setTotalCustomers(res.headers["x-total-count"])
        console.log(customers)
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
                <button>Thêm mới</button>
            </NavLink>
            <div>
                <input type="text" placeholder="Nhập tên" onChange={(event) => setName(event.target.value)}/>
                <input type="text" className="ms-2" placeholder="Nhập loại khách"
                       onChange={(event) => setTypeCustomer(event.target.value)}/>
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
                    {customers.map(customer => (
                            <tr key={customer.id}>
                                <td>{customer.id}</td>
                                <td>{customer.name}</td>
                                <td>{customer.dateOfBirth}</td>
                                <td>{customer.gender === 0 ? 'nữ' : 'nam'}</td>
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
            ></PageList>
        </div>

    )
}
