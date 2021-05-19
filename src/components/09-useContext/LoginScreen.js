import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
   const { setUser } = useContext(UserContext);

   const usuario = {
      id: 123,
      name: 'Jeral',
   };

   return (
      <div>
         <h1>LoginScreen</h1>
         <hr />

         <button onClick={() => setUser(usuario)} className='btn btn-primary m-3'>
            Login
         </button>
      </div>
   );
};
