const contracts = [
    {
        id: 1,
        contractNumber: "HD-001",
        startDate: "2023-09-20",
        endDate: "2023-09-22",
        deposit: 1000000,
        cost: 2000000
    },
    {
        id: 2,
        contractNumber: "HD-001",
        startDate: "2023-09-20",
        endDate: "2023-09-22",
        deposit: 1000000,
        cost: 2000000
    },
    {
        id: 3,
        contractNumber: "HD-001",
        startDate: "2023-09-20",
        endDate: "2023-09-22",
        deposit: 1000000,
        cost: 2000000
    },
    {
        id: 4,
        contractNumber: "HD-001",
        startDate: "2023-09-20",
        endDate: "2023-09-22",
        deposit: 1000000,
        cost: 2000000
    }
]
export function getAll(){
    return contracts;
}
export  function create(contract){
    return contracts.push(contract);
}