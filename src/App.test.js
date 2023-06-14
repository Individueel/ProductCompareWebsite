import App from './App';
import { Provider } from 'react-redux';

test('renders learn react link', () => {
  <Provider>
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  </Provider>
});
