package swf.army.mil.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import swf.army.mil.backend.entity.Game;

import java.util.List;
import java.util.Optional;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {

    Optional<Game> findByIdAndIsLive(Long id, Boolean isLive);

    List<Game> findAllByIsLive(Boolean b);
}
