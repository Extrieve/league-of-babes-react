import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './Header'
import Card from './Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [champions, setChampions] = useState([])

  // Async useEffect
  useEffect(() => {
    fetchChampions()
  }, [])

  async function fetchChampions() {
    const response = await fetch('http://localhost:8080/champions')
    const data = await response.json()
    setChampions(data)
  }

  return (
    <div> 
      <Header title={'League of Babes'}/>
      <button className='btn btn-danger' onClick={() => setCount(count + 1)}>Press me daddy {count}</button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Picture</th>
          </tr>
        
        </thead>
        <tbody>
          {champions.map((champion: any) => (
            <tr>
              <td>{champion['name']}</td>
              <td><img src={champion['profilePictureUrl']} alt="" style={{"height": "15%", "width": "15%"}} /></td>
            </tr>
          )
          )}
        </tbody>

      </table>
      {/* {champions.map((champion: any) => (
        <Card championName={champion['name']} championPicture={champion['profilePictureUrl']} />
      )
      )} */}
    </div>
  )
}

export default App
