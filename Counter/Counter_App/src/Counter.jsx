import React, {useState} from 'react';

function Counter() {

    const [count, SetCount] = useState(0);

    return (
        <div>
            <p>Count:</p>
            <button onClick={increaseCount}>Increace</button>
        </div>
    );
}

export default Counter;