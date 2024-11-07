import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import EventList from './EventList';

test('renders Add Event button', () => {
  render(
    <Provider store={store}>
      <EventList />
    </Provider>
  );
  expect(screen.getByText(/Agregar Evento/i)).toBeInTheDocument();
});
