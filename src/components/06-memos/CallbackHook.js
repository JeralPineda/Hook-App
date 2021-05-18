import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../01-useState/counter.css';

export const CallbackHook = () => {
   // Dos formas de uso del Callback Hook
   //1. Enviar una función a un componente hijo
   //2. cuando hay un useEffect y el efecto tiene una dependencia y esa dependencia es la función

   const [counter, setcCounter] = useState(10);

   //    const increment = () => {
   //       setcCounter(counter + 1);
   //    };

   const increment = useCallback(
      (num) => {
         setcCounter((c) => c + num);
      },
      [setcCounter]
   );

   //2.
   //    useEffect(() => {
   //       //?
   //    }, [increment])

   return (
      <div>
         <h1>useCallback Hook: {counter}</h1>
         <hr />

         <ShowIncrement increment={increment} />
      </div>
   );
};
