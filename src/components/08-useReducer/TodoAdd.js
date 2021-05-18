import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {
   const [{ description }, handleInputChange, reset] = useForm({
      description: '',
   });

   const handleSubmit = (e) => {
      e.preventDefault();

      //   Validar que no venga vacio para que no agregue nada
      if (description.trim().length <= 1) {
         return;
      }

      //   Nueva tarea
      const newTodo = {
         id: new Date().getTime(),
         desc: description,
         done: false,
      };

      handleAddTodo(newTodo);
      reset(); //limpiamos el formulario
   };

   return (
      <>
         <h4>Agregar Todo</h4>
         <hr />

         <form onSubmit={handleSubmit}>
            <input className='form-control' type='text' name='description' placeholder='Aprender...' autoComplete='off' value={description} onChange={handleInputChange} />

            <button type='submit' className='btn btn-outline-success mt-1 btn-block'>
               Agregar
            </button>
         </form>
      </>
   );
};
