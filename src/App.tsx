import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Match from './pages/Match'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/match" element={<Match />} />
    </Routes>
  )
}

export default App
