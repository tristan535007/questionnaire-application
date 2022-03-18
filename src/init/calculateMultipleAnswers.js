export const calculateMultipleAnswers = (quiz, userOptions) => {
    const filteredQuiz = [];

    const amountCorrectAnswers = quiz.reduce((previousValue, currentValue) => {
        return currentValue?.isCorrect ? previousValue + 1 : previousValue;
    }, 0);

    for (const value of userOptions) {
        filteredQuiz.push(
            quiz[quiz.findIndex((el) => el.answerText === value)]
        );
    }

    const userCorrectAnswers = filteredQuiz.reduce(
        (previousValue, currentValue) => {
            return currentValue?.isCorrect ? previousValue + 1 : previousValue;
        },
        0
    );

    return amountCorrectAnswers === userCorrectAnswers ? 1 : 0;
};
