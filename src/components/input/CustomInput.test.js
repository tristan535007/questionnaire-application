import renderer from 'react-test-renderer';
import { CustomInput } from '../';

it('renders correctly', () => {
    const tree = renderer.create(<CustomInput />).toJSON();
    expect(tree).toMatchSnapshot();
});
