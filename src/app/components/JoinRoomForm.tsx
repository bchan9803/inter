"use client";

import { useState } from "react";

const JoinRoomForm = () => {
    const [roomName, setRoomName] = useState("");
    const [roomPassword, setRoomPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch("/api/room", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            // body: JSON.stringify({ roomName, roomPassword }),
        });

        if (res.ok) {
            // setRoomName("");
            // setRoomPassword("");
            // console.log("res: ", res);
            console.log("room found operation successful!");
        } else {
            const data = await res.json();
            console.error("room found operation not successful!");
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
