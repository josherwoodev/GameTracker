import {Button, Card, CardActions, CardContent, CardHeader, Typography} from "@mui/material";
import {gameDescriptionBuilder, titleToRegularCase} from "../service.js";

export default function GameCard(props) {
    const {game} = props;

    return (<Card>
        <CardContent>
            <Typography variant="h4">{titleToRegularCase(game.name)}</Typography>
            {gameDescriptionBuilder.build(game).split("\n").map((line, index) => (
                <div key={index}>{line}</div>
            ))}
        </CardContent>
        <CardActions sx={{ flexDirection: 'row', justifyContent: 'end'}}>
            <Button color="info" variant="outlined" sx={{ mx: 3 }}>Edit</Button>
            <Button color="error" variant="outlined" sx={{ mx: 3 }}>Delete</Button>
        </CardActions>
    </Card>);
}