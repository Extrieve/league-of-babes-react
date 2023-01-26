import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
// import './App.css'
import Home from './pages/Home'
import Match from './pages/Match'
import Create from './pages/Create'
import Champions from './pages/Champions'
import Nav from './components/Nav'
import AllChampions from './data/AllChampions.json'
import { iChampion } from './interfaces/iChampion'


function App() {

  const [champions, setChampions] = useState<iChampion[]>([])
  // const [champions, setChampions] = useState([])


  // Async useEffect
  useEffect(() => {
    fetchChampions()
  }, [])

  // async function fetchChampions() {
  //   const response = await fetch('http://localhost:8080/champions')
  //   const data = await response.json()
  //   setChampions(data)
  // }

  // Ran out of railway free hosting, temporarily using local json file for testing
  async function fetchChampions() {
    setChampions(AllChampions)
  }

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/champions" element={<Champions champions={champions} />} />
        <Route path="/match" element={<Match champions={champions}/>} />
        <Route path="/create" element={<Create />} />
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
