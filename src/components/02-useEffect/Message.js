import React, { useEffect, useState } from 'react';

export const Message = () => {
   //extraremos las coordenadas para imprimirlas en el html
   const [coords, setCoords] = useState({ x: 0, y: 0 });
   const { x, y } = coords;

   // Efecto al introducir 123 en el input name
   useEffect(() => {
      const mouseMove = (e) => {
         const coords = { x: e.x, y: e.y };
         setCoords(coords);
      };
      window.addEventListener('mousemove', mouseMove);
      return () => {
         //   si es diferente de 123
         window.removeEventListener('mousemove', mouseMove);
      };
   }, []);

   return (
      <>
         <h3>Hola soy Jeral</h3>
         <p>
            x: {x} y: {y}
         </p>
      </>
   );
};
