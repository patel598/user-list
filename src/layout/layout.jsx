
import { useEffect, useState } from "react";
import HeaderSection from "../components/header";
import Dashboard from "../pages/dashboard";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";


// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const Layout = () => {

    const [dark, setDark] = useState(true);

    // useEffect(() => {
    //     if (dark) {
    //         document.documentElement.classList.add("dark")
    //     } else {
    //         document.documentElement.classList.remove("dark")
    //     }

    // }, [dark])
    const theme = createTheme({
        palette: {
            mode: dark ? 'dark' : 'light',
        },
        shape: {
            borderRadius: 16, // matches Tailwind's rounded-2xl (approx)
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box component={"main"} >
                <HeaderSection {...{ setDark, dark }} />
                <Box component={"section"} className="p-4 pr-6 " style={{ minHeight: `calc(100vh - 38px)` }}  >
                    <Dashboard />
                </Box>
            </Box>
        </ThemeProvider>
    );
};



export default Layout