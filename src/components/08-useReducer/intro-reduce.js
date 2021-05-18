// Estado inicial
const initialState = [
   {
      id: 1,
      todo: 'Comprar  pan',
      done: false,
   },
];

// Primer reducer
const todoReducer = (state = initialState, action) => {
   // Esta es la manera en la que podemos modificar el state
   if (action?.type === 'agregar') {
      //    Agregar el nuevo todo
      return [...state, action.payload];
   }

   //    Retornamos un nuevo estado
   return state;
};

let todos = todoReducer();

const newTodo = {
   id: 2,
   todo: 'Comprar  leche',
   done: false,
};

const agregarTodoAction = {
   type: 'agregar',
   payload: newTodo,
};

todos = todoReducer(todos, agregarTodoAction);

console.log(todos);
