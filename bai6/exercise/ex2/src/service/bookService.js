import axios from "axios";

const URL_BOOK = "http://localhost:8080/books/"

export const getAll = async () => {
    try {
        const res = await axios.get(URL_BOOK)
        return res.data;
    } catch (e) {
        alert("Lỗi rồi!")
    }
}
export const addBook = async (book) => {
    try {
        return await axios.post(URL_BOOK, book)
    } catch (e) {
        alert("Lỗi rồi!")
    }
}
export const findById = async (id) => {
    try {
        const res = await axios.get(URL_BOOK + id);
        return res.data;
    } catch (e) {
        alert("Lỗi rồi!")
    }
}
export const updateBook = async (book) => {
    try {
        return await axios.put(URL_BOOK + book.id, book)
    } catch (e) {
        alert("Lỗi rồi!")
    }
}

export const deleteBook = async (id) => {
    try {
        return await axios.delete(URL_BOOK+ id)
    } catch (e) {
        alert("Lỗi rồi!")
    }
}