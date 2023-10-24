import React, {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import * as bookService from "../../src/service/bookService";
import {DeleteBook} from "./DeleteBook";

export function BookList() {
    const [books, setBooks] = useState([]);
    const [book, setBook] = useState(null);
    const [status, setStatus] = useState(false);
    useEffect(() => {
        display()
    }, []);
    const display = async () => {
        const res = await bookService.getAll();
        setBooks(res);
    }
    const handleModal = async (value) => {
        setStatus(true);
        setBook(value);
    }

    const closeModel =  async () => {
        display()
        setStatus(false);
        setBook(null);
    }

    return (
        <>
            <NavLink to="/books/create">
                <button>Create</button>
            </NavLink>
            <h1>Book List</h1>
            <table className="table table-striped">
                <thead>
                <tr>
                    <td>Title</td>
                    <td>Quantity</td>
                    <td colSpan={2}>Action</td>
                </tr>
                </thead>
                <tbody>
                {books.map(book => (
                    <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.quantity}</td>
                        <td>
                            <Link className="btn btn-outline-primary" to={`/books/update/${book.id}`}>Sửa</Link>
                        </td>
                        <td>
                            <Link to="/" type="button" onClick={() => handleModal(book)}>Xóa</Link>
                        </td>
                    </tr>
                ))
                }
                </tbody>
            </table>
            <DeleteBook
                show={status}
                select={book}
                handleClose={closeModel}
            ></DeleteBook>
        </>
    )
}