import * as contractService from "../../service/contract_service";
import React, {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {DeleteContract} from "./DeleteContract";
import PageList from "../common/Page";

export default function ContractList() {
    const [contracts, setContracts] = useState([]);
    const [deleteContract, setDeleteContract] = useState({});
    const [isShowModal, setShowModal] = useState(false);
    const [contractNumber, setContractNumber] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalContracts, setTotalContracts] = useState(0);
    let sizePage = 5;
    useEffect(() => {
        display()
    }, [contractNumber, currentPage, sizePage])
    const display = async () => {
        const res = await contractService.getAll(contractNumber, currentPage, sizePage);
        setContracts(res.data);
        setTotalContracts(res.headers["x-total-count"]);
    }
    const handleModal = async (value) => {
        setShowModal(true);
        setDeleteContract(value);
    }
    const closeModal = async () => {
        display();
        setShowModal(false);
        setDeleteContract(null);
    }
    return (
        <div className="container" style={{minHeight: "510px"}}>
            <h1>Danh sách hợp đồng</h1>
            <NavLink to="/contracts/create">
                <button>Thêm mới</button>
            </NavLink>
            <div>
                <input type="text" placeholder="Nhập mã hợp đồng" onChange={(event) => setContractNumber(event.target.value)}/>
            </div>
            <table className="table table-striped" id="example">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Số hợp đồng</th>
                    <th>Ngày bắt đầu</th>
                    <th>Ngày kết thúc</th>
                    <th>Số tiền cọc trước</th>
                    <th>Tổng số tiền thanh toán</th>
                    <th colSpan={2}>Thao tác</th>
                </tr>
                </thead>
                {contracts.length>0?(
                <tbody>
                {contracts.map((contract,index) => (
                    <tr key={contract.id}>
                        <td>{index+1}</td>
                        <td>{contract.contractNumber}</td>
                        <td>{contract.startDate}</td>
                        <td>{contract.endDate}</td>
                        <td>{contract.deposit}</td>
                        <td>{contract.cost}</td>
                        <td>
                            <Link className="btn btn-outline-primary" to={`/contracts/update/${contract.id}`}>Sửa</Link>
                        </td>

                        <td>
                            <button className="btn btn-outline-danger"
                                    onClick={() => handleModal(contract)}>Xóa
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
                ) : (<td colSpan={8}>Không có DL</td>)}
            </table>
            <DeleteContract
                show={isShowModal}
                select={deleteContract}
                handleClose={closeModal}
            >
            </DeleteContract>
            <PageList
                currentPage={currentPage}
                totalItem={totalContracts}
                onPageChange={setCurrentPage}
                sizePage={sizePage}
            ></PageList>
        </div>
    )
}
