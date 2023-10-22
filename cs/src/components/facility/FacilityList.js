import Card from "./FacilityCard";
import {getAll} from "../../service/facility_service";

function Facilities(){
    return(
        <div className="container" style={{minHeight: "600px"}}>
            <h1>Danh sách dịch vụ</h1>
            <div className="row">
                {getAll().map(facility =>(
                    <div className="col-12 col-sm-6 col-xl-4 mt-4" key={facility.id}>
                        <div className="card size-card">
                            <a href="#">
                                <img className="size-photo"
                                     src={facility.image}
                                     className="card-img-top" alt="..."/>
                            </a>
                            <div className="card-body">
                                <p className="card-text">{facility.name}<br/>
                                    Room size: {facility.area}<br/>
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
                )}
            </div>
        </div>
    )
}
export default Facilities;