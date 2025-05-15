package swf.army.mil.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class PlayerRange {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer minPlayers = null, maxPlayers = null;
    private Boolean isMultiplayer = null;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getMinPlayers() {
        return minPlayers;
    }

    public void setMinPlayers(Integer minPlayers) {
        this.minPlayers = minPlayers;
    }

    public Integer getMaxPlayers() {
        return maxPlayers;
    }

    public void setMaxPlayers(Integer maxPlayers) {
        this.maxPlayers = maxPlayers;
    }

    public Boolean getMultiplayer() {
        return isMultiplayer;
    }

    public void setMultiplayer(Boolean multiplayer) {
        isMultiplayer = multiplayer;
    }
}
