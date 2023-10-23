import {useIncrement} from "./Counter";

export const Counter1 = ()=>{
    const [count1,setCount1] =useIncrement(1);
    const handleIncrement = ()=>{
        setCount1(1);
    }
    return (
        <>
            <p>{count1}</p>
            <button onClick={handleIncrement}>Add 1</button>
        </>
    )
}