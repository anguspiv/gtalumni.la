import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({
  adapter: new Adapter(),
});

// eslint-disable-next-line no-underscore-dangle
global.___loader = {
  enqueue: jest.fn(),
};
