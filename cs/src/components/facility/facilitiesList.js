import Card from "./facilitieCard";

function Facilities(){
    return(
        <div className="container" style={{minHeight: "600px"}}>
            <h1>Danh sách dịch vụ</h1>
            <div className="row">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>

            </div>
        </div>
    )
}
export default Facilities;