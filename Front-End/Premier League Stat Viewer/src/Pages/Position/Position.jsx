import { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Searchbar from '../../Components/Searchbar/Searchbar';
import positions from "../../data/positions.json";
import { Link } from "react-router-dom";


const Position = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredPositions, setFilteredPositions] = useState([])

  useEffect(() =>{
    const filtered = positions.filter(pos => 
      pos.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPositions(filtered)
  }, [searchQuery])

  return (
    <div>
      <Navbar />
      <div className='relative z-0 min-h-screen px-4 py-20 space-y-8 bg-gray-100'>
        <h1 className='text-3xl font-bold mb-4 py-5'>POSITIONS</h1>
        <Searchbar onSearch={setSearchQuery}/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPositions.map(pos => (
                <div key={pos.name} className="flex flex-col items-center">
                    <Link to={`/data?pos=${encodeURIComponent(pos.code)}`}>
                        <img src={pos.image} alt="" className='w-[400px] h-[400px] cursor-pointer object-cover' />
                    </Link>
                    <p className="mt-2 text-center text-md font-medium">{pos.name}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Position
