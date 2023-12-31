import axios from "axios";

const URL_VILLA = "http://localhost:8080/villas"
const URL_TYPE_RENT = "http://localhost:8080/typeRent/"
export const getAll = async (currentPage, sizePage) => {
    try{
        const res = await axios.get(URL_VILLA+`?_page=${currentPage}&_limit=${sizePage}`);
        return res;
    }catch (e) {
        alert("Hiển thị lỗi!")
    }
}
export const addVilla = async (villa) => {
    try {
        return await axios.post(URL_VILLA, villa)
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
        const res = await axios.get(URL_VILLA + `/${id}`);
        return res.data
    }catch (e){
        alert("Tìm villa bị lỗi!")
    }
}
export const updateVilla = async (villa) => {
    try {
        return await axios.put(URL_VILLA + `/${villa.id}`, villa)
    } catch (e) {
        alert("Lỗi rồi!")
    }
}
export const deleteVilla = async (id) => {
    try {
        return await axios.delete(URL_VILLA+ `/${id}`)
    } catch (e) {
        alert("Lỗi rồi!")
    }
}
