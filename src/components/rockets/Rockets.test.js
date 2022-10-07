import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Rockets from './Rockets';
import store from '../../redux/configureStore';
import App from '../../App';

// getting rockets snapshots
const MockRockets = () => (
  <Provider store={store}>
    <Rockets />
  </Provider>
);

test('renders correctly', () => {
  const tree = renderer.create(<MockRockets />).toJSON();
  expect(tree).toMatchSnapshot();
});

// testing rockets link from the app section
const MockApp = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

describe('when you click the rockets link', () => {
  test('should render rockets page content', () => {
    render(
      (<MockApp />),
    );
    userEvent.click(screen.getByRole('link', { name: /rockets/i }));
    expect(screen.getByText(/rockets/i)).toBeInTheDocument();
  });
});
