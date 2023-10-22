const facilities = [
    {
        id: 1,
        name: "GARDEN SUPERIOR",
        area: 40,
        cost: 2000000,
        capacity: 2,
        type: "ngày",
        image: "https://khachsandanang.info/wp-content/uploads/2015/03/48-1.jpg"
    },
    {
        id: 2,
        name: "OCEAN SUPERIOR",
        area: 50,
        cost: 3000000,
        capacity: 2,
        type: "ngày",
        image: "https://khachsandanang.info/wp-content/uploads/2015/03/48-1.jpg"
    },
    {
        id: 3,
        name: "GARDEN SUPERIOR",
        area: 40,
        cost: 2000000,
        capacity: 2,
        type: "ngày",
        image: "https://khachsandanang.info/wp-content/uploads/2015/03/48-1.jpg"
    },
    {
        id: 4,
        name: "GARDEN SUPERIOR",
        area: 40,
        cost: 2000000,
        capacity: 2,
        type: "ngày",
        image: "https://khachsandanang.info/wp-content/uploads/2015/03/48-1.jpg"
    }
]
export function getAll(){
    return facilities;
}
export function create(facility){
    return facilities.push(facility);
}

