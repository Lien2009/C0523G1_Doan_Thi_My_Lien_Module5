import logo from './logo.svg';
import './App.css';
import './index.css'
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import PageList from "./components/common/Page";
import {Route, Routes} from "react-router-dom";
import FacilityList from "./components/facility/villa/VillaList";
import CustomerList from "./components/customer/CustomerList";
import ContractList from "./components/contract/ContractList";
import {ToastContainer} from "react-toastify";
import {CreateCustomer} from "./components/customer/CreateCustomer";
import "react-toastify/dist/ReactToastify.css"
import {UpdateCustomer} from "./components/customer/UpdateCustomer";
import {CreateContract} from "./components/contract/CreateContract";
import {UpdateContract} from "./components/contract/UpdateContract";
import VillaList from "./components/facility/villa/VillaList";
import {CreateVilla} from "./components/facility/villa/CreateVilla";
import {UpdateVilla} from "./components/facility/villa/UpdateVilla";
import HouseList from "./components/facility/house/HouseList";
import {CreateHouse} from "./components/facility/house/CreateHouse";
import {UpdateHouse} from "./components/facility/house/UpdateHouse";
import RoomList from "./components/facility/room/RoomList";
import {CreateRoom} from "./components/facility/room/CreateRoom";
import {UpdateRoom} from "./components/facility/room/UpdateRoom";


function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<FacilityList/>}/>
                <Route path="/customers" element={<CustomerList/>}/>
                <Route path="/customers/create" element={<CreateCustomer/>}/>
                <Route path="/customers/update/:id" element={<UpdateCustomer/>}/>
                <Route path="/contracts" element={<ContractList/>}/>
                <Route path="/contracts/create" element={<CreateContract/>}/>
                <Route path="/contracts/update/:id" element={<UpdateContract/>}/>
                <Route path="/villas" element={<VillaList/>}/>
                <Route path="/villas/create" element={<CreateVilla/>}/>
                <Route path="/villas/update/:id" element={<UpdateVilla/>}/>
                <Route path="/houses" element={<HouseList/>}/>
                <Route path="/houses/create" element={<CreateHouse/>}/>
                <Route path="/houses/update/:id" element={<UpdateHouse/>}/>
                <Route path="/rooms" element={<RoomList/>}/>
                <Route path="/rooms/create" element={<CreateRoom/>}/>
                <Route path="/rooms/update/:id" element={<UpdateRoom/>}/>
            </Routes>
            {/*<Footer/>*/}
            <ToastContainer/>
        </div>
    );
}

export default App;
