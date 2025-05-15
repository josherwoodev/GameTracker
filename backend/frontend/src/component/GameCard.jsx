import {Button, Card, CardActions, CardContent, CardHeader} from "@mui/material";
import {gameDescriptionBuilder, titleToRegularCase} from "../service.js";

export default function GameCard(props) {
    const {game} = props;

    return (<Card>
        <CardHeader>{titleToRegularCase(game.name)}</CardHeader>
        <CardContent>{gameDescriptionBuilder.build(game)}</CardContent>
        <CardActions>
            {/*<Button*/}
        </CardActions>
    </Card>);
}