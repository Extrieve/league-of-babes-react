import { useState } from 'react'
import createChampion from '../data/champions-data'
import { iChampion } from '../interfaces/iChampion'

function Create(){

    const [name, setName] = useState('')
    const [profilePictureUrl, setProfilePictureUrl] = useState('')

    const handleSubmit = (event: any) => {
        event.preventDefault()
        const newChampion: iChampion = { name, profilePictureUrl }
        createChampion.createChampion(newChampion)
    }

    return (
        <div>
            <h1>Create</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="Enter name"
                    onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="profilePictureUrl">Profile Picture URL</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="profilePictureUrl" 
                    placeholder="Enter profile picture URL"
                    onChange={(event) => setProfilePictureUrl(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Create</button>
                </div>
            </form>
        </div>
    )
}

export default Create