import {toast} from "react-toastify";
import {deleteHouse} from "../../../service/house_service";



export function DeleteHouse(house) {
    const {show, select, handleClose} = house


    const handleDelete = async (house) => {
        const res = await deleteHouse(house.id)
        if (res.status === 200) {
            handleClose();
            toast("Xóa thành công!")
        } else {
            toast.error("Lỗi")
        }

    };
    if (!show) return null;
    return (
        <>
            <div className="modal" tabIndex="-1" style={{display: 'block'}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">XÁC NHẬN XÓA</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                    onClick={handleClose}></button>
                        </div>
                        <div className="modal-body">
                            {/* eslint-disable-next-line react/prop-types */}
                            <p>Bạn có chắc chắn xóa house {select.name} không?</p>
                            <p style={{color: "red"}}>Lưu ý: Hành động này không thể hoàn tác!</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                    onClick={handleClose}>Đóng
                            </button>
                            <button type="button" className="btn btn-primary"
                                    onClick={() => handleDelete(select)}>Xóa
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}