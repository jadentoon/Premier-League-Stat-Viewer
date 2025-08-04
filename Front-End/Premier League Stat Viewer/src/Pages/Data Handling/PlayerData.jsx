import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../../Components/Navbar/Navbar';


const PlayerData = () => {
    const [playerData, setPlayerData] = useState([]);
    const [param, setParam] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const playerData = params.get('name');
        const squadData = params.get('squad');
        const nationData = params.get('nation');
        const posData = params.get('pos');

        const fetchData = async (queryParam, value) => {
            setParam(value);
            try {
                const response = await axios.get(
                    `http://localhost:8081/api/v1/players?${queryParam}=${encodeURIComponent(value)}`
                )
                setPlayerData(response.data);
            } catch (error) {
                setError(error);
            }
        };
        if (playerData) fetchData('name', playerData);
        else if (squadData) fetchData('squad', squadData);
        else if (nationData) fetchData('nation', nationData);
        else if (posData) fetchData('pos', posData);

    }, []);

    return (
        <div className='relative min-h-screen bg-gradient-to-b from-purple-100 via-white to-purple-50 overflow-hidden'>
            <Navbar />
            <div className='max-w-7xl mx-auto z-10 px-4 py-25'>
                <header className='text-center fade-in'>
                    <h1 className='text-4xl md:text-5xl font-extrabold mt-4 text-purple-900'>
                        Player Statistics
                    </h1>
                    <p className='text-gray-600 mt-3'>
                        {param ? (
                            <>Showing stats for: <span className='font-semibold text-purple-700'>"{param}"</span></>
                        ) : (
                            "Loading player data..."
                        )}
                    </p>
                </header>
                {
                    error ? <div className='text-center text-red-600 text-lg'>Error: {error.message}</div> :
                        playerData.length === 0 ? <div className='text-center text-gray-500 text-lg animate-pulse'>Loading...</div> :

                            <div className='overflow-x-auto bg-white shadow-lg rounded-2xl mt-4 border border-purple-100'>
                                <table className='min-w-1/2 table-auto border-collapse p-5 fade-in delay-1000'>
                                    <thead className='bg-purple-300 text-purple-900 uppercase text-sm'>
                                        <tr>
                                            <th className='px-2 py-2 text-left'>Name</th>
                                            <th className='px-2 py-2 text-left'>Nation</th>
                                            <th className='px-2 py-2 text-left'>Position</th>
                                            <th className='px-2 py-2 text-left'>Squad</th>
                                            <th className='px-2 py-2 text-left'>Age</th>
                                            <th className='px-2 py-2 text-left'>Born</th>
                                            <th className='px-2 py-2 text-left'>Matches</th>
                                            <th className='px-2 py-2 text-left'>Starts</th>
                                            <th className='px-2 py-2 text-left'>Minutes</th>
                                            <th className='px-2 py-2 text-left'>90s</th>
                                            <th className='px-2 py-2 text-left'>Gls</th>
                                            <th className='px-2 py-2 text-left'>Ast</th>
                                            <th className='px-2 py-2 text-left'>G+A</th>
                                            <th className='px-2 py-2 text-left'>Non-Pen Gls</th>
                                            <th className='px-2 py-2 text-left'>Pen Gls</th>
                                            <th className='px-2 py-2 text-left'>Pen Kicks</th>
                                            <th className='px-2 py-2 text-left'>Yellows</th>
                                            <th className='px-2 py-2 text-left'>Reds</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {playerData.map((player, index) => (
                                            <tr
                                                key={player.id}
                                                className={`border-b h-25 ${index % 2 === 0 ? 'bg-white' : 'bg-purple-50'} hover:bg-yellow-100`}>
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

                }
            </div>
        </div>
    )
}

export default PlayerData
