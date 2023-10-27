
import React, {useEffect, useState} from "react";
import * as roomService from "../../../service/room_service";
import {Link, NavLink} from "react-router-dom";
import PageList from "../../common/Page";
import {DeleteRoom} from "./DeleteRoom";


export default function RoomList() {
    const [rooms, setRooms] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalRooms, setTotalRooms] = useState(0);
    let sizePage = 3;
    const [deleteRoom, setDeleteRoom] = useState({});
    const [isShowModal, setShowModal] = useState(false);
    useEffect(() => {
        display()
    }, [currentPage, sizePage]);
    const display = async () => {
        const res = await roomService.getAll(currentPage, sizePage);
        setRooms(res.data);
        setTotalRooms(res.headers["x-total-count"])
    }
    const handleModal = async (value) => {
        setShowModal(true);
        setDeleteRoom(value);
    }
    const closeModal = async () => {
        display();
        setShowModal(false);
        setDeleteRoom(null);
    }
    return (
        <div className="container" style={{minHeight: "600px"}}>
            <h1>Danh sách room</h1>
            <NavLink to="/rooms/create">
                <button>Thêm mới</button>
            </NavLink>
            <div className="row">
                {rooms.map(value => (
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
                                              to={`/rooms/update/${value.id}`}>Sửa</Link>
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
            <DeleteRoom
                show={isShowModal}
                select={deleteRoom}
                handleClose={closeModal}
            ></DeleteRoom>

            <PageList
                currentPage={currentPage}
                totalItem={totalRooms}
                onPageChange={setCurrentPage}
                sizePage={sizePage}
            ></PageList>
        </div>
    )
}