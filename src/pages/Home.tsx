import { useEffect, useState } from 'react'
import { Route, Routes, Link, RedirectFunction } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Header from '../components/Header'
import '../App.css'


function Home() {
  return (
    <div>
      <Header title={'Welcome to League of Babes'}/>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>League of Babes</h1>
              <p>League of Legends is a multiplayer online battle arena video game developed and published by Riot Games for Microsoft Windows and macOS. Inspired by the Warcraft III: The Frozen Throne mod Defense of the Ancients, the game follows a freemium model and is supported by microtransactions, and was inspired by the Warcraft III: The Frozen Throne mod, Defense of the Ancients.</p>
              <p>League of Legends was generally well received upon its release, and has since grown exponentially in popularity, with an active and expansive fanbase around the world. By July 2012, League of Legends was the most played PC game in North America and Europe in terms of the number of hours played. By 2014, it had become the most played PC game in the world, with over 67 million active players. In 2015, it was ranked as the most played video game in the world, with an estimated 100 million players. As of 2019, League of Legends is the second most played video game in the world by player count, behind only PlayerUnknown's Battlegrounds.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
