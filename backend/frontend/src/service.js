import axios from "axios";

export async function fetchGames() {
    return await axios.get('http://localhost:8080/api/games');
}

export async function fetchGame(id) {
    return await axios.get(`http://localhost:8080/api/game/${id}`);
}

export async function createGame(game) {
    return await axios.post('http://localhost:8080/api/game', game);
}

export async function updateGame(game) {
    return await axios.patch(`http://localhost:8080/api/game/${game.id}`, game);
}

export async function deleteGame(id) {
    return await axios.delete(`http://localhost:8080/api/game/${id}`);
}

export function toRegularCase(text) {
    return text.slice(0, 1).toUpperCase() + text.slice(1).toLowerCase();
}

export function titleToRegularCase(name) {
    return name.split(" ").forEach(word => toRegularCase(word)).join(" ")
}

export const gameDescriptionBuilder = {

    build: function (game) {
        return `${toRegularCase(game.type)} Game\nRating: ${game.rating}\n${game.playerRange.multiplayer ? `From ${game.playerRange.minPlayers} To ${game.playerRange.maxPlayers}` : 'Single Player'}`;
    }
}