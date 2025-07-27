import { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Searchbar from '../../Components/Searchbar/Searchbar';
import clubs from "../../data/clubs.json";
import { Link } from 'react-router';

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
        <div>
            <div>
                <Navbar />
                <div className='relative z-0 min-h-screen px-4 py-20 bg-gray-50'>
                    <main className='max-w-7xl mx-auto space-y-8'>
                        <header className='text-center'>
                            <h1 className='text-4xl font-extrabold mt-4 text-gray-800'>Explore Clubs</h1>
                            <p className='text-gray-500 mt-3'>Browse through all available clubs</p>
                        </header>

                        <div className='flex justify-center'>
                            <Searchbar onSearch={setSearchQuery} />
                        </div>
                        {
                            filteredClubs.length === 0 ? (
                                <p className='text-center text-gray-500 text-lgmt-10'>
                                    No clubs found for "{searchQuery}"
                                </p>
                            )
                                :
                                (
                                    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                                        {filteredClubs.map(club => (
                                            <Link to={`/data?squad=${encodeURIComponent(club.name)}`}>
                                                <article
                                                    key={club.name}
                                                    className='bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300'>
                                                    <div className='relative h-90 md:h-64 flex items-center justify-center bg-gray-100'>
                                                        <img
                                                            src={club.badge}
                                                            alt={club.name}
                                                            className='w-40 h-40 cursor-pointer object-fit' 
                                                        />
                                                    </div>
                                                    <div className='p-5'>
                                                        <p className="text-center text-md font-semibold text-gray-800">{club.name}</p>
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
        </div>
    )
}
export default Clubs