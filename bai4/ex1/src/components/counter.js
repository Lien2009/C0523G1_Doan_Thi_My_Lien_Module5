import { useState} from 'react'
export default Increment;
function Increment(){

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    const useIncrement = () =>{
        setCount(count + 1)
    }
    const useIncrementTwo = () =>{
        setCount2(count2 + 2)
    }

    return (
        <div className="App">
            <h1>Count: {count}</h1>
            <button onClick={useIncrement}>Add 1</button>
            <h1>Count: {count2}</h1>
            <button onClick={useIncrementTwo}>Add 2</button>
        </div>
    );
}
