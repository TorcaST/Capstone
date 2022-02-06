import { render, screen } from '@testing-library/react';
import App from './App';

test('False test', async () => {
  render(<App />);
  expect('BTC Price');

  const component = (
      <App />
  );

  const { findByText, findAllByText } = render(component);
  const header = await findByText('Lates prices from coindesk');
});
