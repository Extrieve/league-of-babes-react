import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './Header'
import Card from './Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div> 
      <Header title={'League of Babes'}/>
      <Card championName='Ahri' championPicture='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_28.jpg' />
      <button className='btn btn-primary' onClick={() => setCount(count + 1)}>Press me daddy {count}</button>
    </div>
  )
}

export default App
