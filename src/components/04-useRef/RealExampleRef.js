import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

import '../01-useState/counter.css';

export const RealExampleRef = () => {
   // Estado para ocultar y mostrar el multiplecustomhook
   const [show, setShow] = useState(false);

   return (
      <div>
         <h1>Real Example Ref</h1>
         <hr />

         {show && <MultipleCustomHooks />}

         <button
            onClick={() => {
               setShow(!show);
            }}
            className='btn btn-primary mt-5'
         >
            Show/Hide
         </button>
      </div>
   );
};
