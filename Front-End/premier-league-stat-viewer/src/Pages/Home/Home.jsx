import premier_league_logo from '../../Assets/premier-league-logo.png';
import './Home.css';

function Home() {
    return(
        <div>
            <div>
                <img src={premier_league_logo} alt="premier_league_logo" className='logo'/>
                <h1>Welcome to the Premier League Stat Viewer</h1>
                <p>Allowing you to look up all stats of your favourite players!</p>
                <button className='btn'>Get Started</button>
            </div>
        </div>
    );
}
export default Home