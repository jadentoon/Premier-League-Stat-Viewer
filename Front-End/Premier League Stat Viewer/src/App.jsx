import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Pages/Home/Home'
import Clubs from './Pages/Clubs/Clubs'
import Nationality from "./Pages/Nationality/nationality"
import Position from "./Pages/Position/Position"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/nationality" element={<Nationality />} />
          <Route path="/position" element={<Position />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
