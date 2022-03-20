import renderer from 'react-test-renderer';
import { QuestionCard } from '../';
it('renders correctly', () => {
    const currentQuestion = 1;
    const nextQuestion = 1;
    const cb = jest.fn();
    const tree = renderer
        .create(
            <QuestionCard
                currentQuestion={currentQuestion}
                nextQuestion={nextQuestion}
                totalScore={cb}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
