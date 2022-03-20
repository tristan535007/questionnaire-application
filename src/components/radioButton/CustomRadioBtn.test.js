import renderer from 'react-test-renderer';
import { CustomRadioBtn } from '../';
import { questions } from '../../mockData';
it('renders correctly', () => {
    const cb = jest.fn();
    const value = 'to the Moon!';
    const tree = renderer
        .create(
            <CustomRadioBtn
                variants={questions[0].answerOptions}
                chosenValue={value}
                handleRadioChange={cb}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
