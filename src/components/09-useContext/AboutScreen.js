import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const AboutScreen = () => {
   const { user, setUser } = useContext(UserContext);

   const handleClick = () => {
      //    Limpiamos la información del usuario
      setUser({});
   };

   return (
      <div>
         <h1>AboutScreen</h1>
         <hr />

         <pre>{JSON.stringify(user, null, 3)}</pre>

         <button onClick={handleClick} className='btn btn-warning m-3'>
            Logout
         </button>
      </div>
   );
};
