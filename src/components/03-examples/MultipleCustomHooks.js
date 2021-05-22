import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../01-useState/counter.css';

export const MultipleCustomHooks = () => {
   // useCounter para cambiar el id de la api incrmentando el valor con el contador
   const { counter, increment } = useCounter(1);

   const { loading, data } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);

   //    Para la fecha en el footer
   //    const year = new Date();
   //    const insert = year.getFullYear();

   const { author, quote } = !!data && data[0]; //Si existe la data se muestra
   // !null = true
   // !!null = false

   //    console.log(author, quote);

   return (
      <div>
         <h1>BreakingBad Quotes</h1>
         <hr />

         {loading ? (
            <div className='alert alert-info text-center'>Loading...</div>
         ) : (
            <blockquote className='blockquote text-right'>
               <p className='mb-0'>{quote}</p>

               <footer className='blockquote-footer'>
                  {/* &copy;{author} {insert} */}
                  {author}
               </footer>
            </blockquote>
         )}

         <button onClick={increment} className='btn btn-secondary'>
            Siguiente frase
         </button>
      </div>
   );
};
