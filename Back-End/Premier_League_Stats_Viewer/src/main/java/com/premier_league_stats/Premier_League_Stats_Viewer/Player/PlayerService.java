package com.premier_league_stats.Premier_League_Stats_Viewer.Player;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class PlayerService {
    private final PlayerRepository playerRepository;

    @Autowired
    public PlayerService(PlayerRepository playerRepository){
        this.playerRepository = playerRepository;
    }

    public List<Player> getPlayers(){
        return playerRepository.findAll();
    }

    public List<Player> getPlayersBySquad(String squadName){
        return playerRepository.findAll()
                .stream()
                .filter(player -> squadName.equals(player.getSquad()))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersByPlayerName(String searchTerm){
        return playerRepository.findAll()
                .stream()
                .filter(player -> (player.getPlayer().toLowerCase()).contains(searchTerm.toLowerCase()))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersByPlayerNation(String nationName){
        return playerRepository.findAll()
                .stream()
                .filter(player -> nationName.equals(player.getNation()))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersByPosition(String position){
        return playerRepository.findAll()
                .stream()
                .filter(player -> (player.getPos().toLowerCase()).contains(position.toLowerCase()))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersByPositionAndSquad(String squad, String position){
        return playerRepository.findAll()
                .stream()
                .filter(player -> squad.equals(player.getSquad()) && position.equals(player.getPos()))
                .collect(Collectors.toList());
    }
}
