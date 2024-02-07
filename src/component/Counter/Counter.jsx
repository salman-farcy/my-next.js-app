
"use client";

import { useState } from "react";

const Counter = () => {
     const [counter, setCounter] = useState(1)
     return (
          <div>
               <h2>Counter: {counter} </h2>
               <button onClick={() => setCounter(counter + 1)} className='btn bg-red-500 p-3'>Incrige</button>
               <button onClick={() => setCounter(counter - 1)} className='btn bg-red-800 p-3'>Dicrige</button>
          </div>
     );
};

export default Counter;