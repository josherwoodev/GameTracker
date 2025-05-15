import {ThemeProvider} from "@emotion/react";
import {Theme} from "./component/ui/Theme.jsx";
import {Container} from "@mui/material";
import {Outlet} from "react-router-dom";
import NavBar from "./component/NavBar.jsx";

export default function Layout() {
    const STYLE = {
        backgroundColor: "#eee2", borderRadius: 4, marginTop: 3, paddingY: 1
    };

    return (<ThemeProvider theme={Theme}>
        <div style={{width: '100vw', height: '100vh'}}>
            <NavBar/>
            <Container maxWidth="xl" sx={STYLE}>
                <Outlet/>
            </Container>
        </div>
    </ThemeProvider>);
}