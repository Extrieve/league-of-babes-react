import '../App.css'
import { iChampion } from '../interfaces/iChampion'
import { useEffect, useState } from 'react'
import Card from '../components/Card'

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
    }, [shuffledChampions])

    // define handleVote function, the champion you vote for stays in the list, the other one gets removed
    const handleVote = (champion: iChampion) => {
        if (champion.name === champion1.name) {
            setVote1(vote1 + 1)
            setVote2(0)
            shuffledChampions = shuffledChampions.filter((champion) => champion.name !== champion2.name)
            setChampion2(shuffledChampions[1])
        } else {
            setVote2(vote2 + 1)
            setVote1(0)
            shuffledChampions = shuffledChampions.filter((champion) => champion.name !== champion1.name)
            setChampion1(shuffledChampions[0])
        }
    }



    return(
        <>
            <div className='container'>
                <h1>Match</h1>
                <div className='row'>
                    <div className='col'>
                        <Card championName={champion1.name} championPicture={champion1.profilePictureUrl} />
                        <button onClick={() => handleVote(champion1)}>Vote #{vote1}</button>
                    </div>
                    <div className='col'>
                        <Card championName={champion2.name} championPicture={champion2.profilePictureUrl} />
                        <button onClick={() => handleVote(champion2)}>Vote #{vote2}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Match