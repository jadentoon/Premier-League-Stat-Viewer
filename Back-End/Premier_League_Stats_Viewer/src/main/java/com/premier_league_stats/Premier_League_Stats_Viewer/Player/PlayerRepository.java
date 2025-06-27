package com.premier_league_stats.Premier_League_Stats_Viewer.Player;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PlayerRepository extends JpaRepository<Player, String> {
    void deleteByName(String playerName);
    Optional<Player> findByName(String name);
}
