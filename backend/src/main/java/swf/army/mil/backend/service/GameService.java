package swf.army.mil.backend.service;

import org.springframework.stereotype.Service;
import swf.army.mil.backend.entity.Game;
import swf.army.mil.backend.constant.NoResourceFoundException;
import swf.army.mil.backend.repo.GameRepository;

import java.util.List;
import java.util.Objects;

@Service
public class GameService {

    private final GameRepository gameRepository;

    public GameService(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    public List<Game> getAll() {
        return gameRepository.findAll();
    }

    public Game getById(Long id) {
        return gameRepository.findById(id).orElseThrow(NoResourceFoundException::new);
    }

    public Game addGame(Game game) {
        if (Objects.nonNull(game.getId()) && gameRepository.existsById(game.getId())) throw new NoResourceFoundException();
        game.setLive(true);
        return gameRepository.save(game);
    }

    public Game updateGame(Game updated) {
        var current = gameRepository.findByIdAndIsLiveTrue(updated.getId()).orElseThrow(NoResourceFoundException::new);
        if (updated.getName() != null) current.setName(updated.getName());
        if (updated.getType() != null) current.setType(updated.getType());
        if (updated.getRating() != null) current.setRating(updated.getRating());
        if (updated.getPlayerRange() != null)
            current.setPlayerRange(updated.getPlayerRange());
        return gameRepository.save(current);
    }

    public void deleteGame(Long id) {
        var target = gameRepository.findByIdAndIsLiveTrue(id).orElseThrow(NoResourceFoundException::new);
        target.setLive(false);
        gameRepository.save(target);
    }
}
