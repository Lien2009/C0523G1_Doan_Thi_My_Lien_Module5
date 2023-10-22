import {getAll} from "../../service/customer_service";
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
                {getAll().map(customer =>(
                    <tr key={customer.id}>
                        <td>{customer.id}</td>
                        <td>{customer.name}</td>
                        <td>{customer.dateOfBirth}</td>
                        <td>{customer.gender === 0? 'nữ':'nam'}</td>
                        <td>{customer.identity}</td>
                        <td>{customer.phone}</td>
                        <td>{customer.email}</td>
                        <td>{customer.type}</td>
                        <td>{customer.address}</td>
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
                    )
                )}
                </tbody>

            </table>
        </div>
    )
}
export default CustomerList;