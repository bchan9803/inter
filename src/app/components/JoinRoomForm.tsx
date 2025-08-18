"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const JoinRoomForm = () => {
    const router = useRouter();
    const [roomName, setRoomName] = useState("");
    const [roomPassword, setRoomPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch(
            `/api/room?roomName=${encodeURIComponent(
                roomName
            )}&roomPassword=${encodeURIComponent(roomPassword)}`
        );
        
        if (res.ok) {
            console.log("joinRoomForm operation successful!");
            
            const data = await res.json()

            if (data.exists) {
                console.log('room is found!')
                router.push('/msg')
            } else {
                console.log('room not found!')
                alert('Room not found! Please try again.')
                // router.push('/testRoomDenied')
            }
        } else {
            console.error("ERROR: joinRoomForm operation not successful!");
        }
    };
    return (
        <form
            className="border-2 border-black mx-auto w-fit flex flex-col gap-2"
            onSubmit={handleSubmit}
        >
            <h1>Join Room</h1>
            <br />

            <label htmlFor="roomName">Room Name</label>
            <br />
            <input
                className="bg-slate-400"
                type="text"
                placeholder="Room Name"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                required
            />

            <br />
            <label htmlFor="roomName">Password</label>
            <input
                className="bg-slate-400"
                type="password"
                placeholder="Password"
                value={roomPassword}
                onChange={(e) => setRoomPassword(e.target.value)}
                required
            />

            <button type="submit">Submit</button>
        </form>
    );
};
export default JoinRoomForm;
