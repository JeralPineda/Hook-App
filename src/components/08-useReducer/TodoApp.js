import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './styles.css';

// const initialState = [
//    {
//       id: new Date().getTime(),
//       desc: 'Aprender React',
//       done: false,
//    },
// ];

const init = () => {
   //    return [
   //       {
   //          id: new Date().getTime(),
   //          desc: 'Aprender React',
   //          done: false,
   //       },
   //    ];

   // leemos la info del localStorage
   return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
   const [todos, dispatch] = useReducer(todoReducer, [], init);

   //    Guardamos los todos en el localStorage
   useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
   }, [todos]);

   //    borrar todos
   const handleDelete = (todoId) => {
      // Crear la action para borrar
      const action = {
         type: 'delete',
         payload: todoId,
      };

      // Dispatch
      dispatch(action);
   };

   //    Marcar todos como completados
   const handleToggle = (todoId) => {
      dispatch({
         type: 'toggle',
         payload: todoId,
      });
   };

   //    Funcion que se encarga de agregar un todo
   const handleAddTodo = (newTodo) => {
      dispatch({
         type: 'add',
         payload: newTodo,
      });
   };

   return (
      <div>
         <h1>TodoApp ({todos.length})</h1>
         <hr />

         <div className='row'>
            <div className='col-7'>
               <TodoList todos={todos} handleToggle={handleToggle} handleDelete={handleDelete} />
            </div>

            <div className='col-5'>
               <TodoAdd handleAddTodo={handleAddTodo} />
            </div>
         </div>
      </div>
   );
};
