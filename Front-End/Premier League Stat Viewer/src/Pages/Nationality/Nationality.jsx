import Navbar from '../../Components/Navbar/Navbar';
import Searchbar from '../../Components/Searchbar/Searchbar';
import nations from "../../data/nations.json";
import { ReactCountryFlag } from "react-country-flag";

const Nationality = () => {
  const nationNames = nations.map(c => c.nationName);
  return (
    <div>
      <Navbar />
      <div className='relative z-0 min-h-screen px-4 py-20 space-y-8'>
        <h1 className='text-3xl font-bold mb-4 py-5'>NATIONALITIES</h1>
        <Searchbar array={nationNames} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nations.map(nation => (
            <div key={nation.nationCode2} className="flex flex-col items-center">
              <ReactCountryFlag
                countryCode={nation.nationCode2}
                svg
                style={{
                  width: '400px',
                  height: '400px',
                }}
                title={nation.nationName}
              />
              <p className="mt-2 text-center text-md font-medium">{nation.nationName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nationality;
