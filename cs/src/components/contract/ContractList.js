import {getAll} from "../../service/contract_service";

function ContractList(){
    return(
        <div className="container" style={{minHeight: "510px"}}>
            <h1>Danh sách hợp đồng</h1>
            <table className="table table-striped" id="example">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Số hợp đồng</th>
                    <th>Ngày bắt đầu</th>
                    <th>Ngày kết thúc</th>
                    <th>Số tiền cọc trước</th>
                    <th>Tổng số tiền thanh toán</th>
                </tr>
                </thead>
                <tbody>
                {getAll().map(contract => (
                    <tr key={contract.id}>
                        <td>{contract.id}</td>
                        <td>{contract.contractNumber}</td>
                        <td>{contract.startDate}</td>
                        <td>{contract.endDate}</td>
                        <td>{contract.deposit}</td>
                        <td>{contract.cost}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ContractList;