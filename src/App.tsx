import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
// import './App.css'
import Home from './pages/Home'
import Match from './pages/Match'
import Create from './pages/Create'
import Champions from './pages/Champions'
import Nav from './components/Nav'
import fetchAllChampions from './data/champions-data'
import { iChampion } from './data/champions-data'

function App() {

  const [champions, setChampions] = useState<iChampion[]>([])

  // Async useEffect
  useEffect(() => {
    // Fetch all champions
    const fetchChampions = async () => {
      const data = await fetchAllChampions.fetchAllChampions()
      setChampions(data)
    }
    fetchChampions()
  }, [])


  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/champions" element={<Champions />} />
        <Route path="/match" element={<Match champions={champions}/>} />
        <Route path="/create" element={<Create />} />
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
