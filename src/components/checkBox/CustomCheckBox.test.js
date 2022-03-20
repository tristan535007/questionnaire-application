import renderer from 'react-test-renderer';
import { CustomCheckBox } from '../';
import { questions } from '../../mockData';

const checked = ['string', 'bool'];

it('renders correctly', () => {
    const cb = jest.fn();
    const tree = renderer
        .create(
            <CustomCheckBox
                options={questions[2].answerOptions}
                checked={checked}
                handleCheckBox={cb}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
