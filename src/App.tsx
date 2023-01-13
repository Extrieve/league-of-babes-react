import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './Header'
import Card from './Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Fetch data from API
  const [champions, setChampions] = useState([])
  fetch('http://localhost:8080/champions')
    .then(response => response.json())
    .then(data => setChampions(data))

  console.log(champions)
  return (
    <div> 
      <Header title={'League of Babes'}/>
      {/* <Card championName='Ahri' championPicture='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_28.jpg' /> */}
      {champions.map((champion: any) => (
        <Card championName={champion['name']} championPicture={champion['profilePictureUrl']} />
      )
      )}
      <button className='btn btn-primary' onClick={() => setCount(count + 1)}>Press me daddy {count}</button>
    </div>
  )
}

export default App
