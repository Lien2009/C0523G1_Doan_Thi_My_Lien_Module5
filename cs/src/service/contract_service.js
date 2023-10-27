import axios from "axios";

const URL_CONTRACT = "http://localhost:8080/contracts"

export const getAll = async (contractNumber,currentPage,sizePage) => {
    try {
        const res = await axios.get(URL_CONTRACT+`?contractNumber_like=${contractNumber}&_page=${currentPage}&_limit=${sizePage}&_sort=startDate&_order=desc`)
        return res;
    } catch (e) {
        alert("Hiển thị lỗi!")
    }
}
export const addContract = async (contract) => {
    try {
        return await axios.post(URL_CONTRACT, contract)
    } catch (e) {
        alert("Thêm lỗi!")
    }
}
export const findById = async (id) =>{
    try{
        const res = await axios.get(URL_CONTRACT+`/${id}`);
        return res.data
    }catch (e){
        alert("Tìm hợp đồng lỗi!")
    }
}
export const updateContract = async (contract)=>{
    try{
        return await axios.put(URL_CONTRACT+`/${contract.id}`, contract)
    }catch (e){
        alert("Sửa lỗi!")
    }
}
export const deleteContract = async (id)=>{
    try{
        return await axios.delete(URL_CONTRACT + `/${id}`);
    }catch (e){
        alert("Xóa lỗi!")
    }
}