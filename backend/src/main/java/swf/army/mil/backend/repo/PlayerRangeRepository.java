package swf.army.mil.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import swf.army.mil.backend.entity.PlayerRange;

@Repository
public interface PlayerRangeRepository extends JpaRepository<PlayerRange, Long> {
}
