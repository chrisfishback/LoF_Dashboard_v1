package com.example.LoF_Dashboard.player;

import jakarta.persistence.*;

@Entity
@Table(name = "PLAYER")
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String summonerName;
    private String team;
    private String tagline;

    public Player(String summonerName, String team, String tagline) {
        this.summonerName = summonerName;
        this.team = team;
        this.tagline = tagline;
    }

    public Player() {
        this.summonerName = "summonerName";
        this.team = "team";
        this.tagline = "tagline";
    }

    public String getTagline() {
        return tagline;
    }

    public void setTagline(String tagline) {
        this.tagline = tagline;
    }

    public String getSummonerName() {
        return summonerName;
    }

    public void setSummonerName(String summonerName) {
        this.summonerName = summonerName;
    }

    public String getTeam() {
        return team;
    }

    public void setTeam(String team) {
        this.team = team;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
