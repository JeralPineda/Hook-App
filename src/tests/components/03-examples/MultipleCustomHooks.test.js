import React from 'react';
import { shallow } from 'enzyme';

import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch'); //Simulación del useFetch
jest.mock('../../../hooks/useCounter'); //Simulación del useFetch

describe('Pruebas en <MultipleCustomHooks />', () => {
   beforeEach(() => {
      useCounter.mockReturnValue({
         counter: 10,
         increment: () => {},
      });
   });

   test('debe de mostrarse correctamente', () => {
      useFetch.mockReturnValue({
         data: null,
         loading: true,
         error: null,
      });

      const wrapper = shallow(<MultipleCustomHooks />);

      expect(wrapper).toMatchSnapshot();
   });

   test('should debe de mostrar la información', () => {
      useFetch.mockReturnValue({
         data: [
            {
               author: 'Jeral',
               quote: 'Hola Mundo',
            },
         ],
         loading: false,
         error: null,
      });
      const wrapper = shallow(<MultipleCustomHooks />);

      expect(wrapper.find('.alert').exists()).toBe(false);
      expect(wrapper.find('.mb-0').text().trim()).toBe('Hola Mundo');
      expect(wrapper.find('footer').text().trim()).toBe(`Jeral`);

      //   console.log(wrapper.html());
   });
});
