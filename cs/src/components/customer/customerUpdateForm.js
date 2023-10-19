function CustomerUpdateForm(){
    return(
        <div className="container">
            <h1>Sửa khách hàng</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInput1" className="form-label">Họ tên</label>
                    <input type="text" className="form-control" id="exampleInput1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInput2" className="form-label">Ngày sinh</label>
                    <input type="date" className="form-control" id="exampleInput2"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInput3" className="form-label">Giới tính</label>
                    <input type="text" className="form-control" id="exampleInput3"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInput4" className="form-label">Số CMND</label>
                    <input type="text" className="form-control" id="exampleInput4"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInput5" className="form-label">Số điện thoại</label>
                    <input type="text" className="form-control" id="exampleInput5"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInput6" className="form-label">Email</label>
                    <input type="text" className="form-control" id="exampleInput6"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInput4" className="form-label">Loại khách</label>
                    <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option selected>Chọn</option>
                        <option value="1">Diamond</option>
                        <option value="2">Platinium</option>
                        <option value="3">Silver</option>
                        <option value="4">Member</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInput7" className="form-label">Địa chỉ</label>
                    <input type="text" className="form-control" id="exampleInput7"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default CustomerUpdateForm;