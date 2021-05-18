import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import './layout.css';

export const Layout = () => {
   // useCounter para cambiar el id de la api incrmentando el valor con el contador
   const { counter, increment } = useCounter(1);

   const { data } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);

   const { quote } = !!data && data[0]; //Si existe la data se muestra

   //    Mantener la referencia al párrafo
   const pTag = useRef();

   //    Mostrar el tamanio de la caja del parrafo
   const [boxSize, setBoxSize] = useState();

   //    Determinar el tamaño de la caja de texto son useLayoutEffect
   useLayoutEffect(() => {
      setBoxSize(pTag.current.getBoundingClientRect());
   }, [quote]);

   return (
      <div>
         <h1>useLayoutEffect</h1>
         <hr />

         <blockquote className='blockquote text-right'>
            <p ref={pTag} className='mb-0'>
               {quote}
            </p>
         </blockquote>

         <pre>{JSON.stringify(boxSize, null, 3)}</pre>

         <button onClick={increment} className='btn btn-secondary'>
            Siguiente frase
         </button>
      </div>
   );
};
