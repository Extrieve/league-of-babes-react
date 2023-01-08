import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div> 
      <Header title={'League of Babes'}/>
      <button onClick={() => setCount(count + 1)}>Press me daddy {count}</button>
    </div>
  )
}

export default App
