import React, { useState } from 'react'
import {HiOutlineSearch} from "react-icons/hi";
import nations from "../../data/nations.json"

const Searchbar = () => {

  const [activeSearch, setActiveSearch] = useState([]);

  const handleSearch = (e) => {
    if (e.target.value == '') {
      setActiveSearch([])
      return false;
    }
    var nationNames = nations.map(function (c) {
      return c.nationName;
    })
    setActiveSearch((nationNames.filter(n => n.toLowerCase().includes(e.target.value.toLowerCase())).slice(0,8)))
  }
  return (
    <form className='w-[500px] relative'>
      <div className='relative'>
        <input type="search" 
        placeholder='Search Here'
        className='w-full p-4 rounded-full bg-purple-200'
        onChange={(e) => handleSearch(e)}/>
        <button className='absolute right-1.5 top-1.5 -translate-y-0.5 p-4
        bg-purple-300 rounded-full'>
          <HiOutlineSearch/>
        </button>
      </div>

      {
        activeSearch.length > 0 && (
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
