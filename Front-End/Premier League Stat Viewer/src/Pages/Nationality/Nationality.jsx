import Navbar from '../../Components/Navbar/Navbar';
import Searchbar from '../../Components/Searchbar/Searchbar';
import nations from "../../data/nations.json"
import {ReactCountryFlag} from "react-country-flag"


const Nationality = () => {

  var nationNames = nations.map(function (c) {
      return c.nationName;
  })

  return (
    <div>
        <Navbar/>
        <div className='relative z-0 min-h-screen px-4 py-20 space-y-8'>
          <h1 className='text-3xl font-bold mb-4 py-5'>NATIONALITIES</h1>
          <Searchbar array={nationNames}/>
        </div>
    </div>
  )
}

export default Nationality
