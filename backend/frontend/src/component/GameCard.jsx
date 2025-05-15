import {Card, CardActions, CardContent, Typography} from "@mui/material";
import {deleteGame, gameDescriptionBuilder, titleToRegularCase} from "../service.js";
import ModalOpener from "./ModalOpener.jsx";
import GameForm from "./GameForm.jsx";

export default function GameCard(props) {
    const {game, refreshList} = props;
    const editModalTexts = {title: `Edit ${limitedTitle(game.name)}`, rootBtn: "Edit"};
    const delModalTexts = {title: `Delete ${limitedTitle(game.name)}`, desc: `Are you sure you want to remove ${limitedTitle(game.name)}`, rootBtn: "Delete"};

    function limitedTitle(title) {
        return title.length < 20 ? titleToRegularCase(title) : titleToRegularCase(title.slice(0, 20) + "...");
    }

    const sendPatch = (formData) => {
        const updates = [game.keys.map((key) => game[key] === formData[key] ? null : {}[key] = formData[key])].reduce((data, keyVal) => (data[keyVal.key()] = keyVal.value(), data), {});
        console.log(formData, updates);
    }

    const sendDelete = async () => {
        await deleteGame(game.id);
        refreshList();
    }

    return (<Card>
        <CardContent>
            <Typography variant="h4">{titleToRegularCase(game.name)}</Typography>
            {gameDescriptionBuilder.build(game).split("\n").map((line, index) => (<div key={index}>{line}</div>))}
        </CardContent>
        <CardActions sx={{flexDirection: 'row', justifyContent: 'end'}}>
            <ModalOpener textOptions={editModalTexts} color="info" submitHandler={sendPatch}><GameForm game={game}/></ModalOpener>
            <ModalOpener textOptions={delModalTexts} color="error" submitHandler={sendDelete}/>
        </CardActions>
    </Card>);
}