package swf.army.mil.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import swf.army.mil.backend.dto.GameDTO;
import swf.army.mil.backend.entity.Game;
import swf.army.mil.backend.service.GameService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000")
public class GameController {

    private final GameService gameService;

    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @GetMapping(value = {"/games", "/games/"})
    public List<GameDTO> getGames() {
        return gameService.getAll().stream().map(GameDTO::fromGame).collect(Collectors.toList());
    }

    @GetMapping(value = {"/game/{id:\\d+}", "/game/{id:\\d+}/"})
    public GameDTO getGame(@PathVariable Long id) {
        return GameDTO.fromGame(gameService.getById(id));
    }

    @PostMapping(value = {"/game", "/game/"})
    public GameDTO createGame(@RequestBody Game game) {
        return GameDTO.fromGame(gameService.addGame(game));
    }

    @PatchMapping(value = {"/game", "/game/"})
    public GameDTO updateGame(@RequestBody Game game) {
        return GameDTO.fromGame(gameService.updateGame(game));
    }

    @DeleteMapping(value = {"/game/{id:\\d+}", "/game/{id:\\d+}/"})
    public void deleteGame(@PathVariable Long id) {
        gameService.deleteGame(id);
    }
}
