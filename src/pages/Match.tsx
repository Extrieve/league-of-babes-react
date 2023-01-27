import '../App.css'
import { iChampion } from '../interfaces/iChampion'
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import { redirect, Navigate } from 'react-router-dom';

function shuffleList(list: any) {
    for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
    }
    return list
}

function Match({ champions }: { champions: iChampion[]}) {
    
    let shuffledChampions: iChampion[] = shuffleList(champions)
    const [champion1, setChampion1] = useState(shuffledChampions[0])
    const [champion2, setChampion2] = useState(shuffledChampions[1])
    const [vote1, setVote1] = useState(0)
    const [vote2, setVote2] = useState(0)

    useEffect(() => {
        setChampion1(shuffledChampions[0])
        setChampion2(shuffledChampions[1])
        shuffledChampions.shift()
        shuffledChampions.shift()
    }, [shuffledChampions])

    // define handleVote function, the champion you vote for stays in the list, the other one gets removed
    const handleVote = (champion: iChampion) => {

        if (champion.name === champion1.name) {
            setVote1(vote1 + 1)
            setVote2(0)
            setChampion2(shuffledChampions[0])
            shuffledChampions.shift()
        } else {
            setVote2(vote2 + 1)
            setVote1(0)
            setChampion1(shuffledChampions[0])
            shuffledChampions.shift()
        }

        if ((vote1 || vote2) === 4) {
            alert(`The winner is ${champion.name}!`);
            // Redirect to home page
            // redirect('/');
        }
    }


    return(
        <>
            <div className='container'>
                <h1>Match</h1>
                <table className='table'>
                    
                <div className='row'>
                    <div className='col'>
                        <Card championName={champion1.name} championPicture={champion1.profilePictureUrl} />
                        <button onClick={() => handleVote(champion1)}>Vote #{vote1}</button>
                    </div>
                    <div className='col'>
                        <Card championName={champion2.name} championPicture={champion2.profilePictureUrl} />
                        <button onClick={() => handleVote(champion2)}>Vote #{vote2}</button>
                    </div>
                    {/* Redirect if vote1 or vote2 === 4 */}
                    {vote1 === 4 || vote2 === 4 ?
                     <Navigate to='/' /> :
                      null}
                </div>
                </table>
            </div>
        </>
    )
}

export default Match