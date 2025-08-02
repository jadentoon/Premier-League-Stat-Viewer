import { useEffect, useState }  from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Searchbar from '../../Components/Searchbar/Searchbar';

const Search = () => {
    return (
        <div className='relative min-h-screen bg-gradient-to-b from-purple-100 via-white to-purple-50 overflow-hidden'>
            <Navbar />
            <div className='z-10 min-h-screen px-4 py-20'>
                <main className='max-w-7xl mx-auto space-y-8'>
                    <header className='text-center fade-in'>
                        <h1 className='text-4xl md:text-5xl font-extrabold mt-4 text-purple-900'>
                            Search Players
                        </h1>
                        <p className='text-gray-600 mt-3'>
                            Use the search bar to search for players.
                        </p>
                    </header>

                    <div className='flex justify-center fade-in delay-400'>
                        <Searchbar 
                        recommendations={true}
                        location={'name'}
                        />
                    </div>
                </main>
            </div>
        </div>
    )
}
export default Search
