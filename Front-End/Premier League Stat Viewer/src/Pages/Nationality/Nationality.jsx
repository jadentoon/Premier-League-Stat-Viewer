import Navbar from '../../Components/Navbar/Navbar';
import {ReactCountryFlag} from "react-country-flag"


const Nationality = () => {
  return (
    <div>
        <Navbar/>
        <div className='relative z-0 min-h-screen px-4 py-20 space-y-8'>
                <h1 className='text-3xl font-bold mb-4'>NATIONALITIES</h1>
                <div>
                    <ReactCountryFlag
                    countryCode='AL'
                    svg
                    style={{
                        width: '10em',
                        height: '10em'
                    }}></ReactCountryFlag>
                </div>
        </div>
    </div>
  )
}

export default Nationality
