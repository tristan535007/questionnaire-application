import renderer from 'react-test-renderer';
import { Layout } from '../';
import { Home } from '../../pages';

it('renders correctly', () => {
    const tree = renderer
        .create(
            <Layout>
                <Home />
            </Layout>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
