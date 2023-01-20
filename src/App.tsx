import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Match from './pages/Match'
import Create from './pages/Create'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/match" element={<Match />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  )
}

export default App
