import {Link} from "react-router-dom"
import premier_league_logo from '../../Assets/premier-league-logo.png';
import Navbar from '../../Components/Navbar/Navbar';
import "./Home.css";

function Home() {
    return(
        <div className=' relative min-h-screen bg-gradient-to-b from-purple-200 via-white to-purple-50 overflow-hidden'>

            <Navbar />
            <div className= 'relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 space-y-8'>
                <img 
                    src={premier_league_logo} 
                    alt="premier_league_logo" 
                    className='w-60 md:w-80 drop-shadow-lg fade-in delay-200'
                />
                <h1 className='text-3xl md:text-5xl font-bold text-purple-900 fade-in delay-200'>
                    Welcome to the Premier League Stat Viewer
                </h1>
                <p className='text-gray-600 max-w-xl fade-in delay-400'>
                    Easily look up stats for all your favourite players in the Premier League.
                </p>
                <Link to="/clubs">
                    <button 
                    className='px-8 py-3 cursor-pointer rounded-full bg-gradient-to-r
                    from-purple-500 to-purple-700 text-white shadow-lg 
                    hover:shadow-2xl hover:scale-105 transition-all duration-300 fade-in
                    delay-600'>
                    Get Started</button></Link>
            </div>
        </div>
    );
}
export default Home