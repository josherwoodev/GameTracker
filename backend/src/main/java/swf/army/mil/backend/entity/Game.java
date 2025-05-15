package swf.army.mil.backend.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name = null;
    @Enumerated(EnumType.STRING)
    private TYPES type = null;
    private Float rating = null;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "player_range_id")
    private PlayerRange playerRange = null;
    private Boolean isLive = true;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public TYPES getType() {
        return type;
    }

    public void setType(TYPES type) {
        this.type = type;
    }

    public Float getRating() {
        return rating;
    }

    public void setRating(Float rating) {
        this.rating = rating;
    }

    public PlayerRange getPlayerRange() {
        return playerRange;
    }

    public void setPlayerRange(PlayerRange playerRange) {
        this.playerRange = playerRange;
    }

    public Boolean getLive() {
        return isLive;
    }

    public void setLive(Boolean live) {
        isLive = live;
    }

    public enum TYPES {
        BOARD, CARD, MOBILE, VIDEO
    }
}
