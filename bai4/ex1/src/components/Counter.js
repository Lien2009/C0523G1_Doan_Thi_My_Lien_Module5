import {useState} from 'react'

export const useIncrement = (step) => {
    const [count, setCount] = useState(0);
    const changeCount = () => {
        setCount(pre => pre + step);
    };
    return [count, changeCount];
}


