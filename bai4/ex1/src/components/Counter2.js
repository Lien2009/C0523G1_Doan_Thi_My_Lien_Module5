import {useIncrement} from "./Counter";

export const Counter2 = ()=>{
    const [count2,setCount2] =useIncrement(2);
    const handleIncrement = ()=>{
        setCount2(2);
    }
    return (
        <>
            <p>{count2}</p>
            <button onClick={handleIncrement}>Add 2</button>
        </>
    )
}