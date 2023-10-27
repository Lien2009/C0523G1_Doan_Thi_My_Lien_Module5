import axios from "axios";

const URL_ROOM = "http://localhost:8080/rooms"
const URL_TYPE_RENT = "http://localhost:8080/typeRent/"
export const getAll = async (currentPage, sizePage) => {
    try{
        const res = await axios.get(URL_ROOM+`?_page=${currentPage}&_limit=${sizePage}`);
        return res;
    }catch (e) {
        alert("Hiển thị lỗi!")
    }
}
export const addRoom = async (room) => {
    try {
        return await axios.post(URL_ROOM, room)
    } catch (e) {
        alert("Thêm bị lỗi!")
    }
}
export const getAllTypes = async () => {
    try{
        return await axios.get(URL_TYPE_RENT);
    }catch (e) {
        alert("Hiển thị lỗi!")
    }
}
export const findById = async (id) => {
    try {
        const res = await axios.get(URL_ROOM + `/${id}`);
        return res.data
    }catch (e){
        alert("Tìm room bị lỗi!")
    }
}
export const updateRoom = async (room) => {
    try {
        return await axios.put(URL_ROOM + `/${room.id}`, room)
    } catch (e) {
        alert("Lỗi rồi!")
    }
}
export const deleteRoom = async (id) => {
    try {
        return await axios.delete(URL_ROOM+ `/${id}`)
    } catch (e) {
        alert("Lỗi rồi!")
    }
}
