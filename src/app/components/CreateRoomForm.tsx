"use client";

import { useState } from "react";

const CreateRoomForm = () => {
    const [roomName, setRoomName] = useState("");
    const [roomPassword, setRoomPassword] = useState("");
    // const [roomUsers, setRoomUsers] = useState("");
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("new room created!");

        /// for user API
        const testFirebaseUID = 'jI4udv6x1wMdnPK3Z11mCAsUjF33'
        const userRes = await fetch(`/api/user?firebaseUID=${testFirebaseUID}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const userData = await userRes.json();
        const roomUsers = [userData.user.username]
        console.log("username_a: ", roomUsers);
        ///

        /// for Room API
        const roomRes = await fetch("/api/room", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ roomName, roomPassword, users: roomUsers }),
        });
        const roomData = await roomRes.json()

        if (roomRes.ok) {
            setRoomName(roomName);
            setRoomPassword(roomPassword);
        } else {
            console.error("ChatRoom POST failed!", roomData);
        }
        ///
    };


    return (
        <form
            className="border-2 border-black mx-auto w-fit flex flex-col gap-2"
            onSubmit={handleSubmit}
        >
            <h1>Create Room</h1>
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
export default CreateRoomForm;
