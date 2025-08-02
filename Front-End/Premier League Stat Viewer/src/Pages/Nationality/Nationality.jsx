import { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Searchbar from '../../Components/Searchbar/Searchbar';
import nations from "../../data/nations.json";
import { ReactCountryFlag } from "react-country-flag";
import { Link } from "react-router-dom"

const Nationality = () => { 
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredNations, setFilteredNations] = useState([])
  //const nationNames = nations.map(c => c.nationName);

  useEffect(() => {
    const filtered = nations.filter(nation =>
      nation.nationName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredNations(filtered)
  }, [searchQuery])

  return (
    <div>
      <Navbar />
      <div className='relative z-0 min-h-screen px-4 py-20 bg-gray-50'>
        <main className='max-w-7xl mx-auto space-y-8'>

          <header className='text-center'>
            <h1 className='text-4xl font-extrabold mt-4 text-gray-800'>Explore Nations</h1>
            <p className='text-gray-500 mt-3'>Browse through all available nations</p>
          </header>

          <div className='flex justify-center'>
            <Searchbar onSearch={setSearchQuery} location={'nation'} />
          </div>

          {
            filteredNations.length === 0 ?
              <p className='text-center text-gray-500 text-lg mt-10'>
                No nations found for "{searchQuery}"
              </p>
              :
              <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNations.map(nation => (
                  <Link
                    to={`/data?nation=${encodeURIComponent(nation.nationCode3)}`}
                  >
                    <article
                      key={nation.nationCode2}
                      className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center py-6 px-4 cursor-pointer"
                    >
                      <div className='relative h-64 flex items-center justify-center bg-gray-100 w-full'>
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
                      <p className="mt-4 text-center text-md font-semibold text-gray-800">
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
