export interface iChampion {
    name: string,
    profilePictureUrl: string
}

const fetchAllChampions = async () => {
    const response = await fetch('http://localhost:8080/champions')
    const data = await response.json()
    // Log every data point
    data.forEach((champion: iChampion) => {
        console.log(champion)
    })
    return data
}

const fetchChampion = async (name: string) => {
    const response = await fetch(`http://localhost:8080/champions/${name}`)
    const data = await response.json()
    return data
}

const createChampion = async (champion: iChampion) => {
    const response = await fetch('http://localhost:8080/champions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(champion)
    })
    const data = await response.json()
    return data
}

const updateChampion = async (champion: iChampion) => {
    const response = await fetch(`http://localhost:8080/champions/${champion.name}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(champion)
    })
    const data = await response.json()
    return data
}

const deleteChampion = async (name: string) => {
    const response = await fetch(`http://localhost:8080/champions/${name}`, {
        method: 'DELETE'
    })
    const data = await response.json()
    return data
}

export default { fetchAllChampions, fetchChampion, createChampion, updateChampion, deleteChampion }