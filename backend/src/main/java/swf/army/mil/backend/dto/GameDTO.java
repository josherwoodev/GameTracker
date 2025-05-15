package swf.army.mil.backend.dto;

import swf.army.mil.backend.entity.Game;
import swf.army.mil.backend.entity.PlayerRange;

public record GameDTO(Long id, String name, Game.TYPES type, Float rating, PlayerRange playerRange) {

    public static GameDTO fromGame(Game game) {
        return new GameDTO(game.getId(), game.getName(), game.getType(), game.getRating(), game.getPlayerRange());
    }
}
