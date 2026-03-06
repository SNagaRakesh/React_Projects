import React, {useState} from 'react';
import './Counter.css';


function Counter() {

    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(c => c + 1);
    }
    
    const decementCount = () => {
        setCount(c => c - 1);
    }

    const resetCount = () => {
        setCount(0);
    }

    return (
        <>
            <p className='count'>{count}</p>
            <button className='buttons' onClick={increaseCount}>+</button>
            <button className='buttons' onClick={resetCount}>0</button>
            <button className='buttons' onClick={decementCount}>-</button>
        </>
    );
}

export default Counter;