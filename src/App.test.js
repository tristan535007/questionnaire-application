import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import { Layout } from './components';
import { Home } from './pages';

describe('App header component', () => {
    test('renders header welcome', () => {
        render(<App />);
        const greeting = screen.getByText('Welcome!');
        expect(greeting).toBeInTheDocument();
    });
});

it('renders correctly', () => {
    const tree = renderer
        .create(
            <App>
                <Layout>
                    <Home />
                </Layout>
            </App>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
