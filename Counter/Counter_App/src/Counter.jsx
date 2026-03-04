import React, {useState} from 'react';

function Counter() {

    const [count, SetCount] = useState(0);

    const increaseCount = () => {
        SetCount(c => c + 1);
    }

    return (
        <div>
            <p>Count:{count}</p>
            <button onClick={() => increaseCount}>Increace</button>
        </div>
    );
}

export default Counter;