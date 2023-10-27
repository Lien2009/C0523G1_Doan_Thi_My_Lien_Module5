
import React, {useEffect, useState} from "react";
import * as villaService from "../../../service/villa_service";
import {Link, NavLink} from "react-router-dom";
import PageList from "../../common/Page";
import {DeleteVilla} from "./DeleteVilla";

export default function VillaList() {
    const [villas, setVillas] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalVillas, setTotalVillas] = useState(0);
    let sizePage = 3;
    const [deleteVilla, setDeleteVilla] = useState({});
    const [isShowModal, setShowModal] = useState(false);
    useEffect(() => {
        display()
    }, [currentPage, sizePage]);
    const display = async () => {
        const res = await villaService.getAll(currentPage, sizePage);
        setVillas(res.data);
        setTotalVillas(res.headers["x-total-count"])
    }
    const handleModal = async (value) => {
        setShowModal(true);
        setDeleteVilla(value);
    }
    const closeModal = async () => {
        display();
        setShowModal(false);
        setDeleteVilla(null);
    }
    return (
        <div className="container" style={{minHeight: "600px"}}>
            <h1>Danh sách villa</h1>
            <NavLink to="/villas/create">
                <button>Thêm mới</button>
            </NavLink>
            <div className="row">
                {villas.map(value => (
                        <div className="col-12 col-sm-6 col-xl-4 mt-4" key={value.id}>
                            <div className="card size-card">
                                <a href="#">
                                    <img className="size-photo"
                                         src={value.image}
                                         className="card-img-top" alt="..."/>
                                </a>
                                <div className="card-body">
                                    <p className="card-text">{value.name}<br/>
                                        Room size: {value.area}<br/>
                                        <Link className="btn btn-outline-primary"
                                              to={`/villas/update/${value.id}`}>Sửa</Link>
                                        <button className="btn btn-outline-danger ms-2"
                                                onClick={() => handleModal(value)}>Xóa
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
            <DeleteVilla
                show={isShowModal}
                select={deleteVilla}
                handleClose={closeModal}
            ></DeleteVilla>

            <PageList
                currentPage={currentPage}
                totalItem={totalVillas}
                onPageChange={setCurrentPage}
                sizePage={sizePage}
            ></PageList>
        </div>
    )
}