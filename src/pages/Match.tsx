import '../App.css'
import { iChampion } from '../interfaces/iChampion'
import { useEffect, useState } from 'react'
import Card from '../components/Card'

function Match({ champions }: { champions: iChampion[]}) {
    
    const shuffleList = (list: any) => {
        for (let i = list.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [list[i], list[j]] = [list[j], list[i]];
        }
        return list
    }

    const shuffledChampions = shuffleList(champions)

    const champion1: iChampion = shuffledChampions.pop()
    const champion2: iChampion = shuffledChampions.pop()

    return(
        <>
        <div>
            <Card championName={champion1.name} championPicture={champion1.profilePictureUrl} />
            <Card championName={champion2.name} championPicture={champion2.profilePictureUrl} />
        </div>
        </>
    )
}

export default Match