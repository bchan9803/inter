import CreateRoomForm from "../components/CreateRoomForm"

const CreateRoom = () => {
    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault()
    //     console.log('new room created!')
    // }
    return (
        <main>

            <CreateRoomForm />


            {/* <form className='border-2 border-black mx-auto w-fit flex flex-col gap-2' onSubmit={handleSubmit}>
                <h1>Create Room</h1>
                <br />

                <label htmlFor="roomName">Room Name</label>
                <br />
                
                <input
                    className="bg-slate-400"
                    id="roomName"
                    name="roomName"
                    placeholder="Name"
                />
                <button type="submit">Submit</button>
            </form>  */}
        </main>
    )
}

export default CreateRoom;