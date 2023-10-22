const customers = [
    {
        id:1,
        name: "Liên",
        dateOfBirth: "1996-09-20",
        gender: 1,
        identity: "012345678",
        phone: "0705995801",
        email: "mylien200996@gmail.com",
        type: "Diamond",
        address: "Đà Nẵng"
    },
    {
        id:2,
        name: "Hạnh",
        dateOfBirth: "1996-09-20",
        gender: 0,
        identity: "012345678",
        phone: "0705995801",
        email: "mylien200996@gmail.com",
        type: "Diamond",
        address: "Đà Nẵng"
    },
    {
        id:3,
        name: "Thiện",
        dateOfBirth: "1996-09-20",
        gender: 0,
        identity: "012345678",
        phone: "0705995801",
        email: "mylien200996@gmail.com",
        type: "Diamond",
        address: "Đà Nẵng"
    },
    {
        id:4,
        name: "Qúy",
        dateOfBirth: "1996-09-20",
        gender: 0,
        identity: "012345678",
        phone: "0705995801",
        email: "mylien200996@gmail.com",
        type: "Diamond",
        address: "Đà Nẵng"
    },
]
export function getAll(){
    return customers;
}
export function create(customer){
    return customers.push(customer);
}