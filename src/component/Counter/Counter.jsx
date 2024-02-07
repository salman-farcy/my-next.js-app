
"use client";

import { useState } from "react";

const Counter = () => {
     const [counter, setCounter] = useState(1)
     return (
          <div>
               <h2>Counter: {counter} </h2>

               <div className="bg-green-600">
                    <button className=" text-green-600 " onClick={() => setCounter(counter + 1)} >Incrige</button>
                    <button className=" text-green-600 " onClick={() => setCounter(counter - 1)} >Dicrige</button>
               </div>
          </div>
     );
};

export default Counter;