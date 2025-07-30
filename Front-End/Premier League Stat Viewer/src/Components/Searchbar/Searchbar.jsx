import React, { useEffect, useState } from 'react'
import { HiOutlineSearch } from "react-icons/hi";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Searchbar = ({ recommendations, onSearch }) => {

  const [activeSearch, setActiveSearch] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [playerData, setPlayerData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (recommendations) {
      axios.get(`http://localhost:8081/api/v1/players`).then(
        response => {
          const names = response.data
            .map(p => p?.player)
            .filter(player => typeof player === 'string');
          console.log(names)
          setPlayerData(names);
        }
      ).catch(error => {
        console.error('Error fetching players:', error);
      });
    }
  }, [recommendations]);

  const handleSearch = (e) => {
    if (recommendations) {
      if (e.target.value == '') {
        setActiveSearch([]);
        setSearchQuery('');
        return false;
      }
      setActiveSearch((playerData.filter(n => n.toLowerCase().includes(e.target.value.toLowerCase())).slice(0, 8)));
      setSearchQuery(e.target.value);
    } else {
      onSearch(e.target.value)
    }
  }

  const handleSearchClick = search => {
    navigate(`/data/?name=${encodeURIComponent(search)}`);
  };


  return (
    <div className='w-[500px] relative'>
      <div className='relative'>
        <input type="search"
          placeholder='Search Here'
          className='w-full p-4 rounded-full bg-purple-200'
          onChange={(e) => handleSearch(e)} />
        <button 
        className='absolute right-1.5 top-1.5 -translate-y-0.5 p-4
        bg-purple-300 rounded-full cursor-pointer'
        onClick={() => handleSearchClick(searchQuery)}>
          <HiOutlineSearch />
        </button>
      </div>
      {
        recommendations && activeSearch.length > 0 && (
          <div className='absolute top-20 p-4 bg-purple-200 w-full 
            rounded-xl left-0.5 -translate-x-0.5 flex flex-col gap-2'>
            {
              activeSearch.map((s,index) => (
                <span
                key={index}
                className='cursor-pointer hover:bg-purple-300 p-2 rounded-lg'
                onClick={() => handleSearchClick(s)}
                >{s}</span>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default Searchbar
