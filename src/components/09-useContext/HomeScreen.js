import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomeScreen = () => {
   // Si yo quiero la informacion del usuario qu viene desde el context MainApp
   const { user } = useContext(UserContext);
   //    console.log(user);

   return (
      <div>
         <h1>HomeScreen</h1>
         <hr />

         <pre>{JSON.stringify(user, null, 3)}</pre>
      </div>
   );
};
