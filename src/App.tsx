import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './Header'
import Card from './Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [champions, setChampions] = useState([])

  // Fetch data from API
  useEffect(() => {
    fetch('http://localhost:8080/champions')
      .then(response => response.json())
      .then(data => setChampions(data)).catch(error => console.log(error))
  }, [])

  return (
    <div> 
      <Header title={'League of Babes'}/>
      {champions.map((champion: any) => (
        <Card championName={champion['name']} championPicture={champion['profilePictureUrl']} />
      )
      )}
      <button className='btn btn-primary' onClick={() => setCount(count + 1)}>Press me daddy {count}</button>
    </div>
  )
}

export default App
