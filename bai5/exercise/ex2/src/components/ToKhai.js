import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";

export function ToKhai() {
    const initValue = {
        hoTen: "",
        soHoChieu: "",
        namSinh: 0,
        gioiTinh: "0",
        quocTich: "",
        congTy: "",
        boPhan: "",
        yTe: "0",
        tinhThanh: "",
        quan: "",
        phuong: "",
        soNha: "",
        dienThoai: "",
        email: "",
        quocGia: "",
        dauHieu: [],
        tiepSuc: []
    }
    const validateObject = {
        hoTen: Yup.string().required("Required"),
        soHoChieu: Yup.string().required("Required"),
        namSinh: Yup.number()
            .required("Required")
            .min(1900, "Please over 1900!"),
        quocTich: Yup.string().required("Required"),
        tinhThanh: Yup.string().required("Required"),
        quan: Yup.string().required("Required"),
        phuong: Yup.string().required("Required"),
        soNha: Yup.string().required("Required"),
        dienThoai: Yup.string().required("Required"),
        email: Yup.string()
            .required("Required")
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Invalid email address")

    }
    return (
        <>
            <Formik initialValues={initValue}
                    onSubmit={(values) => {
                        values.gioiTinh = +values.gioiTinh;
                        values.yTe = +values.yTe;
                        console.log(values)
                        toast.success("Khai báo thành công!")
                    }
                    }
                    validationSchema={Yup.object(validateObject)}
            >
                <div className='container'>
                    <h1>Tờ khai y tế</h1>
                    <Form>
                        <div className='mb-3'>
                            <label htmlFor='hoTen' className='form-label'>Họ tên</label>
                            <Field type='text' name="hoTen" className='form-control' id='hoTen'/>
                            <ErrorMessage name="hoTen" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='soHoChieu' className='form-label'>Số hộ chiếu/CMND</label>
                            <Field type='text' name="soHoChieu" className='form-control' id='soHoChieu'/>
                            <ErrorMessage name="soHoChieu" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='namSinh' className='form-label'>Năm sinh</label>
                            <Field type='number' name="namSinh" className='form-control' id='namSinh'/>
                            <ErrorMessage name="namSinh" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='gioiTinh' className='form-label'>Giới tính</label>
                            <div className="form-check form-check-inline">
                                <Field className="form-check-input" type="radio" name="goiTinh"
                                       id="inlineRadio1"
                                       value="1"/>
                                <label className="form-check-label" htmlFor="inlineRadio1">Nam</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Field className="form-check-input" type="radio" name="goiTinh"
                                       id="inlineRadio2"
                                       value="0"/>
                                <label className="form-check-label" htmlFor="inlineRadio2">Nữ</label>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='quocTich' className='form-label'>Quốc tịch</label>
                            <Field type='text' name="quocTich" className='form-control' id='quocTich'/>
                            <ErrorMessage name="quocTich" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='congTy' className='form-label'>Công ty làm việc</label>
                            <Field type='text' name="congTy" className='form-control' id='congTy'/>
                            <ErrorMessage name="congTy" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='boPhan' className='form-label'>Bộ phận làm việc</label>
                            <Field type='text' name="boPhan" className='form-control' id='boPhan'/>
                            <ErrorMessage name="boPhan" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <label htmlFor='yTe' className='form-label'>Có thẻ bảo hiểm y tế</label>
                        <div className="form-check">
                            <Field name="yTe" className="form-check-input" type="checkbox" value="1"
                                   id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            </label>
                        </div>
                        <h2>Địa chỉ liên lạc tại Việt Nam</h2>
                        <div className='mb-3'>
                            <label htmlFor='tinhThanh' className='form-label'>Tỉnh thành</label>
                            <Field type='text' name="tinhThanh" className='form-control' id='tinhThanh'/>
                            <ErrorMessage name="tinhThanh" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='quan' className='form-label'>Quận/huyện</label>
                            <Field type='text' name="quan" className='form-control' id='quan'/>
                            <ErrorMessage name="quan" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='phuong' className='form-label'>Phường /xã</label>
                            <Field type='text' name="phuong" className='form-control' id='phuong'/>
                            <ErrorMessage name="phuong" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='soNha' className='form-label'>Số nhà</label>
                            <Field type='text' name="soNha" className='form-control' id='soNha'/>
                            <ErrorMessage name="soNha" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='dienThoai' className='form-label'>Điện thoại</label>
                            <Field type='text' name="dienThoai" className='form-control' id='dienThoai'/>
                            <ErrorMessage name="dienThoai" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='email' className='form-label'>Email</label>
                            <Field type='text' name="email" className='form-control' id='email'/>
                            <ErrorMessage name="email" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='quocGia' className='form-label'>Trong vòng 14 ngày qua, Anh/Chị có đến quốc
                                gia/vùng lãnh thổ nào(Có thể đi qua nhiều quốc gia)</label>
                            <Field type='textarea' name="quocGia" className='form-control' id='quocGia'/>
                        </div>

                        <label htmlFor='dauHieu' className='form-label'>Trong vòng 14 ngày qua, Anh/Chị có thấy xuất
                            hiện ấu hiệu nào sau đây không?</label>
                        <div className="form-check">
                            <Field name="dauHieu" className="form-check-input" type="checkbox" value="sot"
                                   id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Sốt
                            </label>
                        </div>
                        <div className="form-check">
                            <Field name="dauHieu" className="form-check-input" type="checkbox" value="ho" id="cb1"/>
                            <label className="form-check-label" htmlFor="cb1">
                                Ho
                            </label>
                        </div>
                        <div className="form-check">
                            <Field name="dauHieu" className="form-check-input" type="checkbox" value="khoTho"
                                   id="cb2"/>
                            <label className="form-check-label" htmlFor="cb2">
                                Khó thở
                            </label>
                        </div>
                        <div className="form-check">
                            <Field name="dauHieu" className="form-check-input" type="checkbox" value="viemPhoi"
                                   id="cb2"/>
                            <label className="form-check-label" htmlFor="cb2">
                                Viêm phổi
                            </label>
                        </div>
                        <div className="form-check">
                            <Field name="dauHieu" className="form-check-input" type="checkbox" value="dauHong"
                                   id="cb3"/>
                            <label className="form-check-label" htmlFor="cb3">
                                Đau họng
                            </label>
                        </div>
                        <div className="form-check">
                            <Field name="dauHieu" className="form-check-input" type="checkbox" value="metMoi"
                                   id="cb4"/>
                            <label className="form-check-label" htmlFor="cb4">
                                Mệt mỏi
                            </label>
                        </div>

                        <label htmlFor='dauHieu' className='form-label'>Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc
                            với?</label>
                        <div className="form-check">
                            <Field name="tiepSuc" className="form-check-input" type="checkbox" value="1"
                                   id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19
                            </label>
                        </div>
                        <div className="form-check">
                            <Field name="tiepSuc" className="form-check-input" type="checkbox" value="2"
                                   id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Người từ nước có bệnh COVID-19
                            </label>
                        </div>
                        <div className="form-check">
                            <Field name="tiepSuc" className="form-check-input" type="checkbox" value="3"
                                   id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Người có biểu hiện (Sốt, ho, khó thở)
                            </label>
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </Form>
                </div>
            </Formik>
        </>
    )
}