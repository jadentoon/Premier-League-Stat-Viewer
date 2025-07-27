import { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Searchbar from '../../Components/Searchbar/Searchbar';
import positions from "../../data/positions.json";
import { Link } from "react-router-dom";


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
    <div>
      <Navbar />
      <div className='relative z-0 min-h-screen px-4 py-20 bg-gray-100'>
        <main className='max-w-7xl mx-auto space-y-8'>
            <header className='text-center'>
                <h1 className='text-4xl font-extrabold mt-4 text-gray-800'>Explore Positions</h1>
                <p className='text-gray-500 mt-3'>Browse through all available positions</p>
            </header>

            <div className='flex justify-center'>
                <Searchbar onSearch={setSearchQuery}/>
            </div>

            {
                filteredPositions.length === 0 ? (
                    <p className='text-center text-gray-500 text-lg mt-10'>
                        No positions found for "{searchQuery}"
                    </p>
                ) : (
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPositions.map(pos => (
                            <Link to={`/data?pos=${encodeURIComponent(pos.code)}`}>
                                <article 
                                    key={pos.name} 
                                    className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                                >
                                    <img 
                                        src={pos.image} 
                                        alt={pos.name} 
                                        className='w-full h-90 md:h-64 cursor-pointer object-cover' 
                                    />
                                    <div className='py-4'>
                                        <p className="text-center text-md font-semibold text-gray-800">{pos.name}</p>
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
