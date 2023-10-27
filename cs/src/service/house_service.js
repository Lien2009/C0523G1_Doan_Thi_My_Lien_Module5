import axios from "axios";

const URL_HOUSE = "http://localhost:8080/houses"
const URL_TYPE_RENT = "http://localhost:8080/typeRent/"
export const getAll = async (currentPage, sizePage) => {
    try{
        const res = await axios.get(URL_HOUSE+`?_page=${currentPage}&_limit=${sizePage}`);
        return res;
    }catch (e) {
        alert("Hiển thị lỗi!")
    }
}
export const addHouse = async (house) => {
    try {
        return await axios.post(URL_HOUSE, house)
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
        const res = await axios.get(URL_HOUSE + `/${id}`);
        return res.data
    }catch (e){
        alert("Tìm house bị lỗi!")
    }
}
export const updateHouse = async (house) => {
    try {
        return await axios.put(URL_HOUSE + `/${house.id}`, house)
    } catch (e) {
        alert("Lỗi rồi!")
    }
}
export const deleteHouse = async (id) => {
    try {
        return await axios.delete(URL_HOUSE+ `/${id}`)
    } catch (e) {
        alert("Lỗi rồi!")
    }
}
