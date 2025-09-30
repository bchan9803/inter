"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuthContext } from "../contexts/authContext";

const JoinRoomForm = () => {
    const { userLoggedIn, currentUser} = useAuthContext();

    const router = useRouter();
    const [roomID, setRoomID] = useState("");
    const [roomPassword, setRoomPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        /// for user API ///
        /*
            TODO: fetch firebaseUID
        */
        const testFirebaseUID = currentUser.uid;

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


        /// for Room API ///
        const addUserToRoomRes = await fetch("/api/room", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: roomID, users: roomUsers }),
        })

        const joinRoomRes = await fetch(
            `/api/room?roomID=${encodeURIComponent(
                roomID
            )}&roomPassword=${encodeURIComponent(roomPassword)}`
        );
        const joinRoomData = await joinRoomRes.json()
        
        if (joinRoomRes.ok) {
            console.log("joinRoomForm operation successful!");

            if (joinRoomData.exists) {
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

            <label htmlFor="roomID">Room ID</label>
            <br />
            <input
                className="bg-slate-400"
                type="text"
                placeholder="Room Name"
                value={roomID}
                onChange={(e) => setRoomID(e.target.value)}
                required
            />

            <br />
            <label htmlFor="roomID">Password</label>
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
