import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import Navbar from '../../Components/Navbar/Navbar';


const PlayerData = () => {
    const [playerData, setPlayerData] = useState([]);
    const [param, setParam] = useState('');
    const [displayParam, setDisplayParam] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [visibleCount, setVisibleCount] = useState(10);

    const fetchData = useCallback(async (queryParam, value) => {
        setParam(value);
        setLoading(true);
        try {
            const response = await axios.get(
                `http://localhost:8081/api/v1/players?${queryParam}=${encodeURIComponent(value)}`
            );
            setPlayerData(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setTimeout(() => {
                setLoading(false);
            },1000);
        }
    }, []);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setDisplayParam(params.get('display'));
        const paramMap = ['name', 'squad', 'nation', 'pos'];
        for (const key of paramMap) {
            const value = params.get(key);
            if (value) {
                fetchData(key, value);
                break;
            }
        }
    }, [fetchData]);

    const showMore = () => {
        setVisibleCount(prev => prev + 10);
    }

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
                            <>Showing stats for: <span className='font-semibold text-purple-700'>"{displayParam}"</span></>
                        ) : (
                            "Loading player data..."
                        )}
                    </p>
                </header>
                {
                    error ? <div className='text-center text-red-600 text-lg mt-4'>Error: {error.message}</div> :
                        loading ? <div className='text-center text-gray-500 text-lg animate-pulse mt-4'>Loading...</div> :
                            playerData.length === 0 ? <div className='text-center text-gray-500 text-lg mt-4'>No results available.</div> :
                                <>
                                    <div className='overflow-x-auto bg-white shadow-lg rounded-2xl mt-4 border border-purple-100'>
                                        <table className='min-w-1/2 table-auto border-collapse p-5 fade-in delay-700'>
                                            <thead className='bg-purple-300 text-purple-900 uppercase text-sm'>
                                                <tr>
                                                    {["Name", "Nation", "Position", "Squad", "Age", "Born", "Matches", "Starts", "Minutes", "90s", "Gls",
                                                        "Ast", "G+A", "Non-Pen Gls", "Pen Gls", "Pen Kicks", "Yellows", "Reds"
                                                    ].map(field => (
                                                        <th className='px-2 py-2 text-left'>{field}</th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {playerData.slice(0, visibleCount).map((player, index) => (
                                                    <tr
                                                        key={player.id}
                                                        className={`border-b h-25 ${index % 2 === 0 ? 'bg-white' : 'bg-purple-50'} hover:bg-yellow-100`}>
                                                        {[player.player, player.nation, player.pos, player.squad, player.age, player.born,
                                                        player.matches_played, player.starts, player.min, player.nineties_played.toFixed(2), player.goals,
                                                        player.assists, player.goals_and_assists, player.non_penalty_goals,
                                                        player.penalty_goals, player.penalty_kicks_attempted, player.yellow_cards, player.red_cards
                                                        ].map(field => (
                                                            <td className='px-2 py-2'>{field}</td>
                                                        ))}

                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                    </div>
                                    {visibleCount < playerData.length && (
                                        <div className='text-center mt-4'>
                                            <button
                                                onClick={showMore}
                                                className='bg-gradient-to-r from-purple-500 to-purple-700 shadow-lg hover:scale-105 hover:shadow-2xl 
                                        text-white py-2 px-4 rounded-full cursor-pointer transition-all duration-300 fade-in delay-1000'>
                                                Show More
                                            </button>
                                        </div>
                                    )}
                                </>
                }
            </div>
        </div>
    )
}

export default PlayerData
