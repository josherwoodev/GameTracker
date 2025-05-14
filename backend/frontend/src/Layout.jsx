import {ThemeProvider} from "@emotion/react";
import {Theme} from "./component/ui/Theme.jsx";
import {Container, Grid, useMediaQuery, useTheme} from "@mui/material";
import {Outlet} from "react-router-dom";
import ModalOpener from "./component/ModalOpener.jsx";
import GameModal from "./component/GameModal.jsx";

export default function Layout() {
    const STYLE = {
        backgroundColor: "#eee2", borderRadius: 4, marginTop: 3, paddingY: 1
    };
    const theme = useTheme();
    const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (<ThemeProvider theme={Theme}>
        <div style={{width: '100vw', height: '100vh'}}>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid size='grow'></Grid>
                    <Grid size={2}>
                        <ModalOpener textOptions={{rootBtn: "Add New Game", title: "Add New Game", desc: "Modal Description"}}><div>New Game Text</div></ModalOpener>
                    </Grid>
                    <Grid size={2}>
                        <ModalOpener textOptions={{rootBtn: "ModalBtn", title: "Modal Title", desc: "Modal Description"}}><div>Modal TEST</div></ModalOpener>
                    </Grid>
                    <Grid size='grow'></Grid>
                </Grid>
            </Container>
            <Container maxWidth="xl" sx={STYLE}>
                <Outlet/>
            </Container>
        </div>
    </ThemeProvider>);
}