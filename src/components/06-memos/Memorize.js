import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

import '../01-useState/counter.css';

export const Memorize = () => {
   const { counter, increment } = useCounter(10);

   //    Caso donde no debe de llamarse
   const [show, setShow] = useState(true);

   return (
      <div>
         <h1>
            Counter: <Small value={counter} />
         </h1>
         <hr />

         <button onClick={increment} className='btn btn-secondary'>
            +1
         </button>

         <button
            onClick={() => {
               setShow(!show);
            }}
            className='btn btn-outline-primary ml-2'
         >
            Show/Hide {JSON.stringify(show)}
         </button>
      </div>
   );
};
