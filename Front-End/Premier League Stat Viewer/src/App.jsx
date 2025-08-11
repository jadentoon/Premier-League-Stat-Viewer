import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Pages/Home/Home'
import Clubs from './Pages/Clubs/Clubs'
import Nationality from './Pages/Nationality/Nationality'
import Position from "./Pages/Position/Position"
import Search from "./Pages/Search/Search"
import PlayerData from "./Pages/Data Handling/PlayerData"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/nationality" element={<Nationality />} />
          <Route path="/position" element={<Position />} />
          <Route path="/search" element={<Search />} />
          <Route path="/data" element={<PlayerData />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
