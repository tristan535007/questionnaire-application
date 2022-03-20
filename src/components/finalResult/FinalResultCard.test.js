import renderer from 'react-test-renderer';
import { FinalResultCard } from '../';
const score = 2;
it('renders correctly', () => {
    const tree = renderer.create(<FinalResultCard score={score} />).toJSON();
    expect(tree).toMatchSnapshot();
});
