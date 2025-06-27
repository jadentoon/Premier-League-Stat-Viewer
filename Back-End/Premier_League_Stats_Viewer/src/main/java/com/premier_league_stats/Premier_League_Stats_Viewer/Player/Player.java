package com.premier_league_stats.Premier_League_Stats_Viewer.Player;

import jakarta.persistence.*;

@Entity
@Table(name="players")
public class Player {
    @Id
    @Column(name="id", unique = true)
    private Integer id;
    private String player;
    private String nation;
    private String pos;
    private String squad;
    private Integer age;
    private Integer born;
    private Double matches_played;
    private Integer starts;
    private Integer min;
    private Double nineties_played;
    private Integer goals;
    private Integer assists;
    private Integer goals_and_assists;
    private Integer non_penalty_goals;
    private Integer penalty_goals;
    private Integer penalty_kicks_attempted;
    private Integer yellow_cards;
    private Integer red_cards;
    private Double expected_goals;
    private Double non_penalty_xg;
    private Double assisted_xg;
    private Double npxg_xag;
    private Double progressive_carries;
    private Double progressive_passes;
    private Double progressive_passes_rec;

    public Player(Integer id, String player, String nation, String pos, String squad, Integer age, Integer born, Double matches_played, Integer starts, Integer min, Double nineties_played, Integer goals, Integer assists, Integer goals_and_assists, Integer non_penalty_goals, Integer penalty_goals, Integer penalty_kicks_attempted, Integer yellow_cards, Integer red_cards, Double expected_goals, Double non_penalty_xg, Double assisted_xg, Double npxg_xag, Double progressive_carries, Double progressive_passes, Double progressive_passes_rec) {
        this.id = id;
        this.player = player;
        this.nation = nation;
        this.pos = pos;
        this.squad = squad;
        this.age = age;
        this.born = born;
        this.matches_played = matches_played;
        this.starts = starts;
        this.min = min;
        this.nineties_played = nineties_played;
        this.goals = goals;
        this.assists = assists;
        this.goals_and_assists = goals_and_assists;
        this.non_penalty_goals = non_penalty_goals;
        this.penalty_goals = penalty_goals;
        this.penalty_kicks_attempted = penalty_kicks_attempted;
        this.yellow_cards = yellow_cards;
        this.red_cards = red_cards;
        this.expected_goals = expected_goals;
        this.non_penalty_xg = non_penalty_xg;
        this.assisted_xg = assisted_xg;
        this.npxg_xag = npxg_xag;
        this.progressive_carries = progressive_carries;
        this.progressive_passes = progressive_passes;
        this.progressive_passes_rec = progressive_passes_rec;
    }

    public Player() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPlayer() {
        return player;
    }

    public void setPlayer(String player) {
        this.player = player;
    }

    public String getNation() {
        return nation;
    }

    public void setNation(String nation) {
        this.nation = nation;
    }

    public String getPos() {
        return pos;
    }

    public void setPos(String pos) {
        this.pos = pos;
    }

    public String getSquad() {
        return squad;
    }

