import { Box } from '@mui/material';

export const MainContentBox = ({ children }) => {
    return (
        <Box
            sx={{
                height: 'calc(100vh - 86px)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {children}
        </Box>
    );
};
