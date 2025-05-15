import {fetchGames} from "../service.js";
import GameCard from "./GameCard.jsx";
import {useEffect} from "react";

export default function Display() {
    const games = fetchGames();

    useEffect(() => {
        console.log(games);
    }, [games]);

    return (<div>
        {/*{games?.map((game, index) => (<GameCard game={game} key={index}/>))}*/}
        </div>);
}