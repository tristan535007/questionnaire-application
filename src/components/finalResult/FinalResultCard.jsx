import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from '@mui/material';
import { useHistory } from 'react-router-dom';

export const FinalResultCard = ({ score }) => {
    const theme = useTheme();
    const history = useHistory();

    const handleClick = () => {
        history.push('/home');
    };

    return (
        <Card
            sx={{
                width: '75%',
                height: '80%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
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
                    Congratulations you have passed the quiz!
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography my={3} variant="h6">
                        {`Your correct ${
                            score === 1 ? 'answer' : 'answers'
                        }: ` + score}
                    </Typography>
                </Box>
                <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Button onClick={handleClick}>Home</Button>
                </CardActions>
            </CardContent>
        </Card>
    );
};
