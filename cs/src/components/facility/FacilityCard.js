function Card(){
    return(
        <div className="col-12 col-sm-6 col-xl-4 mt-4">
            <div className="card size-card">
                <a href="#">
                    <img className="size-photo"
                         src=""
                         className="card-img-top" alt="..."/>
                </a>
                <div className="card-body">
                    <p className="card-text">GARDEN SUPERIOR<br/>
                        Room size: 40m<br/>
                        <a className="btn btn-primary" href="/#">
                            Sửa
                        </a>
                        <button type="button" className="btn btn-warning ms-2" data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                onClick="sendInforModal('1','GARDEN SUPERIOR')">
                            Xóa
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Card;