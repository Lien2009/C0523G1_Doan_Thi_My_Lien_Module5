
import React, {useEffect, useState} from "react";
import * as houseService from "../../../service/house_service";
import {Link, NavLink} from "react-router-dom";
import PageList from "../../common/Page";
import {DeleteHouse} from "./DeleteHouse";
import {DeleteRoom} from "../room/DeleteRoom";


export default function HouseList() {
    const [houses, setHouses] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalHouses, setTotalHouses] = useState(0);
    let sizePage = 3;
    const [deleteHouse, setDeleteHouse] = useState({});
    const [isShowModal, setShowModal] = useState(false);
    useEffect(() => {
        display()
    }, [currentPage, sizePage]);
    const display = async () => {
        const res = await houseService.getAll(currentPage, sizePage);
        setHouses(res.data);
        setTotalHouses(res.headers["x-total-count"])
    }
    const handleModal = async (value) => {
        setShowModal(true);
        setDeleteHouse(value);
    }
    const closeModal = async () => {
        display();
        setShowModal(false);
        setDeleteHouse(null);
    }
    return (
        <div className="container" style={{minHeight: "600px"}}>
            <h1>Danh sách houses</h1>
            <NavLink to="/houses/create">
                <button>Thêm mới</button>
            </NavLink>
            <div className="row">
                {houses.map(value => (
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
                                              to={`/houses/update/${value.id}`}>Sửa</Link>
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
            <DeleteHouse
                show={isShowModal}
                select={deleteHouse}
                handleClose={closeModal}
            ></DeleteHouse>

            <PageList
                currentPage={currentPage}
                totalItem={totalHouses}
                onPageChange={setCurrentPage}
                sizePage={sizePage}
            ></PageList>
        </div>
    )
}