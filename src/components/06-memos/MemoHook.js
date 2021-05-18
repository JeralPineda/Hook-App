import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';

import '../01-useState/counter.css';

export const MemoHook = () => {
   const { counter, increment } = useCounter(10);

   //    Caso donde no debe de llamarse
   const [show, setShow] = useState(true);

   const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

   return (
      <div>
         <h1>MomoHook</h1>
         <h3>
            Counter: <small>{counter}</small>
         </h3>
         <hr />

         <p>{memoProcesoPesado}</p>

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
