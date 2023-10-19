function Modal(){
    return(
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form action="/#" method="post">
                        <div className="modal-header" style="background-color: red">
                            <h5 className="modal-title" id="exampleModalLabel">Xóa khách hàng</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type="hidden" id="id_delete" name="id_delete"/>
                                Chắc chắn xóa <span id="name_delete"></span> không?<br/>
                                (Lưu ý: Hành động này không thể hoàn tác!)
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                            <button type="submit" className="btn btn-danger">Xóa</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Modal;