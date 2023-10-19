import logo from './logo.svg';
import './App.css';
import './index.css'
import Footer from "./components/footer";
import Header from "./components/header";
import Facilities from "./components/facility/facilitiesList";
import Page from "./components/page";
import PageList from "./components/page";
import CustomerList from "./components/customer/customerList";
import ContractList from "./components/contract/contractList";
import FacilitiesList from "./components/facility/facilitiesList";

function App() {
    return (
        <div className="App">
            <Header/>
            <FacilitiesList/>
            <PageList/>
            <Footer/>
        </div>
    );
}

export default App;
