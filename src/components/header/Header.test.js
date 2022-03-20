import renderer from 'react-test-renderer';
import { Header } from '../';

it('renders correctly', () => {
    const cb = jest.fn();
    const tree = renderer.create(<Header handleChangeMode={cb} />).toJSON();
    expect(tree).toMatchSnapshot();
});
