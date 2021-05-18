import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterWhithCustomHook = () => {
   const { state, increment, decrement, reset } = useCounter(100);
   return (
      <>
         <h1>Counter with Hook: {state}</h1>
         <hr />

         <button onClick={() => increment(2)} className='btn btn-primary mr-1'>
            +1
         </button>
         <button onClick={reset} className='btn btn-success mr-1'>
            Reset
         </button>
         <button onClick={() => decrement(2)} className='btn btn-danger'>
            -1
         </button>
      </>
   );
};
