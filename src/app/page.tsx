"use client";

import Link from "next/link";
// import HomeMsgPreview from "./components/HomeMsgPreview";
import { useAuthContext } from "./contexts/authContext";
import { useEffect, useState } from "react";

export default function Home() {
    const [name, setName] = useState("User");
    const [isUsernameLoading, setIsUsernameLoading] = useState(false);
    const { userLoggedIn, currentUser, loading } = useAuthContext();

    if (loading) return <p>Loading...</p>;

    // let name = "User";

    useEffect(() => {
        // const fetchUsername = async () => {
        //     const uidTT = currentUser?.uid;

        //     const usernameResTT = await fetch(`/api/user?firebaseUID=${uidTT}`);
        //     const usernameDataTT = await usernameResTT.json();

        //     console.log("usernameDataTT: ", usernameDataTT);

        //     name = usernameDataTT.user.username;
        // };

        const fetchUsername = async () => {
            if (currentUser) {
                try {
                    setIsUsernameLoading(true);
                    const uidTT = currentUser?.uid;
                    const usernameResTT = await fetch(
                        `/api/user?firebaseUID=${uidTT}`
                    );
                    const usernameDataTT = await usernameResTT.json();

                    console.log("usernameDataTT: ", usernameDataTT);

                    setName(usernameDataTT.user.username);
                } catch (err) {
                    console.error(
                        "Error while fetching username from UID: ",
                        err
                    );
                } finally {
                    setIsUsernameLoading(false);
                }
            }
        };

        fetchUsername();
    }, [currentUser]);

    return (
        <main className="flex flex-col ">
            <h1 className="text-3xl font-semibold flex gap-2">
                Welcome {userLoggedIn ? <p>{name}</p> : <p>Not logged in</p>}
            </h1>

            {/* <span className="border-2 border-red-600 px-8"> */}
            {/* <HomeMsgPreview /> */}
            {/* </span> */}

            <Link
                href="/msg"
                className="border-2 border-black font-semibold w-fit bg-gray-300 rounded-md py-4 px-2 my-7"
            >
                New Message
            </Link>

            <Link
                href="/rooms"
                className="border-2 border-black font-semibold w-fit bg-gray-300 rounded-md py-4 px-2 my-7"
            >
                Join / Create Room
            </Link>
        </main>
    );
}
