import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import DeleteModal from './components/DeleteModal'
import AddModal from './components/AddModal'


// Some very simple tests, should be more

configure({adapter: new Adapter()});

const wrapper = shallow(<App />);

describe('App', () => {
  it('is defined', () => {
    expect(App).toBeDefined();
  });
  it('renders correctly', () => {
    const tree = shallow(
        <App name='App test' />
    );
    expect(tree).toMatchSnapshot();
  });
  it('has DeleteModal defined', () => {

    expect(wrapper.find(DeleteModal)).toBeDefined();
  });
  it('has AddModal defined', () => {

    expect(wrapper.find(AddModal)).toBeDefined();
  });
});