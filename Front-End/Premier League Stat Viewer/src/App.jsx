import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Pages/Home/Home'
import Clubs from './Pages/Clubs/Clubs'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/clubs" element={<Clubs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