    public void setSquad(String squad) {
        this.squad = squad;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Integer getBorn() {
        return born;
    }

    public void setBorn(Integer born) {
        this.born = born;
    }

    public Double getMatches_played() {
        return matches_played;
    }

    public void setMatches_played(Double matches_played) {
        this.matches_played = matches_played;
    }

    public Integer getStarts() {
        return starts;
    }

    public void setStarts(Integer starts) {
        this.starts = starts;
    }

    public Integer getMin() {
        return min;
    }

    public void setMin(Integer min) {
        this.min = min;
    }

    public Double getNineties_played() {
        return nineties_played;
    }

    public void setNineties_played(Double nineties_played) {
        this.nineties_played = nineties_played;
    }

    public Integer getGoals() {
        return goals;
    }

    public void setGoals(Integer goals) {
        this.goals = goals;
    }

    public Integer getAssists() {
        return assists;
    }

    public void setAssists(Integer assists) {
        this.assists = assists;
    }

    public Integer getGoals_and_assists() {
        return goals_and_assists;
    }

    public void setGoals_and_assists(Integer goals_and_assists) {
        this.goals_and_assists = goals_and_assists;
    }

    public Integer getNon_penalty_goals() {
        return non_penalty_goals;
    }

    public void setNon_penalty_goals(Integer non_penalty_goals) {
        this.non_penalty_goals = non_penalty_goals;
    }

    public Integer getPenalty_goals() {
        return penalty_goals;
    }

    public void setPenalty_goals(Integer penalty_goals) {
        this.penalty_goals = penalty_goals;
    }

    public Integer getPenalty_kicks_attempted() {
        return penalty_kicks_attempted;
    }

    public void setPenalty_kicks_attempted(Integer penalty_kicks_attempted) {
        this.penalty_kicks_attempted = penalty_kicks_attempted;
    }

    public Integer getYellow_cards() {
        return yellow_cards;
    }

    public void setYellow_cards(Integer yellow_cards) {
        this.yellow_cards = yellow_cards;
    }

    public Integer getRed_cards() {
        return red_cards;
    }

    public void setRed_cards(Integer red_cards) {
        this.red_cards = red_cards;
    }

    public Double getExpected_goals() {
        return expected_goals;
    }

    public void setExpected_goals(Double expected_goals) {
        this.expected_goals = expected_goals;
    }

    public Double getNon_penalty_xg() {
        return non_penalty_xg;
    }

    public void setNon_penalty_xg(Double non_penalty_xg) {
        this.non_penalty_xg = non_penalty_xg;
    }

    public Double getAssisted_xg() {
        return assisted_xg;
    }

    public void setAssisted_xg(Double assisted_xg) {
        this.assisted_xg = assisted_xg;
    }

    public Double getNpxg_xag() {
        return npxg_xag;
    }

    public void setNpxg_xag(Double npxg_xag) {
        this.npxg_xag = npxg_xag;
    }

    public Double getProgressive_carries() {
        return progressive_carries;
    }

    public void setProgressive_carries(Double progressive_carries) {
        this.progressive_carries = progressive_carries;
    }

    public Double getProgressive_passes() {
        return progressive_passes;
    }

    public void setProgressive_passes(Double progressive_passes) {
        this.progressive_passes = progressive_passes;
    }

    public Double getProgressive_passes_rec() {
        return progressive_passes_rec;
    }

    public void setProgressive_passes_rec(Double progressive_passes_rec) {
        this.progressive_passes_rec = progressive_passes_rec;
    }

    @Override
    public String toString() {
        return "Player{" +
                "id=" + id +
                ", player='" + player + '\'' +
                ", nation='" + nation + '\'' +
                ", pos='" + pos + '\'' +
                ", squad='" + squad + '\'' +
                ", age=" + age +
                ", born=" + born +
                ", matches_played=" + matches_played +
                ", starts=" + starts +
                ", min=" + min +
                ", nineties_played=" + nineties_played +
                ", goals=" + goals +
                ", assists=" + assists +
                ", goals_and_assists=" + goals_and_assists +
                ", non_penalty_goals=" + non_penalty_goals +
                ", penalty_goals=" + penalty_goals +
                ", penalty_kicks_attempted=" + penalty_kicks_attempted +
                ", yellow_cards=" + yellow_cards +
                ", red_cards=" + red_cards +
                ", expected_goals=" + expected_goals +
                ", non_penalty_xg=" + non_penalty_xg +
                ", assisted_xg=" + assisted_xg +
                ", npxg_xag=" + npxg_xag +
                ", progressive_carries=" + progressive_carries +
                ", progressive_passes=" + progressive_passes +
                ", progressive_passes_rec=" + progressive_passes_rec +
                '}';
    }
}


