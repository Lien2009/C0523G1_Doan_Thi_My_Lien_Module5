function CustomerList(){
    return (
        <div className="container" style={{minHeight: "510px"}}>
            <h1>Danh sách khách hàng</h1>
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
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Đoàn Thị Mỹ Liên</td>
                    <td>1996-09-20</td>
                    <td>Nữ</td>
                    <td>012345678</td>
                    <td>0705995801</td>
                    <td>mylien200996@gmail.com</td>
                    <td>Diamond</td>
                    <td>Đà Nẵng</td>
                    <td>
                        <a className="btn btn-primary" href="/#">
                            Sửa
                        </a>
                    </td>
                    <td>
                        <button type="button" className="btn btn-warning" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">
                            Xóa
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Nguyễn Thị Mỹ Hạnh</td>
                    <td>1996-09-20</td>
                    <td>Nữ</td>
                    <td>012345678</td>
                    <td>0705995801</td>
                    <td>mylien200996@gmail.com</td>
                    <td>Diamond</td>
                    <td>Đà Nẵng</td>
                    <td>
                        <a className="btn btn-primary" href="/#">
                            Sửa
                        </a>
                    </td>
                    <td>
                        <button type="button" className="btn btn-warning" data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                onClick="sendInforModal('2','Nguyễn Thị Mỹ Hạnh')">
                            Xóa
                        </button>
                    </td>
                </tr>
                </tbody>

            </table>
        </div>
    )
}
export default CustomerList;