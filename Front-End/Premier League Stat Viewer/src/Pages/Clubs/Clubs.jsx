import Navbar from '../../Components/Navbar/Navbar';
import Searchbar from '../../Components/Searchbar/Searchbar';
import clubs from "../../data/clubs.json";

function Clubs() {
    return (
        <div>
            <div>
                <Navbar />
                <div className='relative z-0 min-h-screen px-4 py-20 bg-gray-100'>
                    <main className='max-w-7xl mx-auto space-y-8'>
                        <header className='text-center'>
                            <h1 className='text-4xl font-extrabold mt-4 text-gray-800'>Explore Clubs</h1>
                            <p className='text-gray-500 mt-3'>Browse through all available clubs</p>
                        </header>

                        <div className='flex justify-center'>
                            <Searchbar/>
                        </div>
                        {clubs.map(club => (
                            <img 
                                src={club.badge} 
                                alt={club.name} 
                                className='w-[200px] h-[200px]' 
                            />
                        ))}
                    </main>
                </div>
            </div>
        </div>
    )
}
export default Clubs