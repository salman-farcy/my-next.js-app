"use client";

import { useState } from "react";

const Counter = () => {
     const [counter, setCounter] = useState(1)
     return (
          <div>
               <h2>Counter: {counter} </h2>

               <div className="">
                    <button className="btn btn-success" onClick={() => setCounter(counter + 1)} >Incrige</button>
                    <button className="btn btn-success" onClick={() => setCounter(counter - 1)} >Dicrige</button>
               </div>
          </div>
     );
};

export default Counter