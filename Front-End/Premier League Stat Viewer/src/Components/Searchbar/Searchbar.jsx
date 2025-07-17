import React, { useEffect, useState } from 'react'
import { HiOutlineSearch } from "react-icons/hi";
import axios from 'axios'


const Searchbar = ({ recommendations, onSearch }) => {

  const [activeSearch, setActiveSearch] = useState([]);
  const [playerData, setPlayerData] = useState([]);
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
        setActiveSearch([])
        return false;
      }
      setActiveSearch((playerData.filter(n => n.toLowerCase().includes(e.target.value.toLowerCase())).slice(0, 8)))
    } else {
      onSearch(e.target.value)
    }
  }


  return (
    <form className='w-[500px] relative'>
      <div className='relative'>
        <input type="search"
          placeholder='Search Here'
          className='w-full p-4 rounded-full bg-purple-200'
          onChange={(e) => handleSearch(e)} />
        <button className='absolute right-1.5 top-1.5 -translate-y-0.5 p-4
        bg-purple-300 rounded-full cursor-pointer'>
          <HiOutlineSearch />
        </button>
      </div>
      {
        recommendations && activeSearch.length > 0 && (
          <div className='absolute top-20 p-4 bg-purple-200 w-full 
            rounded-xl left-0.5 -translate-x-0.5 flex flex-col gap-2'>
            {
              activeSearch.map(s => (
                <span>{s}</span>
              ))
            }
          </div>
        )
      }
    </form>
  )
}

export default Searchbar
