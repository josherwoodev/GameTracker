import {fetchGames} from "../service.js";
import GameCard from "./GameCard.jsx";
import {useEffect, useState} from "react";
import {Grid} from "@mui/material";

export default function Display() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetchGames().then((games) => setGames(games)).catch((err) => console.error(err));
    }, []);

    return (<Grid container spacing={3} sx={{justifyContent: 'space-between'}}>
        {games?.map((game, index) => (<Grid key={index} size={{xs: 12, sm: 6, md: 4, lg: 3}}>
            <GameCard game={game}/></Grid>))}
    </Grid>);
}