import logo from './logo.svg';
import './App.css';
import './index.css'
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import PageList from "./components/common/Page";
import {Route, Routes} from "react-router-dom";
import FacilityList from "./components/facility/FacilityList";
import CustomerList from "./components/customer/CustomerList";
import ContractList from "./components/contract/ContractList";
import {ToastContainer} from "react-toastify";
import {CreateCustomer} from "./components/customer/CreateCustomer";
import "react-toastify/dist/ReactToastify.css"
import {UpdateCustomer} from "./components/customer/UpdateCustomer";
import {CreateContract} from "./components/contract/CreateContract";
import {UpdateContract} from "./components/contract/UpdateContract";


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
            </Routes>
            <Footer/>
            <ToastContainer/>
        </div>
    );
}

export default App;
