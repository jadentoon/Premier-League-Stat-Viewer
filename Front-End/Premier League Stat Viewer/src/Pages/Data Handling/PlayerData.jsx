import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../../Components/Navbar/Navbar';


const PlayerData = () => {
    const [playerData, setPlayerData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const playerData = params.get('name');
        const squadData = params.get('squad');
        const nationData = params.get('nation');
        const posData = params.get('pos');

        if (playerData) {
            axios.get(`http://localhost:8081/api/v1/players?name=${encodeURIComponent(playerData)}`)
                .then(response => {
                    setPlayerData(response.data)
                })
                .catch(error => {
                    setError(error);
                })
        } else if (squadData) {
            axios.get(`http://localhost:8081/api/v1/players?squad=${encodeURIComponent(squadData)}`)
                .then(response => {
                    setPlayerData(response.data)
                })
                .catch(error => {
                    setError(error);
                })
        } else if (nationData) {
            axios.get(`http://localhost:8081/api/v1/players?nation=${encodeURIComponent(nationData)}`)
                .then(response => {
                    console.log("Data: ", response.data)
                    setPlayerData(response.data)
                })
                .catch(error => {
                    setError(error)
                })
        } else if (posData) {
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
        <div className='min-h-screen bg-gray-50'>
            <Navbar />
            <div className='flex justify-center items-center z-0 px-4 py-25'>
                <div className='overflow-x-auto bg-white shadow-lg rounded-xl'>
                    <table className='min-w-1/2 table-auto border-collapse '>
                        <thead className='bg-gray-200 text-gray-700 uppercase text-sm'>
                            <tr>
                                <th className='px-2 py-2 text-left'>Name</th>
                                <th className='px-2 py-2 text-left'>Nation</th>
                                <th className='px-2 py-2 text-left'>Position</th>
                                <th className='px-2 py-2 text-left'>Squad</th>
                                <th className='px-2 py-2 text-left'>Age</th>
                                <th className='px-2 py-2 text-left'>Born</th>
                                <th className='px-2 py-2 text-left'>Matches Played</th>
                                <th className='px-2 py-2 text-left'>Starts</th>
                                <th className='px-2 py-2 text-left'>Minutes Played</th>
                                <th className='px-2 py-2 text-left'>90s Played</th>
                                <th className='px-2 py-2 text-left'>Goals</th>
                                <th className='px-2 py-2 text-left'>Assists</th>
                                <th className='px-2 py-2 text-left'>Goals & Assists</th>
                                <th className='px-2 py-2 text-left'>Non Penalty Goals</th>
                                <th className='px-2 py-2 text-left'>Penalty Goals</th>
                                <th className='px-2 py-2 text-left'>Penalty Kicks Attempted</th>
                                <th className='px-2 py-2 text-left'>Yellow Cards</th>
                                <th className='px-2 py-2 text-left'>Red Cards</th>

                            </tr>
                        </thead>
                        <tbody>
                            {playerData.map((player,index) => (
                                <tr 
                                key={player.id}
                                className={`border-b h-25 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}>
                                    <td className='px-2 py-2'>{player.player}</td>
                                    <td className='px-2 py-2'>{player.nation}</td>
                                    <td className='px-2 py-2'>{player.pos}</td>
                                    <td className='px-2 py-2'>{player.squad}</td>
                                    <td className='px-2 py-2'>{player.age}</td>
                                    <td className='px-2 py-2'>{player.born}</td>
                                    <td className='px-2 py-2'>{player.matches_played}</td>
                                    <td className='px-2 py-2'>{player.starts}</td>
                                    <td className='px-2 py-2'>{player.min}</td>
                                    <td className='px-2 py-2'>{player.nineties_played.toFixed(2)}</td>
                                    <td className='px-2 py-2'>{player.goals}</td>
                                    <td className='px-2 py-2'>{player.assists}</td>
                                    <td className='px-2 py-2'>{player.goals_and_assists}</td>
                                    <td className='px-2 py-2'>{player.non_penalty_goals}</td>
                                    <td className='px-2 py-2'>{player.penalty_goals}</td>
                                    <td className='px-2 py-2'>{player.penalty_kicks_attempted}</td>
                                    <td className='px-2 py-2'>{player.yellow_cards}</td>
                                    <td className='px-2 py-2'>{player.red_cards}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PlayerData
