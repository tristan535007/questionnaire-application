import {
    MainContentBox,
    QuestionCard,
    FinalResultCard,
} from '../../components';
import { useCallback, useState } from 'react';
import { questions } from '../../mockData';

export const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const totalScore = useCallback((value = 0) => {
        setScore((prevState) => prevState + value);
    }, []);

    const nextQuestion = useCallback(() => {
        setCurrentQuestion((prevState) => prevState + 1);
    }, []);

    return (
        <MainContentBox>
            {questions.length > currentQuestion ? (
                <QuestionCard
                    currentQuestion={currentQuestion}
                    nextQuestion={nextQuestion}
                    totalScore={totalScore}
                />
            ) : (
                <FinalResultCard score={score} />
            )}
        </MainContentBox>
    );
};
