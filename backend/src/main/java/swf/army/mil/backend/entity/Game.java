package swf.army.mil.backend.entity;

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

    private String name;
    @Enumerated(EnumType.STRING)
    private TYPES type;
    private Float rating, hrsPlayed;
    private Integer timesPlayed, timesWon;
    @OneToOne
    @JoinColumn(name = "player_range_id")
    private PlayerRange playerRange;

    public enum TYPES {
        BOARD, CARD, MOBILE, VIDEO
    }
}
