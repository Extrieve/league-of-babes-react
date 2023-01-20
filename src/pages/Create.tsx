function Create(){
    return (
        <div>
            <h1>Create</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name" />
                </div>
                <div className="form-group">
                    <label htmlFor="profilePictureUrl">Profile Picture URL</label>
                    <input type="text" className="form-control" id="profilePictureUrl" placeholder="Enter profile picture URL" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Create</button>
                </div>
            </form>
        </div>
    )
}

export default Create