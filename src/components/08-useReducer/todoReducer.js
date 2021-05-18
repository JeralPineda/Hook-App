export const todoReducer = (state = [], action) => {
   // Generalmente se trabaja con switch
   switch (action.type) {
      case 'add':
         return [...state, action.payload];

      case 'delete':
         return state.filter((todo) => todo.id !== action.payload); //122666464

      case 'toggle':
         return state.map((todo) => (todo.id === action.payload ? { ...todo, done: !todo.done } : todo));

      case 'toggle-old':
         return state.map((todo) => {
            if (todo.id === action.payload) {
               return {
                  ...todo,
                  done: !todo.done, //done: true
               };
            } else {
               return todo;
            }
         });

      default:
         return state;
   }
};
