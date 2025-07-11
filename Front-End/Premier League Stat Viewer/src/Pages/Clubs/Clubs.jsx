import Navbar from '../../Components/Navbar/Navbar';
import Searchbar from '../../Components/Searchbar/Searchbar';

function Clubs(){
    var clubs = ["arsenal", "aston villa", "chelsea"] //Placeholder
    return (
        <div>
            <Navbar/>
            <div className='relative z-0 min-h-screen px-4 py-20 space-y-8'>
                <h1 className='text-3xl font-bold mb-4 py-5'>CLUBS</h1>
                <Searchbar array={clubs}/>
            </div>
        </div>
    )
}
export default Clubs