import React, { useState } from 'react';
import './ReactCounter.css';


const ReactCounter = () => {


 const [count, setCount] = useState<number>(0)
    return (
       
        <div>
            <h1 className='counter-header'>React Counter</h1>
            <h2 className='counter-value'>{count}</h2>
            <button className='counter-increment' onClick={() => setCount(count+1)}>+</button>
            <button className='counter-decrement' onClick={() => setCount(count-1)}>-</button>
            <button className='counter-reset' onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default ReactCounter;