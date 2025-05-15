import {AppBar, Container, Grid, Toolbar, Tooltip} from "@mui/material";
import ModalOpener from "./ModalOpener.jsx";
import GameForm from "./GameForm.jsx";

export default function NavBar() {

    return (
        <AppBar position="sticky" color="primary">
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <ModalOpener textOptions={{rootBtn: "New Game", title: "Track A New Game", tooltip: "Add A New Game To Track", desc: "Modal Description"}}><GameForm game={null}/></ModalOpener>
                    <ModalOpener textOptions={{rootBtn: "Pick Game", title: "Modal Title", tooltip: "Pick A Game To Play", desc: "Modal Description"}}><GameForm game={null}/></ModalOpener>
                </Toolbar>
            </Container>
        </AppBar>
    );
}