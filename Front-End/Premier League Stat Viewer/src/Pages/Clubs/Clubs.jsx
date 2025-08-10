import { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Searchbar from '../../Components/Searchbar/Searchbar';
import clubs from "../../data/clubs.json";
import { Link } from 'react-router';
import "./Clubs.css";

function Clubs() {
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredClubs, setFilteredClubs] = useState([]);

    useEffect(() => {
        const filtered = clubs.filter(club =>
            club.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredClubs(filtered);
    }, [searchQuery])

    return (
        <div className='relative min-h-screen bg-gradient-to-b from-purple-100 via-white to-purple-50 overflow-hidden'>
            <Navbar />
            <div className='z-10 min-h-screen px-4 py-20'>
                <main className='max-w-7xl mx-auto space-y-8'>
                    <header className='text-center fade-in'>
                        <h1 className='text-4xl md:text-5xl font-extrabold mt-4 text-purple-900'>
                            Explore Clubs
                        </h1>
                        <p className='text-gray-600 mt-3'>
                            Browse through all available clubs
                        </p>
                    </header>

                    <div className='flex justify-center'>
                        <Searchbar onSearch={setSearchQuery} />
                    </div>
                    {
                        filteredClubs.length === 0 ? (
                            <p className='text-center text-gray-500 text-lg mt-10'>
                                No clubs found for {" "}
                                <span className='text-purple-700 font-semibold'>
                                    "{searchQuery}"
                                </span>
                            </p>
                        )
                            :
                            (
                                <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 fade-in delay-400'>
                                    {filteredClubs.map(club => (
                                        <Link 
                                            key={club.name}
                                            to={`/data?squad=${encodeURIComponent(club.db_name)}&display=${encodeURIComponent(club.name)}`}
                                        >
                                            <article
                                                className='bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer'>
                                                <div className='relative h-64 flex items-center justify-center bg-gradient-to-tr from-purple-50 to-gray-100'>
                                                    <img
                                                        src={club.badge}
                                                        alt={club.name}
                                                        className='w-32 h-32 object-contain drop-shadow-md'
                                                    />
                                                </div>
                                                <div className='p-5'>
                                                    <p className="text-center text-lg font-semibold text-purple-800">{club.name}</p>
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
export default Clubs