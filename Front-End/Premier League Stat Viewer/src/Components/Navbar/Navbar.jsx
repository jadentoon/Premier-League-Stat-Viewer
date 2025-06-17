import './Navbar.css';

function Navbar(){
    return(
        <div className='w-full py-[10px] px-[10%] flex justify-between items-center 
        fixed gap-[50px] bg-purple-300 drop-shadow-lg'>
            <ul className='flex list-none gap-[50px]'>
                <li>Home</li>
                <li>Clubs</li>
                <li>Nationalities</li>
                <li>Position</li>
                <li>Search</li>
            </ul>
        </div>
    );
} export default Navbar