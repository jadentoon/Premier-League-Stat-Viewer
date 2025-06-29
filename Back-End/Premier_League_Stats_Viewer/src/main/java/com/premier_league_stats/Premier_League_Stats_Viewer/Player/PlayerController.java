package com.premier_league_stats.Premier_League_Stats_Viewer.Player;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/players")
public class PlayerController {
    private final PlayerService playerService;

    @Autowired
    public PlayerController(PlayerService playerService){
        this.playerService = playerService;
    }

    @GetMapping
    public List<Player> getPlayers(
            @RequestParam(required = false) String squad,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String nation,
            @RequestParam(required = false) String pos,
            @RequestParam(required = false) Integer goals
            ){
        if (squad != null && pos != null){
            return playerService.getPlayersByPositionAndSquad(squad, pos);
        } else if (squad != null){
            return playerService.getPlayersBySquad(squad);
        } else if (name != null){
            return playerService.getPlayersByPlayerName(name);
        } else if (nation != null){
            return playerService.getPlayersByPlayerNation(nation);
        } else if (pos != null){
            return playerService.getPlayersByPosition(pos);
        } else if (goals != null){
            return playerService.getPlayersByGoals(goals);
        }
        return playerService.getPlayers();
    }

    @PostMapping
    public ResponseEntity<Player> setPlayer(@RequestBody Player player){
        Player createdPlayer = playerService.addPlayer(player);
        return new ResponseEntity<>(createdPlayer, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Player> updatePlayer(@RequestBody Player player){
        Player updatedPlayer = playerService.updatePlayer(player);
        return updatedPlayer != null ? new ResponseEntity<>(updatedPlayer, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{playerName}")
    public ResponseEntity<String> deletePlayer(@PathVariable String playerName){
        playerService.deletePlayer(playerName);
        return new ResponseEntity<>("Player deleted Successfully", HttpStatus.OK);
    }
}
