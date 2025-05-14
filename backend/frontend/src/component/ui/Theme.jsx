import {createTheme} from "@mui/material";

export const Theme = createTheme({
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: "#334039ff"
                }
            }
        }
    },
    palette: {
        mode: "dark",
        primary: {
            main: "#adc"
        },
        secondary: {
            main: "#17d"
        },
        error: {
            main: "#f50"
        },
        warning: {
            main: "#ed1"
        },
        info: {
            main: "#0eb"
        },
        modalOpenerBtn: {
            main: "#ccd"
        },
        success: {
            main: "#b4d455ff",
            light: "#c3dc77ff",
            dark: "#793",
            contrastText: "#0009"
        },
    }
});