import { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Searchbar from '../../Components/Searchbar/Searchbar';
import nations from "../../data/nations.json";
import { ReactCountryFlag } from "react-country-flag";
import { Link } from "react-router-dom";
import './Nationality.css';

const Nationality = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredNations, setFilteredNations] = useState([])

    useEffect(() => {
        const filtered = nations.filter(nation =>
            nation.nationName.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredNations(filtered)
    }, [searchQuery])

    return (
        <div className='relative min-h-screen bg-gradient-to-b from-purple-100 via-white to-purple-50 overflow-hidden'>
            <Navbar />
            <div className='z-10 min-h-screen px-4 py-20'>
                <main className='max-w-7xl mx-auto space-y-8'>
                    <header className='text-center fade-in'>
                        <h1 className='text-4xl md:text-5xl font-extrabold mt-4 text-purple-900'>
                            Explore Nations
                        </h1>
                        <p className='text-gray-600 mt-3'>
                            Browse through all available nations
                        </p>
                    </header>

                    <div className='flex justify-center'>
                        <Searchbar 
                            onSearch={setSearchQuery} 
                            location='nation' 
                        />
                    </div>

                    {
                        filteredNations.length === 0 ?
                            <p className='text-center text-gray-500 text-lg mt-10'>
                                No nations found for {" "}
                                <span className='text-purple-700 font-semibold'>
                                    "{searchQuery}"
                                </span>
                            </p>
                            :
                            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 fade-in delay-400">
                                {filteredNations.map(nation => (
                                    <Link
                                        key={nation.nationCode2}
                                        to={`/data?nation=${encodeURIComponent(nation.nationCode3)}`}
                                    >
                                        <article
                                            className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center py-6 px-4 cursor-pointer"
                                        >
                                            <div className='relative h-64 flex items-center justify-center bg-gradient-to-tr from-purple-50 to-gray-100 w-full'>
                                                <ReactCountryFlag
                                                    countryCode={nation.nationCode2}
                                                    svg
                                                    style={{
                                                        width: '160px',
                                                        height: 'auto',
                                                        maxHeight: '200px',
                                                        border: '2px solid gray',
                                                        borderRadius: '8px'
                                                    }}
                                                    title={nation.nationName}
                                                />
                                            </div>
                                            <p className="mt-4 text-center text-lg font-semibold text-purple-800">
                                                {nation.nationName}
                                            </p>
                                        </article>
                                    </Link>
                                ))}
                            </section>
                    }
                </main>
            </div>
        </div>
    );
};

export default Nationality;
