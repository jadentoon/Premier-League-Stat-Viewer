import {Link} from "react-router-dom"
import premier_league_logo from '../../Assets/premier-league-logo.png';
import Navbar from '../../Components/Navbar/Navbar';

function Home() {
    return(
        <div className=' relative min-h-screen bg:gradient-to-b from-purple-50 to-white'>
            <Navbar />
            <div className= 'bg-gray-100 relative z-0 min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 space-y-8'>
                <img 
                    src={premier_league_logo} 
                    alt="premier_league_logo" 
                    className='w-60 md:w-80 drop-shadow-lg'
                />
                <h1 className='text-3xl md:text-5xl font-bold text-purple-900'>
                    Welcome to the Premier League Stat Viewer
                </h1>
                <p className='text-gray-600 max-w-xl'>
                    Easily look up stats for all your favourite players in the Premier League.
                </p>
                <Link to="/clubs"><button className='px-8 py-3 lightShadow cursor-pointer rounded-full 
                bg-purple-700 text-white hover:bg-purple-800 shadow-lg transition
                duration-300'>
                    Get Started</button></Link>
            </div>
        </div>
    );
}
export default Home