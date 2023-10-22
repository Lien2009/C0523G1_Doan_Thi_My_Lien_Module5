function ContractCreateForm(){
    return(
        <div className="container">
            <h1>Tạo hợp đồng</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInput1" className="form-label">Số hợp đồng</label>
                    <input type="text" className="form-control" id="exampleInput1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInput2" className="form-label">Ngày bắt đầu</label>
                    <input type="date" className="form-control" id="exampleInput2"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInput3" className="form-label">Ngày kết thúc</label>
                    <input type="date" className="form-control" id="exampleInput3"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInput4" className="form-label">Số tiền cọc trước</label>
                    <input type="text" className="form-control" id="exampleInput4"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInput5" className="form-label">Tổng số tiền thanh toán</label>
                    <input type="text" className="form-control" id="exampleInput5"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default ContractCreateForm;