import { shallow } from 'enzyme';
import { TodoItem } from '../../../components/08-useReducer/TodoItem';
import { demoTodos } from '../../fixtures/demoTodos';

// TodoListItem
describe('Pruebas en <TodoItem/>', () => {
   const handleDelete = jest.fn();
   const handleToggle = jest.fn();

   const wrapper = shallow(<TodoItem todo={demoTodos[0]} handleDelete={handleDelete} handleToggle={handleToggle} i={0} />);

   test('debe de mostrarse correctamente', () => {
      //    snapshot
      expect(wrapper).toMatchSnapshot();
   });

   test('debe llamar la función handleDelete', () => {
      wrapper.find('button').simulate('click');

      expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
   });

   test('debe llamar la función handleToggle', () => {
      wrapper.find('p').simulate('click');

      expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
   });

   test('debe mostrar el texto del párrafo correctamente', () => {
      const p = wrapper.find('p');

      expect(p.text().trim()).toBe(`1. ${demoTodos[0].desc}`);
   });

   test('el párrafo debe de tener la clase (complete) si el TODO.done = true', () => {
      const todo = demoTodos[0];
      todo.done = true;

      const wrapper = shallow(<TodoItem todo={todo} i={0} />);

      //   expect(wrapper.find('p').hasClass('.complete')).toBe(true);
      const classComplete = wrapper.find('.complete').exists();

      expect(classComplete).toBe(demoTodos[0].done);
   });
});
