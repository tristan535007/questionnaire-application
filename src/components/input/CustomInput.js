import { Box, TextField } from '@mui/material';

export const CustomInput = ({ handleInputChange }) => {
    return (
        <Box>
            <TextField
                id="outlined-basic"
                label="type the answer"
                variant="outlined"
                fullWidth
                onChange={handleInputChange}
                autoComplete="off"
            />
        </Box>
    );
};
