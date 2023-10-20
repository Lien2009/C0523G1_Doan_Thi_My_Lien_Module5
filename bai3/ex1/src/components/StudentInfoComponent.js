const students = [
    {
        id: 1,
        name: 'Mỹ Hạnh',
        age: 20,
        address: 'Quảng Nam'
    },
    {
        id: 2,
        name: 'Trần Chánh',
        age: 30,
        address: 'Đà Nẵng'
    },
    {
        id: 3,
        name: 'Đoàn Liên',
        age: 27,
        address: 'Đà Nẵng'
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
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                        </tr>
                    ))}
            </table>
        </div>
    )
}
export default Student;