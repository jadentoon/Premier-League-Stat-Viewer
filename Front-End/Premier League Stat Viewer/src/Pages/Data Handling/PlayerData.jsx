import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../../Components/Navbar/Navbar';


const PlayerData = () => {
    const [playerData, setPlayerData] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
         const params = new URLSearchParams(window.location.search);
        const squadData = params.get('squad');
        const nationData = params.get('nation');
        const posData = params.get('pos');

        if(squadData){
            axios.get(`http://localhost:8081/api/v1/players?squad=${encodeURIComponent(squadData)}`)
            .then(response => {
                setPlayerData(response.data)
            })
            .catch(error => {
                setError(error);
            })
        } else if (nationData){
            axios.get(`http://localhost:8081/api/v1/players?nation=${encodeURIComponent(nationData)}`)
            .then(response => {
                console.log("Data: " ,response.data)
                setPlayerData(response.data)
            })
            .catch(error => {
                setError(error)
            })
        } else if (posData){
            axios.get(`http://localhost:8081/api/v1/players?pos=${encodeURIComponent(posData)}`)
            .then(response => {
                setPlayerData(response.data)
            })
            .catch(error => {
                setError(error)
            })
        } 
    }, []);

    if (error) return <div>Error: {error.message}</div>;
    if (playerData.length === 0) return <div>Loading...</div>;

    return (

        <div>
            <Navbar />
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Nation</th>
                        <th>Position</th>
                        <th>Squad</th>
                        <th>Age</th>
                        <th>Born</th>
                        <th>Matches Played</th>
                        <th>Starts</th>
                        <th>Minutes Played</th>
                        <th>90s Played</th>
                        <th>Goals</th>
                    </tr>
                    {playerData.map(player => (
                        <tr key={player.id}>
                            <th>{player.player}</th>
                            <th>{player.nation}</th>
                            <th>{player.pos}</th>
                            <th>{player.squad}</th>
                            <th>{player.age}</th>
                            <th>{player.born}</th>
                            <th>{player.matches_played}</th>
                            <th>{player.starts}</th>
                            <th>{player.min}</th>
                            <th>{player.nineties_played}</th>
                            <th>{player.goals}</th>
                        </tr>
                    ))}
                </table>

        </div>
        </div>
    )
}

export default PlayerData
