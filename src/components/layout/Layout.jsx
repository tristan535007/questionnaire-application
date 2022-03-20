import React, { useState, useMemo } from 'react';
import { Container, Paper } from '@mui/material';
import { Header } from '../header/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export const Layout = ({ children }) => {
    const [mode, setMode] = useState(
        () => localStorage.getItem('mode') || 'light'
    );

    const handleChangeMode = useMemo(() => {
        localStorage.setItem('mode', mode);
        return {
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === 'light' ? 'dark' : 'light'
                );
            },
        };
    }, [mode]);

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode]
    );

    return (
        <ColorModeContext.Provider value={handleChangeMode}>
            <ThemeProvider theme={theme}>
                <Container
                    sx={{
                        backgroundColor:
                            mode === 'light' ? '#F9FAFC' : '#0B0F19',
                    }}
                    maxWidth={false}
                >
                    <Header handleChangeMode={handleChangeMode} />
                    <Paper>{children}</Paper>
                </Container>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};
