import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { MainContentBox } from '../../components';

export const Home = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/quiz');
    };

    return (
        <MainContentBox>
            <Box
                sx={{
                    minWidth: '30%',
                    height: '30%',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}
            >
                <Typography my={1} textAlign="center">
                    If you want start press the button.
                </Typography>
                <Button onClick={handleClick} variant="outlined">
                    Let's start a quiz!
                </Button>
            </Box>
        </MainContentBox>
    );
};
