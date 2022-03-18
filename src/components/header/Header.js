import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';

export const Header = ({ handleChangeMode }) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                height: 70,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
            }}
            mb={2}
        >
            <Box>
                <Typography mx={2}>Welcome!</Typography>
            </Box>
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'background.default',
                        color: 'text.primary',
                        borderRadius: 1,
                        p: 1,
                    }}
                >
                    {theme.palette.mode} mode
                    <IconButton
                        sx={{ ml: 1 }}
                        onClick={handleChangeMode.toggleColorMode}
                        color="inherit"
                    >
                        {theme.palette.mode === 'dark' ? (
                            <Brightness7Icon />
                        ) : (
                            <Brightness4Icon />
                        )}
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};
