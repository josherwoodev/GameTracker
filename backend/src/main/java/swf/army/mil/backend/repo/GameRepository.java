package swf.army.mil.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import swf.army.mil.backend.entity.Game;

import java.util.Optional;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {

    Optional<Game> findByIdAndIsLiveTrue(Long id);
}
