import {ThemeProvider} from "@emotion/react";
import {Theme} from "./component/ui/Theme.jsx";
import {Container} from "@mui/material";
import GameForm from "./component/GameForm.jsx";
import {Outlet} from "react-router-dom";

export default function Layout() {
    const STYLE = {
        backgroundColor: "#444f", borderRadius: 4, marginTop: 3, paddingY: 1
    };

    return (<ThemeProvider theme={Theme}>
        <div style={{width: '100vw', height: '100vh'}}>
            <Container maxWidth="lg" sx={STYLE}>
                <GameForm/>
            </Container>
            <Container maxWidth="xl" sx={STYLE}>
                <Outlet/>
            </Container>
        </div>
    </ThemeProvider>);
}