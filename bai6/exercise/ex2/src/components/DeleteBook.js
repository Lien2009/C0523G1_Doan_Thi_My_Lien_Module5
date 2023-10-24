import {toast} from "react-toastify";
import {deleteBook} from "../service/bookService";


export function DeleteBook(book) {
    const {show, select, handleClose} = book


    const handleDelete = async (book) => {
        const res = await deleteBook(book.id)
        if (res.status === 200) {
            handleClose();
            toast("Xóa thành công!")
        } else {
            toast.error("Lỗi")
        }

    };
    // if (!show) return null;
    return (
        <>
            {
                show && (
                    <div className="modal" tabIndex="-1" style={{display: 'block'}}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Confirm Deletion</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                            onClick={handleClose}></button>
                                </div>
                                <div className="modal-body">
                                    {/* eslint-disable-next-line react/prop-types */}
                                    <p>Do you want to delete {select.title}</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                            onClick={handleClose}>Close
                                    </button>
                                    <button type="button" className="btn btn-primary"
                                            onClick={() => handleDelete(select)}>Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}