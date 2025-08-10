import { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Searchbar from '../../Components/Searchbar/Searchbar';
import positions from "../../data/positions.json";
import { Link } from "react-router-dom";
import "./Position.css";


const Position = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredPositions, setFilteredPositions] = useState([])

    useEffect(() => {
        const filtered = positions.filter(pos =>
            pos.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredPositions(filtered)
    }, [searchQuery])

    return (
        <div className='relative min-h-screen bg-gradient-to-b from-purple-100 via-white to-purple-50 overflow-hidden'>
            <Navbar />
            <div className='z-10 min-h-screen px-4 py-20'>
                <main className='max-w-7xl mx-auto space-y-8'>
                    <header className='text-center fade-in'>
                        <h1 className='text-4xl md:text-5xl font-extrabold mt-4 text-purple-900'>
                            Explore Positions
                        </h1>
                        <p className='text-gray-600 mt-3'>
                            Browse through all available Positions
                        </p>
                    </header>

                    <div className='flex justify-center'>
                        <Searchbar onSearch={setSearchQuery} />
                    </div>

                    {
                        filteredPositions.length === 0 ? (
                            <p className='text-center text-gray-500 text-lg mt-10'>
                                No positions found for {" "}
                                <span className='text-purple-700 font-semibold'>
                                    "{searchQuery}"
                                </span>
                            </p>
                        ) : (
                            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in delay-400">
                                {filteredPositions.map(pos => (
                                    <Link 
                                        key={pos.name}
                                        to={`/data?pos=${encodeURIComponent(pos.code)}&display=${encodeURIComponent(pos.name)}`}
                                    >
                                        <article
                                            className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
                                        >
                                            <img
                                                src={pos.image}
                                                alt={pos.name}
                                                className='w-full h-80 md:h-64 cursor-pointer object-cover hover:scale-105 transition-transform duration-300'
                                            />
                                            <div className='py-4'>
                                                <p className="text-center text-md font-semibold text-purple-800">{pos.name}</p>
                                            </div>
                                        </article>
                                    </Link>
                                ))}
                            </section>
                        )
                    }
                </main>
            </div>
        </div>
    )
}

export default Position
