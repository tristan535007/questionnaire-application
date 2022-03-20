import { useCallback, useMemo, useState } from 'react';
import {
    Card,
    CardContent,
    Typography,
    Button,
    CardActions,
    Box,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { questions } from '../../mockData';
import { CHECKBOX, RADIOBUTTON, TEXT } from '../../constants/inputType';
import { CustomInput, CustomRadioBtn, CustomCheckBox } from '../';
import { calculateMultipleAnswers } from '../../init/calculateMultipleAnswers';

export const QuestionCard = ({ currentQuestion, nextQuestion, totalScore }) => {
    const [value, setValue] = useState('');
    const [checked, setChecked] = useState([]);
    const onChange = useCallback((event) => {
        setValue(event.target.value);
    }, []);

    const setCheckedOptions = useCallback((options) => {
        setChecked(options);
    }, []);

    const onClick = () => {
        if (value) {
            const result = questions[currentQuestion].answerOptions.find(
                (variant) => variant.answerText === value
            );
            result?.isCorrect && totalScore(1);
        }
        if (checked.length) {
            totalScore(
                calculateMultipleAnswers(
                    questions[currentQuestion].answerOptions,
                    checked
                )
            );
        }
        nextQuestion();
        setValue('');
        setChecked([]);
    };

    const getTypeComponent = useMemo(() => {
        switch (questions[currentQuestion].type) {
            case TEXT:
                return <CustomInput handleInputChange={onChange} />;
            case RADIOBUTTON:
                return (
                    <CustomRadioBtn
                        variants={questions[currentQuestion].answerOptions}
                        chosenValue={value}
                        handleRadioChange={onChange}
                    />
                );
            case CHECKBOX:
                return (
                    <CustomCheckBox
                        options={questions[currentQuestion].answerOptions}
                        handleCheckBox={setCheckedOptions}
                        checked={checked}
                    />
                );
            default:
                return null;
        }
    }, [value, checked]);

    const theme = useTheme();

    return (
        <Card
            sx={{
                width: '75%',
                height: '80%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: theme.palette.mode === 'dark' ? '#0B0F19' : '',
            }}
        >
            <CardContent>
                <Typography
                    sx={{ borderBottom: '1px solid black' }}
                    gutterBottom
                    variant="h5"
                    p={1}
                >
                    Question №{currentQuestion + 1 || 1}:
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography my={3} variant="h6">
                        {questions[currentQuestion].questionText ||
                            'No question'}
                    </Typography>
                </Box>
                <Box my={3} p={2}>
                    {getTypeComponent}
                </Box>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
                <Button
                    disabled={!Boolean(value || checked.length)}
                    onClick={onClick}
                >
                    Next Question
                </Button>
            </CardActions>
        </Card>
    );
};
