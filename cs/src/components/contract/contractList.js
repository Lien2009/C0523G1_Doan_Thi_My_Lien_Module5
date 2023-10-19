function ContractList(){
    return(
        <div className="container" style={{minHeight: "510px"}}>
            <h1>Danh sách hợp đồng</h1>
            <table className="table table-striped" id="example">
                <tr>
                    <th>STT</th>
                    <th>Số hợp đồng</th>
                    <th>Ngày bắt đầu</th>
                    <th>Ngày kết thúc</th>
                    <th>Số tiền cọc trước</th>
                    <th>Tổng số tiền thanh toán</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>HD-001</td>
                    <td>2023-09-20</td>
                    <td>2023-09-22</td>
                    <td>1000000</td>
                    <td>2000000</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>HD-002</td>
                    <td>2023-09-20</td>
                    <td>2023-09-22</td>
                    <td>1000000</td>
                    <td>2000000</td>
                </tr>
            </table>
        </div>
    )
}
export default ContractList;