import { useEffect, useState } from 'react'
import { Route, Routes, Link, RedirectFunction } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Card from '../components/Card'
import '../App.css'

function Home() {
  return (
    <div>
      <Header title={'League of Babes'}/>
      <Nav />
    </div>
  )
}

export default Home
