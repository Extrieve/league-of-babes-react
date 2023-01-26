import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Header from '../components/Header'
import Card from '../components/Card'
import '../App.css'
import { iChampion } from '../interfaces/iChampion'

function Champions({ champions }: { champions: iChampion[]}) {

  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   // access the champions array, fetch the profilepictureurl if the status is not 200, remove the champion from the array
  //   champions.forEach((champion: any) => {
  //     fetch(champion.profilePictureUrl)
  //       .then((response) => {
  //         if (response.status !== 200) {
  //           console.log('Error: ' + response.status)
  //           // remove champion from array
  //           champions.splice(champions.indexOf(champion), 1)
  //         }
  //       })
  //   })
  //   console.log(champions)
    
  // }, [champions])

  // Devide champions into 2 arrays
  const champions1 = champions.slice(0, champions.length / 3)
  const champions2 = champions.slice(champions.length / 3, 2*champions.length / 3)
  const champions3 = champions.slice(2*champions.length / 3)

  return (
    <div> 
      <Header title='League of Babes' color='red' />
      <button className='btn btn-danger' onClick={() => setCount(count + 1)}>Press me daddy {count}</button>
      <table className="table table-striped">
        <tbody>
          <tr>
            <td>
              {champions1.map((champion: any) => (
                <Card championName={champion.name} championPicture={champion.profilePictureUrl} />
                )
                )}
            </td>
            <td>
              {champions2.map((champion: any) => (
                <Card championName={champion.name} championPicture={champion.profilePictureUrl} />
                )
                )}
            </td>
            <td>
              {champions3.map((champion: any) => (
                <Card championName={champion.name} championPicture={champion.profilePictureUrl} />
              )
              )}
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  )
}

export default Champions