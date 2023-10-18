const sv1 = {
    firstName: 'John',
    gender: 'male',
    degree: 'Bachelor'
}
const sv2 = {
    gender: 'male'
}
// const display = (object) => {
//     let {firstName = 'Liên', degree = 'NA'} = object
//     console.log('firstName:' + firstName + '  Degree:' + degree)
// }
const display = ({firstName = "Liên",degree = "NA" }) =>{
    const student = {
        firstName,
        degree
    }
    console.log(student)
}
display(sv1);
display(sv2);