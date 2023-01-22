import { useEffect, useState } from 'react'
import { Route, Routes, Link, RedirectFunction } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Header from '../components/Header'
import '../App.css'

function Home() {
  return (
    <div>
      <Header title={'Welcome to League of Babes'}/>
    </div>
  )
}

export default Home
