import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from './Navbar';

const MockNavbar = () => (
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
);

test('renders correctly', () => {
  const tree = renderer
    .create(<MockNavbar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
