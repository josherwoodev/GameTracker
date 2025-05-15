import {AppBar, Container, Grid, Toolbar, Tooltip} from "@mui/material";
import ModalOpener from "./ModalOpener.jsx";
import GameForm from "./GameForm.jsx";
import {useNavigate} from "react-router-dom";
import {createGame} from "../service.js";

export default function NavBar() {
    const navigate = useNavigate();

    async function renavigatePage(game) {
        await createGame(game);
        navigate("");
    }

    return (
        <AppBar position="sticky" color="primary">
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <ModalOpener textOptions={{rootBtn: "New Game", title: "Add A New Game To Track", tooltip: "Track A New Game"}} submitHandler={renavigatePage}><GameForm game={null}/></ModalOpener>
                    {/*<ModalOpener textOptions={{rootBtn: "Pick Game", title: "Modal Title", tooltip: "Pick A Game To Play", desc: "Modal Description"}}><GameForm game={null}/></ModalOpener>*/}
                </Toolbar>
            </Container>
        </AppBar>
    );
}