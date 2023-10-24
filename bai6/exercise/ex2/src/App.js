import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {BookList} from "./components/BookList";
import {BookCreate} from "./components/BookCreate";
import "react-toastify/dist/ReactToastify.css"
import {ToastContainer} from "react-toastify";
import {BookUpdate} from "./components/BookUpdate";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<BookList/>}></Route>
          <Route path="/books/create" element={<BookCreate/>}></Route>
          <Route path="/books/update/:id" element={<BookUpdate/>}></Route>
      </Routes>
        <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
