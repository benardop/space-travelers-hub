import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Missions from '../Missions';
import store from '../../../redux/configureStore';
import App from '../../../App';

// missions snapshots
const MockMissions = () => (
  <Provider store={store}>
    <Missions />
  </Provider>
);

it('matches snapshot', () => {
  const tree = renderer.create(
    <MockMissions />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

// test missions link from the app section
const MockApp = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

describe('when you click the missions link', () => {
  it('should render missions page content', () => {
    render(
      (<MockApp />),
    );
    userEvent.click(screen.getByRole('link', { name: /missions/i }));
    expect(screen.getByText(/description/i)).toBeInTheDocument();
  });
});
