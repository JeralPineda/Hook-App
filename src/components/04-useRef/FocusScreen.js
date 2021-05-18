import React, { useRef } from 'react';
import '../01-useState/counter.css';

export const FocusScreen = () => {
   const inputRef = useRef();
   console.log(inputRef);

   const handleClick = () => {
      //  Se ilumina el focu del input al darle click y tambien selecciona el texto
      //   document.querySelector('input').select();

      inputRef.current.select();
      console.log(inputRef);
   };

   return (
      <div>
         <h1>Focus Screen</h1>
         <hr />

         <input ref={inputRef} type='text' className='form-control' placeholder='Su nombre' />

         <button onClick={handleClick} className='btn btn-outline-primary mt-2'>
            Focus
         </button>
      </div>
   );
};
