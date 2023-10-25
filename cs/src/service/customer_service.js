import axios from "axios";
const URL_CUSTOMER = "http://localhost:8080/customers/"
const URL_TYPE_CUSTOMER = "http://localhost:8080/typeCustomer/"
export const getAll = async () => {
    try{
        const res = await axios.get(URL_CUSTOMER)
        return res.data;
    }catch (e){
        alert("Hiển thị bị lỗi!")
    }
}
export const addCustomer = async (customer) => {
    try {
        return await axios.post(URL_CUSTOMER, customer)
    } catch (e) {
        alert("Thêm bị lỗi!")
    }
}
export const getTypeCustomer = async ()=> {
    try {
        const res = await axios.get(URL_TYPE_CUSTOMER)
        return res.data
    }catch (e){
        alert("Loại khách bị lỗi!")
    }
}
export const findById = async (id) => {
    try {
        const res = await axios.get(URL_CUSTOMER + id);
        return res.data
    }catch (e){
        alert("Tìm khách bị lỗi!")
    }
}
export const updateCustomer = async (customer) => {
    try {
        return await axios.put(URL_CUSTOMER + customer.id, customer)
    } catch (e) {
        alert("Lỗi rồi!")
    }
}
export const deleteCustomer = async (id) => {
    try {
        return await axios.delete(URL_CUSTOMER+ id)
    } catch (e) {
        alert("Lỗi rồi!")
    }
}