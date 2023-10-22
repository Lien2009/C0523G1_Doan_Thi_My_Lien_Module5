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


function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/facilities" element={<FacilityList/>}/>
                <Route path="/customers" element={<CustomerList/>}/>
                <Route path="/contracts" element={<ContractList/>}/>
            </Routes>
            <PageList/>
            <Footer/>
        </div>
    );
}

export default App;
