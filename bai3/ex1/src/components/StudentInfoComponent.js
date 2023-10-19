const students = [
    {
        Id: 1,
        Name: 'Mỹ Hạnh',
        Age: 20,
        Address: 'Quảng Nam'
    },
    {
        Id: 2,
        Name: 'Trần Chánh',
        Age: 30,
        Address: 'Đà Nẵng'
    },
    {
        Id: 3,
        Name: 'Đoàn Liên',
        Age: 27,
        Address: 'Đà Nẵng'
    }
];
function Student(){
    return(
        <div className="container">
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
                    {students.map(student => (
                        <tr key={student.Id}>
                            <td>{student.Id}</td>
                            <td>{student.Name}</td>
                            <td>{student.Age}</td>
                            <td>{student.Address}</td>
                        </tr>
                    ))}
            </table>
        </div>
    )
}
export default Student;